# EasyMedLearning — Project Instructions

Before making changes, read all three project briefs:

1. docs/project-briefs/01_PRODUCT_AND_DESIGN_BRIEF.md
2. docs/project-briefs/02_CONTENT_SOURCE_OF_TRUTH.md
3. docs/project-briefs/03_TECHNICAL_ARCHITECTURE_AND_BUILD_PLAN.md

## Authority
- The design brief controls product and visual direction.
- The content brief is the source of truth for website copy.
- The technical brief controls architecture, implementation and testing.
- If instructions conflict, identify the conflict rather than inventing
  a business decision.

## Working style
- Think through the architecture and implementation plan before coding.
- You have creative freedom to improve layout, composition, component
  boundaries, animation and responsive behaviour.
- Do not copy references literally or force every section into cards
  or full-screen layouts.
- Build a premium, distinctive, responsive marketing website.
- Do not invent prices, testimonials, awards, URLs, photographs,
  course features or instructor credentials.
- The waitlist is removed. Use Learnyst for course access, but do not
  invent its URL.
- Use Next.js App Router, TypeScript, Tailwind CSS and selective GSAP.
- Do not introduce Three.js, Web Workers, WASM or service workers
  without a demonstrated requirement.

## Production Integrity & Operational Guardrails
- **100% Pure SSG (Static Site Generation)**: The entire website is strictly a 100% static HTML export (`output: 'export'`) hosted on static CDN (Cloudflare Pages). Never introduce dynamic Node.js server runtimes, server-side cookies/headers, or persistent server API dependencies. All pages and assets must compile cleanly into `out/` via `npm run build`.
- **Zero Content Invention**: Every single piece of website copy must derive strictly from `02_CONTENT_SOURCE_OF_TRUTH.md` or founder-supplied statements. Never invent clinical explanations, physiological mechanisms, or unapproved course topics.
- **Zero Prototype Badges**: Do not display developer placeholders or prototype labels (e.g. "Live Scroll Progress", "Demo", "Interactive Scrub") in production UI.
- **Strict Git Boundary**: Never run git mutating commands (`git add`, `git reset`, `git commit`, `git checkout`, `git restore`, `git stash`). Only read-only commands (`git status` and `git diff`) are permitted.
- **Scroll Trigger Integrity**: Never trigger animations before previous content has finished its viewport lifecycle. Triggers must respect natural scroll progression.

<!-- BEGIN:nextjs-agent-rules -->
## Next.js 15+ App Router Conventions & Official Reference
- **100% SSG Architecture (`output: 'export'`)**: The site is completely static. Always configure `generateStaticParams()` on dynamic routes, `export const dynamic = 'force-static'` on route handlers (`robots.ts`, `sitemap.ts`), and `images: { unoptimized: true }` in `next.config.ts`. All interactive components (forms, video embeds, players) must function purely on the client without requiring a running Next.js backend server.
- **Asynchronous Route Params**: Dynamic route `params` and `searchParams` in Next.js 15+ pages, layouts, and `generateMetadata` must always be awaited as Promises: `const { slug } = await params;`.
- **Modern Navigation**: Always import routing utilities from `next/navigation` (`useRouter`, `usePathname`, `useSearchParams`, `notFound`), never legacy `next/router`.
- **UI Animation & Skills**:
  - Use `.agents/skills/magic-ui/SKILL.md` for polished UI components (e.g. `BlurFade`, `BorderBeam`, `BentoGrid`). Preserve clinical calm and brand colors (`#17354B`, `#367D78`, `#FAF9F6`).
  - Use `.agents/skills/gsap-*/SKILL.md` (`gsap-core`, `gsap-react`, `gsap-scrolltrigger`, `gsap-timeline`) for any timeline synchronization and React cleanup via `useGSAP` or `gsap.context()`.
- **Official Documentation**: Query `https://nextjs.org/docs/llms.txt` and append `.md` to any Next.js doc URL to retrieve the latest canonical guidance.
<!-- END:nextjs-agent-rules -->

## Execution
1. Inspect the existing project before changing files.
2. Produce a concise implementation plan.
3. Implement the website in modular, reusable components.
4. Run available build, lint and type checks.
5. Test all four routes and responsive layouts.
6. Review accessibility, performance and content accuracy.
7. Report completed work, test results and unresolved dependencies.