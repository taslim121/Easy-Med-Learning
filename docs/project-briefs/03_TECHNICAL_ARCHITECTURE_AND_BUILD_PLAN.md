# EasyMedLearning — Technical Architecture & Build Plan

**Document role:** Engineering agent / implementation specification  
**Use:** Feed this after `01_PRODUCT_AND_DESIGN_BRIEF.md` and `02_CONTENT_SOURCE_OF_TRUTH.md`.  
**Last updated:** 18 October 2026

---

## 1. Required stack and platform safeguard

### Preferred stack

- **Next.js App Router**
- **React + TypeScript**
- **Tailwind CSS v4** for the main styling system
- **CSS Modules** only for complex one-off visual components, carefully scoped styles or where utility classes become less maintainable
- **GSAP + ScrollTrigger** for selected, balanced scroll-triggered interactions
- **Inline/local SVG** for lightweight decorative ECG linework and simple illustrations
- **Next.js metadata APIs** for titles, descriptions, social metadata and page SEO
- **Next.js image optimisation** or equivalent responsive image delivery for real approved assets
- A server-side contact-form endpoint using a configured email/form provider

Do not use Three.js or WebGL. Do not add a component library, animation library, state library, database, CMS, authentication service or form service unless a concrete requirement justifies it.

Official starting references:

- Google AI Studio Build mode: https://ai.google.dev/gemini-api/docs/aistudio-build-mode
- Next.js installation: https://nextjs.org/docs/app/getting-started/installation
- Next.js metadata: https://nextjs.org/docs/app/getting-started/metadata-and-og-images
- Tailwind + Next.js: https://tailwindcss.com/docs/installation/framework-guides/nextjs
- GSAP ScrollTrigger: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- Core Web Vitals: https://web.dev/articles/vitals

### Critical AI Studio compatibility check

Google AI Studio Build mode currently documents React as the default client-side web frontend with a Node.js server runtime. Do not assume the preview tool natively scaffolds or runs Next.js App Router simply because a prompt requests it.

At the very start:

1. Inspect the environment, existing repository and package configuration.
2. Determine whether the project can run and preview an actual Next.js App Router application.
3. If it can, implement the required Next.js stack.
4. If it cannot, **do not silently deliver a React/Vite SPA and call it Next.js**. Explain the limitation briefly and preserve a real, exportable Next.js project for local/deployment use, or ask the user to choose between an honest React preview and a Next.js export only if the constraint prevents progress. Do not create two competing implementations without a clear reason.
5. Make the output runnable and document exact commands. Do not invent successful build results.

Use Google AI Studio GitHub sync/export capabilities only where available. Never claim a repository was pushed or deployed unless the tool actually confirms it.

## 2. Architecture principles

1. **Static by default:** Home, About and Courses are content-led public pages. Prefer static/pre-rendered output where compatible with the final hosting and form setup. Do not introduce SSR/network work on every request without a reason.
2. **Server Components by default:** make pages and simple content sections Server Components. Mark a component `"use client"` only where it genuinely needs client interaction (mobile menu, accordion if implemented interactively, or GSAP motion).
3. **Content is data, layout is components:** keep authored copy in one typed content module rather than scattering duplicate strings across JSX.
4. **One source of truth:** navigation, footer links, social URLs, course link, media URLs, launch status and pending fields should come from a small central configuration/content layer.
5. **No fake integrations:** a form or CTA must not claim success if no real endpoint or URL is configured.
6. **Asset-ready:** stable aspect ratios and explicit dimensions should allow actual photography to replace placeholders without layout shifts.
7. **No overengineering:** no DB, waitlist store, user session, LMS database, Web Worker, WASM, service worker/PWA or background sync in launch scope.

## 3. Suggested modular project structure

Adapt to the repo's existing conventions instead of renaming everything blindly. The following is a guide, not a demand to create a file for every tiny JSX fragment.

```text
src/
  app/
    layout.tsx
    page.tsx                  # Home
    about/page.tsx
    courses/page.tsx
    contact/page.tsx
    privacy/page.tsx          # Only with approved legal content; otherwise launch blocker
    terms/page.tsx            # Only with approved legal content; otherwise launch blocker
    api/
      contact/route.ts        # If route-handler architecture is selected
    sitemap.ts
    robots.ts
    globals.css
  components/
    layout/
      site-header.tsx
      site-footer.tsx
      mobile-navigation.tsx
    navigation/
      course-cta.tsx
      breadcrumb.tsx
    motion/
      reveal.tsx
      ecg-trace.tsx
    home/
      home-hero.tsx
      learning-highlights.tsx
      why-learn-ecg.tsx
      course-experience.tsx
      instructor-preview.tsx
    about/
      about-hero.tsx
      instructor-story.tsx
      teaching-approach.tsx
      recognition.tsx
    courses/
      course-hero.tsx
      course-overview.tsx
      learning-outcomes.tsx
      audience-list.tsx
      included-planned.tsx
      sample-lesson.tsx
    contact/
      contact-methods.tsx
      enquiry-form.tsx
      faq-accordion.tsx
    ui/
      button.tsx
      container.tsx
      section-heading.tsx
      icon.tsx                # Or use one existing consistent icon package
  content/
    site-content.ts           # Typed approved copy for all pages
    site-config.ts            # URLs, launch status, asset availability
  lib/
    contact-schema.ts         # Form validation
    email.ts                  # Server-only email delivery adapter
    utils.ts
  types/
    site.ts
public/
  images/
    README.md                 # Required assets and placement guidance
  icons/
```

Do not build unused components just to mirror this tree. The agent may adjust component groupings after inspecting the actual page compositions.

## 4. Design-system implementation

Create a small maintainable token set for:

- brand colours and semantic aliases;
- page/container widths;
- spacing rhythm;
- typography sizes and line heights;
- border radii and subtle borders;
- elevation/shadow levels, used sparingly;
- breakpoints and responsive section rules;
- animation durations/easing and reduced-motion overrides.

A proposed starting palette appears in the design brief. Confirm against the real logo/brand assets before finalising.

Tailwind should handle ordinary spacing, grid, flex, typography, responsive rules, borders and simple states. Use CSS Modules for unusually detailed SVG drawing, art-directed compositions or style rules that become difficult to reason about in utility classes. Avoid duplicating the whole design system across Tailwind classes, global CSS and SCSS.

Use `next/font` or a carefully chosen optimised font strategy where supported. Do not add many font families/weights or load fonts from a random third-party URL.

## 5. Page construction and content

### Home

- Real instructor-first hero composition; use a non-fabricated placeholder if photo missing.
- Exact H1 and supporting text from the content brief.
- Main CTA to Learnyst only if configured.
- Optional introduction-video CTA only if its exact approved URL exists.
- Four highlight themes.
- Learning-benefit content.
- Book/video course-experience content.
- Instructor preview with `/about` link.
- No waitlist section or waitlist copy.

The composition may combine content where it improves reading flow. Do not remove meaningful supplied content only to create a shorter page; place page-specific details on the appropriate route.

### About

- Personal first-person story from approved copy.
- Clinical experience and teaching narrative.
- Teaching-approach items.
- Recognition only using confirmed/source-provided information; never invent awarding body/year.
- No waitlist CTA.

### Courses

- Explain the single flagship course.
- Preserve “Included” versus “Planned” status.
- Keep price/fee information absent.
- Use a real sample-lesson link only when supplied.
- Course CTA to Learnyst only when the destination exists and its availability state is truthful.
- Do not show the pending coronary-territories outcome as confirmed until approved.
- Do not advertise a certificate as available until the source conflict and conditions are resolved.

### Contact

- Verified social links, pending verification called out in launch checklist.
- WhatsApp icon/button only after a valid business number is supplied; no visible digits.
- Enquiry form with Name, Email, optional Phone and Message fields.
- FAQ accordion using approved questions/answers only. Keep certificate FAQ hidden/pending until resolved.
- No waitlist form or waitlist consent.

## 6. Learnyst integration configuration

Use one central configuration item for the course destination, e.g. `NEXT_PUBLIC_LEARNYST_COURSE_URL`.

Implementation requirements:

- Validate that configured URLs are absolute HTTPS URLs in production.
- No guessed subdomain, guessed course slug, fake route or `href="#"`.
- If unset, do not render an active course link. A neutral, non-interactive “Course access details coming soon” state is permitted only where the CTA would otherwise be misleading; leave a clear development TODO and record it as a launch blocker.
- Use accurate CTA labels based on the configured destination.
- External new-tab links require `rel="noopener noreferrer"`.
- Do not create a local LMS route that pretends to be Learnyst.

Suggested environment/config values (only add what the implementation actually uses):

```dotenv
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_LEARNYST_COURSE_URL=
NEXT_PUBLIC_INTRO_VIDEO_URL=
NEXT_PUBLIC_SAMPLE_LESSON_URL=
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/easy_medlearning
NEXT_PUBLIC_YOUTUBE_URL=https://youtube.com/@easymedlearnings
NEXT_PUBLIC_WHATSAPP_URL=
CONTACT_TO_EMAIL=
CONTACT_EMAIL_PROVIDER_API_KEY=
```

Do not commit secrets. A WhatsApp URL/number is publicly discoverable if rendered as a link; use only the founder-approved business number. `CONTACT_TO_EMAIL` and the provider key are server-only and must never be exposed in client bundles.

## 7. Contact form architecture and privacy

The source requires enquiry form submissions to reach the founder's inbox server-side.

- Validate fields on the server even if browser validation is present.
- Use a known server-side email provider or approved form service. The provider and credentials are not specified yet.
- Put recipient and API credentials in server-only environment variables.
- Add a honeypot and sensible server-side rate limiting or an approved CAPTCHA if needed; don't collect excess personal data.
- Return a clear, truthful success state only after the provider confirms acceptance.
- If configuration is missing, show a controlled error/development warning. Do not fake the success message.
- Avoid logging message bodies, emails or phone numbers unnecessarily.
- Ensure labels, field instructions, validation errors and success/error summaries are screen-reader friendly.
- Privacy Policy and Terms & Conditions must be reviewed/approved before launch. Do not invent a final policy based on generic boilerplate.

No waitlist endpoint, subscriber storage, newsletter provider or waitlist analytics should be built.

## 8. Motion implementation

Use GSAP + ScrollTrigger selectively. A simple CSS transition or IntersectionObserver-based reveal is acceptable for a basic case; do not import GSAP merely to animate one button.

Recommended approach:

- a small client-only motion wrapper for the sections that need it;
- register ScrollTrigger correctly;
- scope animations with the supported GSAP React lifecycle integration or equivalent cleanup;
- kill/revert animations and listeners on component unmount;
- avoid selectors that cause one component to animate unrelated elements;
- disable/simplify motion for reduced-motion users and low-capability/mobile contexts when appropriate;
- ensure initial markup is visible/readable and does not flash invisible if JS fails;
- avoid large pinned sequences and repeated full-page timelines.

Keep normal scrolling. Use no Three.js, WebGL, shader-based backgrounds, continuous animation or animation-driven content visibility.

## 9. Assets and media delivery

Until approved real assets arrive:

- use intentional CSS/SVG placeholders, not fake doctor photographs or generated fake book covers;
- make placeholders look designed rather than like broken-image icons;
- retain realistic aspect ratios and suitable `object-position` controls for final crops;
- keep media sources centralised in config/content;
- use local files where provided and optimise them for the web;
- lazy-load below-the-fold images/video;
- don't lazy-load the primary LCP hero image if doing so would delay it;
- set image width/height or an aspect ratio to prevent layout shifts;
- use a poster/thumbnail and click-to-load for video; never force autoplay audio/video;
- include descriptive alt text for meaningful content images and empty alt/decorative treatment for decorative graphics.

Suggested photographer/video deliverables, from the original content brief:

1. High-resolution professional portrait (hero crop, horizontal + vertical variants).
2. Friendly seated portrait.
3. Teaching/seminar photo with an ECG presentation.
4. Introduction video, 45–90 seconds; landscape master and optional vertical cut; clean audio and captions/transcript.
5. Actual book cover, cover detail, open spread and approved original illustration.
6. Approved original ECG illustrations/sample pages with permission to publish.
7. Exact sample-lesson URL and embedding permission.
8. Logo as SVG or transparent PNG.

Never present a placeholder as an actual photo, lesson or published book asset.

## 10. SEO and metadata

- Set `<html lang="en-IN">`.
- Use Next.js metadata for the four pages: page-specific title, meta description, canonical/metadataBase once the production domain is known, and Open Graph/social metadata.
- Exactly one H1 per page; meaningful nested headings.
- Generate `sitemap.xml` and `robots.txt` with correct production domain.
- Add Organization + WebSite structured data where relevant; Person on About; Course on Courses only when verified fields support it; FAQPage only if FAQ copy is visible and accurate.
- No fake aggregate ratings/reviews, course pricing, availability claims, or fabricated award fields in structured data.
- Keep link text descriptive and internal links consistent.
- Use image alt text based on the actual image and supplied description, not keyword stuffing.
- Validate final rendered metadata and JSON-LD; source code alone is not enough if the framework does not emit them as expected.

## 11. Performance and robustness

Target the “good” Core Web Vitals thresholds at the 75th percentile when real field data becomes available:

- LCP ≤ 2.5 seconds
- INP ≤ 200 milliseconds
- CLS ≤ 0.1

These targets are goals, not a claim that they have already been achieved.

Engineering choices:

- Keep pages primarily server-rendered/prerendered with minimal client JavaScript.
- Avoid a UI library if simple components suffice.
- Avoid multiple animation and smooth-scroll libraries.
- Use responsive image sizes and efficient media formats.
- Lazy-load below-the-fold images and video; prioritise the hero visual appropriately.
- Avoid global event handlers without cleanup.
- Don't add Web Workers, WebAssembly, service workers, offline sync, PWA manifests, a database, Redis, analytics or tag managers unless the user approves a specific use case.
- Do not preload assets indiscriminately; preload only assets shown to materially improve the initial view.

## 12. Testing and review checklist

### Functional

- [ ] `/`, `/about`, `/courses`, `/contact` all load.
- [ ] Header and footer navigation point to correct routes.
- [ ] Course CTA uses the actual configured Learnyst URL or a non-link pending state; no guessed URL.
- [ ] No waitlist copy, fields, routes, storage, consent or CTA remains.
- [ ] No `href="#"`, buttons with no action, or fake media links.
- [ ] Mobile navigation opens/closes with keyboard and touch.
- [ ] FAQ accordion is usable by keyboard and announces expanded state.
- [ ] Enquiry form validates server-side and does not fake success.
- [ ] No phone/email address is visible as site-owned contact text.
- [ ] Social/WhatsApp links work only with approved details.

### Responsive and visual

- [ ] Review at narrow mobile (~320–375 CSS px), standard mobile, tablet, laptop and large desktop widths.
- [ ] No horizontal overflow, clipped headlines, overlapping sticky header or form overflow.
- [ ] Hero's portrait/illustration and headline have correct priority at each size.
- [ ] Section heights vary naturally with content; not every section is full-screen or boxed.
- [ ] Motion is restrained, does not block reading and has reduced-motion fallback.
- [ ] Missing-asset placeholders are intentional and clearly tracked for replacement.

### Accessibility and content

- [ ] Keyboard navigation and visible focus work.
- [ ] Colour contrast and headings are checked.
- [ ] Images have appropriate alt text; decorative SVGs are not announced.
- [ ] Reduced-motion preference is respected.
- [ ] British English and “Hinglish” terminology are consistent.
- [ ] No prices, waitlist language, invented claims or unresolved placeholders presented as final.
- [ ] Certificate, awarding body/year, CTA URL and legal copy are flagged if still pending.

### Build and delivery

- [ ] Run available lint/typecheck/build scripts and record actual outcomes.
- [ ] Inspect browser console and fix application errors.
- [ ] Check external links and form behaviour.
- [ ] Verify metadata, sitemap and robots output.
- [ ] Report preview/runtime limitations honestly.
- [ ] Provide run/build/deploy commands appropriate to the actual repository.
- [ ] Provide a launch-blocker list.

## 13. Implementation phases

1. **Inspect & plan:** inspect repo, environment, assets, and Next.js preview capability. List the planned file structure and confirm no conflicting existing implementation will be destroyed.
2. **Foundation:** initialise/adjust the Next.js App Router structure, TypeScript, Tailwind, global tokens, base typography and layout.
3. **Reusable shell:** build header, responsive navigation, footer, accessible button/link patterns, content container and metadata.
4. **Home page:** implement the instructor-led hero and the content-led ECG/course/instructor flow with intentional placeholders.
5. **About and Courses:** implement the personal instructor story and careful Included/Planned course detail.
6. **Contact:** implement the social/contact layout, FAQ and server-side form path. Keep secrets/configuration separate.
7. **Motion pass:** add only the justified GSAP/SVG interactions, reduced-motion behaviour and cleanup.
8. **SEO/performance pass:** metadata, structured data where valid, sitemap, robots, responsive image/media handling.
9. **QA pass:** responsive inspection, keyboard checks, content audit, lint/typecheck/build and console review.
10. **Handoff:** describe the architecture, files, run instructions, verified checks, asset needs, missing environment variables and launch blockers.

## 14. Completion definition

The job is not complete just because the homepage renders. It is complete when the four public pages share a coherent visual system, the layout is responsive and modular, content is grounded in the source, Learnyst integration is configurable without guessing, the enquiry form is honest and secure, animations are restrained/accessibility-aware, and actual build/test results plus unresolved launch blockers are documented.
