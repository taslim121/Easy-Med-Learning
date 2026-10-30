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
- **Zero Content Invention**: Every single piece of website copy must derive strictly from `02_CONTENT_SOURCE_OF_TRUTH.md` or founder-supplied statements. Never invent clinical explanations, physiological mechanisms, or unapproved course topics.
- **Zero Prototype Badges**: Do not display developer placeholders or prototype labels (e.g. "Live Scroll Progress", "Demo", "Interactive Scrub") in production UI.
- **Strict Git Boundary**: Never run git mutating commands (`git add`, `git reset`, `git commit`, `git checkout`, `git restore`, `git stash`). Only read-only commands (`git status` and `git diff`) are permitted.
- **Scroll Trigger Integrity**: Never trigger animations before previous content has finished its viewport lifecycle. Triggers must respect natural scroll progression.

## Execution
1. Inspect the existing project before changing files.
2. Produce a concise implementation plan.
3. Implement the website in modular, reusable components.
4. Run available build, lint and type checks.
5. Test all four routes and responsive layouts.
6. Review accessibility, performance and content accuracy.
7. Report completed work, test results and unresolved dependencies.