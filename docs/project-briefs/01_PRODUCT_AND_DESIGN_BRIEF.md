# EasyMedLearning — Product & Design Brief for the AI Studio Agent

**Document role:** Product owner brief + creative direction  
**Use:** Feed this to the design/build agent first. Then provide `02_CONTENT_SOURCE_OF_TRUTH.md` and `03_TECHNICAL_ARCHITECTURE_AND_BUILD_PLAN.md`.  
**Project:** EasyMedLearning public marketing website  
**Last updated:** 18 October 2026

---

## 1. Your role and mandate

Act as a senior digital art director, UX designer, brand designer, accessibility-minded motion designer, and principal frontend engineer. Your job is to plan and build a distinctive, production-minded public marketing website for EasyMedLearning.

You have creative freedom to improve the layout, visual hierarchy, section order, interaction details, responsive composition, component boundaries, and overall presentation. You may combine repetitive sections or omit unnecessary decorative components. Do not treat the supplied content document as a rigid template for boxes or cards.

**Do not ask the user to make every minor design decision.** Make reasoned choices, document important assumptions, implement the strongest coherent direction, and report unresolved external dependencies at the end. Briefly state the implementation plan first, then continue building rather than stopping after a plan.

### Source-of-truth order

1. The latest direct user instructions in the conversation override older instructions.
2. `02_CONTENT_SOURCE_OF_TRUTH.md` governs approved copy and factual claims from the supplied 11-page EasyMedLearning Website Content PDF, with explicit newer overrides recorded in that file.
3. `03_TECHNICAL_ARCHITECTURE_AND_BUILD_PLAN.md` governs architecture, engineering constraints, and acceptance criteria.
4. Research and your design judgement may improve the presentation, but must never invent business facts or change the meaning of the content.

**Latest mandatory business override:** remove the waitlist completely. The old PDF includes waitlist sections and buttons, but those are no longer wanted. The public site's primary course action should lead to Learnyst when the exact destination URL is supplied/configured. Do not build a waitlist, waitlist database, waitlist form, waitlist consent checkbox, or waitlist CTA anywhere.

## 2. Product purpose

Build a high-quality marketing website that introduces EasyMedLearning, establishes trust in Dr. Wasim Adil Khan, explains the flagship course *Absolute Guide to ECG Interpretation*, and directs interested visitors to the separate Learnyst learning platform.

This website is **not** the LMS. Do not build student accounts, checkout, lesson playback, course progress, assignments, a student dashboard, a course database, or an LMS replica. Those belong to Learnyst or a future separately approved project.

### Launch scope

The four public pages are:

- `/` — Home
- `/about` — About Dr. Wasim Adil Khan
- `/courses` — Flagship ECG course
- `/contact` — Contact methods, enquiry form and FAQ

The footer's Privacy Policy and Terms & Conditions links are required by the source content, but the actual legal copy has not been supplied. Do not invent final legal text. Create a clear launch dependency and follow the legal-page handling in the content/engineering documents.

## 3. Design concept: Premium Clinical Editorial

The site should look considered, modern, medically credible, warm, editorial, and crafted. It should not look like:

- a generic coaching institute template;
- a hospital administration portal or medical dashboard;
- a repetitive collection of rounded cards;
- a SaaS template full of badges, stats, feature grids and floating UI;
- an Awwwards portfolio experiment whose animation competes with the actual course;
- a rigid sequence of full-viewport panels regardless of content length.

### Visual rhythm

Use a **variable composition based on the message and assets**. Some sections may be wide and immersive; some may be compact editorial text; others may use an asymmetric image/text layout or a large diagram. Let content determine section height. Do not force every section to be full-screen or put every content group into a card.

Potential compositions include:

- a split hero with real instructor portrait, oversized but readable headline and course CTA;
- a restrained ECG trace or original approved illustration used as a brand motif;
- an editorial book-and-video course composition when the real book cover/assets are available;
- a photo-led personal story on the About page;
- a useful “Included / Planned” distinction on the Courses page;
- a clean enquiry/contact layout on the Contact page.

The first screen must communicate, without excessive scrolling:
1. this is ECG education for medical learners;
2. Dr. Wasim Adil Khan is the educator;
3. the flagship course is *Absolute Guide to ECG Interpretation*;
4. where the visitor can access the course (Learnyst destination, if configured).

### Proposed palette — starting point, not final brand truth

- Warm ivory: `#F6F4EE`
- Deep medical navy: `#17354B`
- Muted teal: `#367D78`
- ECG coral: `#D96B60` (accent only)
- Supporting neutrals: accessible grey/blue-grey tones

Inspect the actual supplied logo before finalising. If the logo or real assets indicate a stronger brand palette, adapt the palette thoughtfully. Do not copy another site's exact visual identity.

Use a highly legible sans-serif for body copy and controls. A restrained editorial display typeface may be used for selected headlines. Limit font families and weights; ensure the type supports Indian English content and renders cleanly on low-end mobile devices. Keep contrast accessible.

## 4. Reference research: study the principles, do not copy the page

Use these references as inputs to your own design decisions:

1. **Moxie Care & Birth** — https://www.moxiecare.com/  
   Awwwards entry: https://www.awwwards.com/sites/moxie  
   Study the warm, human healthcare-brand presentation, natural photography, spacious composition and restrained interactions. Do not reproduce its exact colours, copy or maternity-care identity.

2. **Osmosis** — https://www.osmosis.org/  
   Study how medical education is explained clearly and supported by illustration. Do not copy its product UI or make unsupported claims about EasyMedLearning.

3. **MasterClass** — https://www.masterclass.com/  
   Study instructor-led course storytelling and the way a named teacher and course form a coherent offer. Do not imitate heavy cinematic media or its business model.

4. **Brilliant** — https://brilliant.org/  
   Study the principle of simplifying difficult ideas through visual explanation. Do not turn this marketing site into an interactive learning product.

5. **Scroll-layout inspiration** — https://www.awwwards.com/inspiration/scroll-portfolio  
   Study pacing and composition as technique references, not as a reason to use aggressive scroll-jacking or unnecessary pinning.

If you browse additional references, cite their actual URLs in your final handoff and state precisely what is being borrowed as a design principle. Do not call a site award-winning unless you verify the specific award/recognition.

## 5. Motion direction: balanced scroll-triggered storytelling

Use CSS, SVG and GSAP + ScrollTrigger for a small number of deliberate moments. Motion should support the story and be quick enough not to delay reading or course access.

Good candidates:

- short, staggered hero heading/text reveal;
- a one-time SVG ECG path draw;
- restrained viewport-triggered fades/translations for selected images or section content;
- subtle image reveal or position shift for the book/instructor compositions;
- tasteful hover/focus transitions for links and buttons.

Rules:

- No Three.js, WebGL scene, shader effect or 3D heart.
- No perpetual heartbeat/ECG animation or looping decorative motion.
- No scroll-jacking; preserve native scrolling.
- Do not pin every section or force the visitor through a long cinematic sequence.
- Do not hide important content until animation code runs. The page must remain understandable with JavaScript unavailable or motion disabled.
- Prefer transforms and opacity for animation. Do not animate layout-heavy properties repeatedly.
- Honour `prefers-reduced-motion`; provide static states and sensible mobile behaviour.
- Use GSAP React integration/cleanup patterns correctly, scope selectors and clean up animations/ScrollTriggers on unmount.
- Avoid adding a smooth-scrolling dependency unless a demonstrated need justifies its performance/accessibility cost.

## 6. Assets: design must work before the photo/video shoot

The real instructor photographs, introduction video, book cover, sample lesson and approved original ECG illustrations are not yet available in the current project assets.

Do not generate or source a fake photo and present it as Dr. Wasim. Do not invent a book cover, real course screenshot, hospital scene, award badge, student testimonial or clinical illustration that could be mistaken for approved medical material.

If assets are missing:

- build intentional, branded placeholders using CSS/SVG/typographic composition;
- keep image containers with correct aspect ratios so real photos can replace the placeholders without layout shifts;
- add TODOs in the asset checklist and central content configuration;
- do not use random external image URLs or hotlink arbitrary imagery;
- only show “Watch Introduction” or “Watch Sample Lesson” as active links when the real URL is configured. Never use `href="#"`.

A small original SVG ECG motif is acceptable if drawn as an abstract decorative line and not presented as a diagnostic tracing or educational medical example.

## 7. Content discipline

Use `02_CONTENT_SOURCE_OF_TRUTH.md` as the exact content and fact checklist.

- Use British English: “enrol”, “realised”, “practising”.
- Use “Hinglish”, not “Hindi”, to describe the current course language.
- Keep the About page personal and first-person where the supplied copy requires that tone.
- No prices or fees on any page.
- Never show a public email address or phone number as visible text.
- Do not invent student counts, testimonials, ratings, accreditation, outcomes, guarantees, course completion rates, award details or launch certainty.
- Visually distinguish content available at launch from content merely planned.
- The course is currently described as partially recorded; the launch date is tentative. Do not call it fully available or fully recorded without updated approval.
- The source PDF's certificate wording conflicts: it says a certificate will be issued but also lists the certificate as planned and leaves conditions blank. Flag this. Until confirmed, the conservative treatment is “Planned — conditions to be confirmed” rather than promising a certificate.
- Remove the waitlist completely and replace course-intent CTAs with the configured Learnyst destination. Do not retain orphaned waitlist copy elsewhere.

## 8. Conversion and Learnyst handoff

This is a marketing website and the actual learning takes place on Learnyst.

- Centralise the LMS URL in configuration/environment, e.g. `NEXT_PUBLIC_LEARNYST_COURSE_URL`.
- Do not guess the URL or create a fake subdomain.
- If the value is empty, do not emit a dead link or `#` href. Show a deliberate non-link state such as “Course access details coming soon” only where needed, and add a visible development TODO/launch blocker.
- The main CTA label should accurately match the target's availability. Prefer “View the ECG Course” when it leads to a Learnyst course information/enrolment page; use “Access Course on Learnyst” only if that is truthful.
- If Learnyst opens a new tab, use `target="_blank"` with `rel="noopener noreferrer"` and communicate the external destination appropriately.
- Do not create a waitlist or waitlist storage, even as a temporary feature.

## 9. UX and accessibility bar

- Mobile-first; design and test at narrow widths, not merely shrink desktop.
- Keyboard-accessible navigation, forms, buttons, accordion and media controls.
- Visible focus states; semantic landmarks and correct heading order.
- Use exactly one H1 per page and descriptive image alt text.
- Ensure all links and buttons perform real actions; never ship placeholder click targets.
- Forms must report validation errors clearly and must not falsely report success.
- Do not rely on colour alone to distinguish “Included” from “Planned”.
- Support reduced motion and preserve readable content if animation fails.
- Avoid horizontal overflow, tiny type, small touch targets and sticky UI that obscures content.

## 10. Agent freedom versus non-negotiables

### You may decide independently

- section order and layout within the content boundaries;
- which sections should be combined to reduce repetition;
- exact spacing, type scale, grid ratios, breakpoints and image crops;
- palette refinements after checking the logo;
- whether an SVG illustration or restrained motion genuinely helps;
- how to structure reusable components;
- best accessible implementation details;
- which decorative elements to remove when they add no value.

### You may not change independently

- brand name spelling: `EasyMedLearning`;
- the four required routes;
- source-supported facts or the meaning of the supplied course copy;
- the no-waitlist decision;
- the no-public-email/no-public-phone, no-pricing constraints;
- the Learnyst boundary between marketing site and learning platform;
- the no-Three.js decision;
- launch date/certificate/award/URL facts marked pending;
- consent, security or accessibility requirements.

## 11. What to do now

1. Inspect the project environment and assets before choosing implementation details.
2. Briefly report the plan and any real platform limitation. Google AI Studio Build mode may scaffold React by default; do not silently substitute a React SPA for the requested Next.js App Router project. If the preview runtime cannot execute the selected Next.js project, state that constraint and preserve a valid exportable Next.js project rather than falsely claiming it is Next.js.
3. Implement the website in cohesive, testable stages using the other two briefs.
4. Run available checks, inspect the rendered UI at desktop and mobile sizes, fix obvious visual/console/build errors, and report what was actually verified.
5. Finish with a short list of launch blockers and external inputs still required. Do not claim a check passed unless it was run.
