"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface Floating3DParticlesProps
  extends Omit<React.CanvasHTMLAttributes<HTMLCanvasElement>, "width" | "height"> {
  /**
   * Number of particles rendered on desktop viewports.
   * On mobile screens (< 768px), particle count automatically scales down
   * to 20 % to preserve smooth frame rates.
   * @default 400
   */
  quantity?: number
  /**
   * Particle color — 3 or 6 digit hex string.
   * @default "#367D78"
   */
  color?: string
  /**
   * Mean particle radius in px. Each particle is randomly assigned a size
   * within ±40 % of this value.
   * @default 5
   */
  size?: number
  /**
   * Mean particle opacity (0–1). Each particle randomly varies within
   * ±0.2 of this value, clamped to [0, 1].
   * @default 0.3
   */
  opacity?: number
  /**
   * Vertical floating speed in px per frame. Positive values drift upward,
   * negative values downward.
   * @default 0.8
   */
  drift?: number
  /**
   * 3-D depth intensity on a 0–1 scale. `0` produces a flat 2D plane; `1`
   * creates strong perspective with pronounced near/far scaling.
   * @default 0.5
   */
  depth?: number
}

// ---------------------------------------------------------------------------
// Particle State (Polar coordinates + 3D perspective projection)
// ---------------------------------------------------------------------------

interface Particle {
  angle: number
  radius: number
  y: number
  size: number
  angularSpeed: number
  opacity: number
  screenX: number
  screenY: number
  projectedScale: number
}

// ---------------------------------------------------------------------------
// Constants & Helpers
// ---------------------------------------------------------------------------

const MOBILE_BREAKPOINT = 768
const SPREAD_FACTOR = 1.2
const MAX_DPR = 2

function hexToRgba(hex: string, alpha: number) {
  const clean = hex.replace("#", "").trim()
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean

  if (!/^[0-9a-f]{6}$/i.test(full)) return `rgba(54,125,120,${alpha})`

  const n = Number.parseInt(full, 16)
  return `rgba(${(n >> 16) & 0xff},${(n >> 8) & 0xff},${n & 0xff},${alpha})`
}

function deriveProjection(depth: number) {
  const t = Math.max(0, Math.min(1, depth))
  const fov = 800 - t * 600 // [800, 200]
  const perspectiveDistance = 100 + t * 700 // [100, 800]
  const depthRange = t * Math.min(400, fov + perspectiveDistance - 1)
  return { fov, perspectiveDistance, depthRange }
}

function spawnParticle(
  width: number,
  height: number,
  size: number,
  opacity: number
): Particle {
  const sizeVariance = size * 0.4
  const opacityVariance = 0.2
  return {
    angle: Math.random() * Math.PI * 2,
    radius: Math.random() * Math.max(width, height) * SPREAD_FACTOR,
    y: (Math.random() - 0.5) * height * 2,
    size: Math.max(0.5, size - sizeVariance + Math.random() * sizeVariance * 2),
    angularSpeed: 0.0015 + Math.random() * 0.001,
    opacity: Math.min(
      1,
      Math.max(0, opacity - opacityVariance + Math.random() * opacityVariance * 2)
    ),
    screenX: 0,
    screenY: 0,
    projectedScale: 1,
  }
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function Floating3DParticles({
  quantity = 180,
  color = "#367D78",
  size = 4,
  opacity = 0.25,
  drift = 0.6,
  depth = 0.5,
  className,
  style,
  ...canvasProps
}: Floating3DParticlesProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const ioRef = React.useRef<IntersectionObserver | null>(null)
  const stateRef = React.useRef({
    mounted: false,
    paused: true,
    reducedMotion: false,
    rafId: null as number | null,
  })

  const colorRef = React.useRef(color)
  colorRef.current = color

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const s = stateRef.current
    s.mounted = true
    s.paused = true

    let width = 0
    let height = 0
    let particles: Particle[] = []
    let staticDirty = true

    const { fov, perspectiveDistance, depthRange } = deriveProjection(depth)

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const syncReducedMotion = () => {
      s.reducedMotion = mq.matches
    }
    syncReducedMotion()

    const draw = (p: Particle) => {
      const r = Math.max(0, p.size * p.projectedScale)
      if (r <= 0) return

      ctx.beginPath()
      ctx.fillStyle = hexToRgba(colorRef.current, p.opacity)
      ctx.arc(p.screenX, p.screenY, r, 0, Math.PI * 2)
      ctx.fill()
    }

    const staticFrame = () => {
      ctx.clearRect(0, 0, width, height)
      const cx = width / 2
      const cy = height / 2

      for (const p of particles) {
        const denom = Math.max(1, fov + perspectiveDistance)
        const scale = fov / denom
        p.screenX = cx + Math.cos(p.angle) * p.radius * scale
        p.screenY = cy + p.y * scale
        p.projectedScale = scale
        draw(p)
      }
    }

    const tick = () => {
      if (!s.mounted || s.paused) {
        s.rafId = null
        return
      }

      if (s.reducedMotion) {
        if (staticDirty) {
          staticDirty = false
          staticFrame()
        }
        s.rafId = null
        return
      }

      staticDirty = true
      ctx.clearRect(0, 0, width, height)

      const cx = width / 2
      const cy = height / 2

      for (const p of particles) {
        p.angle += p.angularSpeed
        p.y -= drift

        if (p.y < -height) {
          p.y = height
          p.radius = Math.random() * Math.max(width, height) * SPREAD_FACTOR
        } else if (p.y > height) {
          p.y = -height
          p.radius = Math.random() * Math.max(width, height) * SPREAD_FACTOR
        }

        const denom = Math.max(
          1,
          fov + perspectiveDistance + Math.sin(p.angle) * depthRange
        )
        const scale = fov / denom

        p.screenX = cx + Math.cos(p.angle) * p.radius * scale
        p.screenY = cy + p.y * scale
        p.projectedScale = scale
      }

      particles.sort((a, b) => a.projectedScale - b.projectedScale)
      for (const p of particles) draw(p)

      s.rafId = requestAnimationFrame(tick)
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = Math.max(1, Math.round(rect.width))
      height = Math.max(1, Math.round(rect.height))

      const dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, MAX_DPR))
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const isMobile = window.innerWidth < MOBILE_BREAKPOINT
      const count = isMobile
        ? Math.min(35, Math.max(8, Math.round(quantity * 0.15)))
        : Math.min(220, quantity)

      particles = Array.from({ length: Math.max(0, count) }, () =>
        spawnParticle(width, height, size, opacity)
      )

      staticDirty = true
    }

    const onVisibilityChange = () => {
      if (document.hidden) {
        s.paused = true
        if (s.rafId !== null) {
          cancelAnimationFrame(s.rafId)
          s.rafId = null
        }
      }
    }

    const ro =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(resize) : null
    if (ro) {
      ro.observe(canvas)
    } else {
      window.addEventListener("resize", resize)
    }

    if (typeof IntersectionObserver !== "undefined") {
      ioRef.current = new IntersectionObserver(
        ([entry]) => {
          if (!entry || !s.mounted) return
          const isVisible = entry.isIntersecting && !document.hidden
          if (isVisible) {
            if (s.paused) {
              s.paused = false
              if (s.rafId === null) {
                s.rafId = requestAnimationFrame(tick)
              }
            }
          } else {
            s.paused = true
            if (s.rafId !== null) {
              cancelAnimationFrame(s.rafId)
              s.rafId = null
            }
          }
        },
        { threshold: 0, rootMargin: "100px" }
      )
      ioRef.current.observe(canvas)
    } else {
      s.paused = false
      s.rafId = requestAnimationFrame(tick)
    }

    document.addEventListener("visibilitychange", onVisibilityChange)
    mq.addEventListener("change", syncReducedMotion)

    resize()

    return () => {
      s.mounted = false
      if (s.rafId !== null) {
        cancelAnimationFrame(s.rafId)
        s.rafId = null
      }
      ro?.disconnect()
      if (!ro) window.removeEventListener("resize", resize)
      ioRef.current?.disconnect()
      ioRef.current = null
      document.removeEventListener("visibilitychange", onVisibilityChange)
      mq.removeEventListener("change", syncReducedMotion)
    }
  }, [quantity, size, opacity, drift, depth])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        className
      )}
      style={style}
      {...canvasProps}
    />
  )
}
