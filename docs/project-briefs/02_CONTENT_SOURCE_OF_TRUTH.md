# EasyMedLearning — Content Source of Truth

**Document role:** Content agent / page-copy reference  
**Source:** `EasyMedLearning_Website_Content.pdf` (11 pages, supplied by the user), plus explicit newer instructions in the conversation  
**Last updated:** 18 October 2026

This file preserves the source content and flags unresolved conflicts. It is not permission to invent facts. The most recent user instruction overrides the PDF only where explicitly stated, most notably removing the waitlist and routing course CTAs to Learnyst.

---

## 1. Hard content rules

- Brand spelling: **EasyMedLearning** (camel case).
- Tone: warm, clear and professional; address medical learners directly as “you”.
- The About page should feel personal and use first-person storytelling where the supplied copy does so.
- British spelling: **enrol**, **realised**, **practising**.
- Use **Hinglish** rather than “Hindi” when naming the course language.
- Do not show course prices or fees.
- Do not display an email address or phone number as visible public text anywhere. A phone field in an enquiry form is allowed because it is a visitor-provided field. A WhatsApp URL may contain the confirmed business number in its URL, as noted in the source, but it must not display the digits on the page.
- Do not fabricate testimonials, student numbers, ratings, credentials, awards, accreditation, outcomes, guarantees, images, sample lesson URLs or course features.
- Separate what is available from what is planned.
- Do not describe the course as fully recorded or live based on the current source; its current state is “partially recorded” and the launch date is “tentative”.
- **Remove all waitlist functionality and all waitlist copy.** This is a newer direct instruction and overrides the original PDF's waitlist sections.
- Use Learnyst as the destination for the course CTA when a real URL is configured. The URL has not yet been supplied, so do not guess one.

## 2. Site map and shared elements

| Page | URL | Navigation label |
|---|---|---|
| Home | `/` | Home |
| About | `/about` | About |
| Courses | `/courses` | Courses |
| Contact | `/contact` | Contact |

Shared header: logo/wordmark `EasyMedLearning` + nav links + course-access CTA. Do not show “Join Waitlist”. The CTA points to the configured Learnyst destination only when it exists.

Footer tagline:

> Making ECG learning simple and practical for medical professionals.

Footer quick links: Home · About · Courses · Contact

Footer social links: Instagram · YouTube · WhatsApp (icons only, external links open safely in a new tab where appropriate).

Footer legal line: `© [current year] EasyMedLearning. All rights reserved. · Privacy Policy · Terms & Conditions`

Generate the year dynamically. Privacy Policy and Terms & Conditions text is not supplied. Do not fabricate final legal copy; record it as a launch dependency and do not publish empty or fake legal pages.

## 3. Verified facts

| Item | Supplied value |
|---|---|
| Instructor | Dr. Wasim Adil Khan (BUMS, PGDEMS) |
| BUMS | Bachelor of Unani Medicine and Surgery |
| PGDEMS | Post Graduate Diploma in Emergency Medical Services |
| Role | Managing Director, National Hospital, Pune (two branches) |
| Clinical experience | 15 years, including 1 year in the ICU |
| Management experience | 13 years as Managing Director, concurrently with clinical work |
| ECG teaching | 5 years of ECG seminars and guest lectures across India, including Kashmir |
| Course | *Absolute Guide to ECG Interpretation* (book + video lectures) |
| Current course language | Hinglish (a mix of Hindi and English); English version will follow |
| Book format | Printed copy delivered to the learner's address; no PDF version |
| Price/fees | Must not be shown |
| Launch | Tentative: 15 November 2026 |
| Course status | Partially recorded |
| Certificate | Source wording conflicts; conditions are not supplied. See unresolved decisions below. |
| Eligibility | Learners from the medical field, including paramedics, physiotherapists and pharmacists; course page also names medical students, nursing students, working professionals and exam candidates |
| Instagram | https://www.instagram.com/easy_medlearning — verify handle spelling with founder |
| YouTube | https://youtube.com/@easymedlearnings — verify handle spelling with founder |
| WhatsApp | Final business number and typical reply time not supplied |

### Additional profile supplied directly by the user

The user also supplied this professional profile as context:

> Senior Clinician & Healthcare Executive with 15+ years of comprehensive clinical practice, combining bedside excellence with over a decade of institutional governance. Across a 15-year career span, served 13 years as Managing Director steering clinical administration and operational growth alongside active patient care, supported by specialized foundation work including 1 year in critical care/ICU. An established medical educator with 5 years of conducting nationwide ECG masterclasses and guest seminars, training clinicians across premier regional hubs including Jammu & Kashmir.

This can inform story structure, but use the supplied page copy below where it already exists. Do not inflate the profile or add extra specifics. The About page should retain its personal first-person tone rather than becoming a corporate CV.

---

## 4. Home page (`/`)

### Metadata

**Title:** `Learn ECG Interpretation Online | EasyMedLearning`

**Description:** `Learn ECG interpretation with video lectures, case studies and a book by Dr. Wasim Adil Khan. Hinglish course, launching 15 November (tentative). Join the waitlist.`

**Required adaptation:** the supplied meta description contains waitlist wording, now removed. Use this replacement to preserve its meaning without a waitlist CTA:

`Learn ECG interpretation with video lectures, case studies and a book by Dr. Wasim Adil Khan. Hinglish course with a tentative launch date of 15 November 2026.`

Review the date before deployment; it is tentative and must be updated by the owner if circumstances change.

### Hero

**Eyebrow:** `ECG Education for Medical Professionals`

**H1:** `Learn ECG Interpretation with Clarity, Confidence and Real-World Practice`

**Supporting text:** `Learn from Dr. Wasim Adil Khan through structured video lectures, original illustrations, case-based teaching and his book.`

**Primary CTA:** Replace the old `Join the Early-Access Waitlist` with a truthful course CTA to the configured Learnyst URL. Suggested default: `View the ECG Course`. Do not ship a fake destination.

**Secondary CTA:** `Watch Introduction` — only show as active when the approved introduction video URL is configured. If unavailable, omit the button rather than linking to `#`.

**Small line:** `Expected launch: 15 November 2026 (tentative)`

**Hero image direction:** instructor portrait. Alt text: `Dr. Wasim Adil Khan, ECG educator and clinician` (use only when the actual approved portrait is supplied).

### Highlights strip

1. Medical-Focused Learning
2. Book + Video Course
3. Hinglish Explanations (English Coming Soon)
4. Practical Cases and Scenarios

### Why Learn ECG with EasyMedLearning?

**Intro:** `ECG interpretation can be challenging. We make it simpler with structured lessons, practical examples and clear explanations.`

- **Concepts Made Simple:** Original illustrations and clear explanations.
- **Practical Approach:** Case studies and real-world scenarios for deeper understanding.
- **Structured Learning:** Step-by-step modules, from basics to advanced topics.
- **Learn in Hinglish:** Lessons explained in simple Hinglish, with an English version coming soon.

### A Complete ECG Learning Experience

**Intro:** `Video lectures and a companion book for a stronger understanding of ECG interpretation.`

- Video lectures covering key concepts
- A companion book for structured learning
- Practical examples and case discussions

**Book image direction:** *Absolute Guide to ECG Interpretation* book cover. Do not fabricate the actual cover. Use a designed placeholder until the real approved cover arrives.

**Home-only restriction:** do not mention doubt sessions or practice exercises on the Home page. They appear only on the Courses page.

### Meet Your Instructor

**Intro:** `Learn from Dr. Wasim Adil Khan (BUMS, PGDEMS), an experienced clinician, hospital administrator and ECG educator.`

- 15 years of clinical experience, including 1 year in the ICU
- 13 years as Managing Director of National Hospital, Pune
- 5 years of ECG seminars and guest lectures across India

**CTA:** `Learn More About Dr. Wasim` → `/about`

**Image direction:** seated, friendly photo. Alt text: `Dr. Wasim Adil Khan seated in a clinic` (only use once the actual approved photo exists).

### Removed Home section

The PDF's “Be Part of the Early Learning Community” waitlist band, its email form and its consent copy must be removed completely. Do not replace it with another email subscription form. The bottom-of-page CTA, if needed, should lead to Learnyst.

---

## 5. About page (`/about`)

### Metadata

**Title:** `About Dr. Wasim Adil Khan | ECG Educator, Pune`

**Description:** `Meet Dr. Wasim Adil Khan, clinician and ECG educator, and learn why he created EasyMedLearning to make ECG interpretation simple and practical.`

### Hero

**Breadcrumb:** `Home > About`

**H1:** `About Dr. Wasim Adil Khan`

**Text:** `Clinician. Educator. Hospital administrator. Passionate about making ECG interpretation simple and practical for every medical learner.`

### My Journey

> I am Dr. Wasim Adil Khan, with a Bachelor of Unani Medicine and Surgery (BUMS) and a Post Graduate Diploma in Emergency Medical Services (PGDEMS). I am Managing Director of National Hospital, Pune, which has two branches. I have 15 years of clinical experience, including one year in the ICU, and for 13 of those years I have also served as Managing Director. For the past five years, I have conducted seminars and guest lectures on ECG interpretation across India, including Kashmir.

**Image direction:** instructor teaching at a seminar. Alt text: `Dr. Wasim Adil Khan teaching ECG interpretation at a seminar`.

### Why I Teach ECG

> While studying and practising medicine, I realised how much I enjoyed ECG interpretation. When I explained ECG topics to my friends, they understood them more easily. That encouraged me to start teaching ECG to others.

**Image direction:** Dr. Wasim explaining an ECG on a presentation screen. Alt text: `Dr. Wasim Adil Khan explaining an ECG on a presentation screen`.

### The Problem I Want to Solve

> Many students, professionals and educators find ECG interpretation difficult. As a student, I struggled to interpret ECGs too. I searched for structured study material and practical courses, but most available resources were theory-heavy reference books. These are hard to learn from, for students and professionals alike, and this is a common challenge across the medical field.

### My Teaching Approach

- Original illustrations for better understanding
- Practical scenarios and case studies
- Step-by-step explanations
- A focus on real-time decision-making

### Recognition and Contributions

- Author and editor of *Absolute Guide to ECG Interpretation* (with original illustrations)
- Recognised as a Corona Warrior, along with the hospital team. Awarded by: — · Year: —

Do not guess the award body or year. The owner must supply both. The `—` placeholders are the source-document instruction while pending; the design agent may propose a tactful display treatment but may not invent values.

### About-page CTA

The PDF's CTA `Join My Learning Community` and waitlist button are removed. A modest course CTA to the configured Learnyst destination can be used instead, without inventing social/community membership functionality.

---

## 6. Courses page (`/courses`)

### Metadata

**Title:** `ECG Interpretation Course in Hinglish | EasyMedLearning`

**Description replacement:** `Absolute Guide to ECG Interpretation: video lectures, case studies and a printed companion book. Tentative launch date: 15 November 2026.`

The source metadata's original `Join the waitlist` is removed.

### Hero

**Breadcrumb:** `Home > Courses`

**H1:** `Absolute Guide to ECG Interpretation`

**Text:** `A complete learning experience with video lectures, practical examples and a companion book.`

**Tags:** `ECG · Cardiology · Book + Video · Hinglish & English`

Only display language tags that do not imply an English course is already available. A safe rendering is `ECG · Book + Video · Hinglish (English version coming soon)`.

**Image direction:** real book cover. Alt text: `Absolute Guide to ECG Interpretation book by Dr. Wasim Adil Khan`.

### Course Overview

> This course is designed for medical students, beginners, working professionals, nursing students, paramedics, physiotherapists, pharmacists and exam candidates who want to understand ECG interpretation in a simple, practical way. It is based on the book Absolute Guide to ECG Interpretation and combines structured video lectures, case studies and practice exercises.

**Status card:** `Course Status: Partially recorded. Tentative launch: 15 November 2026.`

Do not reinterpret this status as a guarantee of availability by that date.

### What You Will Learn

- Interpret ECGs with greater confidence
- Understand how coronary artery territories relate to ECG leads **[pending founder confirmation]**
- Learn through practical cases and scenarios
- Develop a structured approach to ECG interpretation

Do not add more learning outcomes unless supplied and approved. Keep the second point marked internally as pending and do not publish the exact claim until confirmed. It may be omitted until confirmation.

### Who Is This Course For?

- Medical students (beginners)
- Working professionals
- Nursing students
- Paramedics, physiotherapists and pharmacists
- Exam candidates
- Other medical learners

**Eligibility statement:** `Eligibility: Learners should be from the medical field.`

### What We Offer in the ECG Course

The visual design must separate **Included** and **Planned** clearly.

**Included at launch according to source summary:**

- Video Lectures
- Companion Book (printed)
- Practical Examples
- Case Studies
- Hinglish Explanations

The key facts also say a printed copy is delivered to the learner's address and no PDF version is available. Do not offer a PDF download or list a price.

**Planned according to source summary:**

- Live Classes
- Doubt-Clearing Sessions
- Assignments
- Practice Exercises
- Test Series
- Certificate from EasyMedLearning (conditions pending; see conflict below)
- Community Access
- English version

Do not make planned items appear currently included. The certificate is specifically unresolved in the source; display it only as planned until the founder reconciles the wording and supplies conditions.

### Sample Lesson

**Text:** `Watch a sample lesson to see the teaching style and course format.`

**CTA from PDF:** `Watch Sample Lesson`

Only render an active link/embed if the exact approved sample-lesson URL and embedding permission are supplied. Otherwise hide the CTA or render a deliberately non-interactive development placeholder. Never use a fake video or `href="#"`.

### Removed Course section

Remove the old “Join the Early-Access Waitlist” banner, its Name/Email/Phone fields, and waitlist consent entirely.

The page should instead provide an appropriate Learnyst course CTA when the real URL is configured. Do not assume the Learnyst course is live.

---

## 7. Contact page (`/contact`)

### Metadata

**Title:** `Contact EasyMedLearning | ECG Course Enquiries`

**Description:** `Questions about the ECG course, book or launch? Send an enquiry or follow EasyMedLearning on Instagram and YouTube.`

### Hero

**Breadcrumb:** `Home > Contact`

**H1:** `Get in Touch`

**Text:** `Have a question about the course, book or upcoming launch? We'd be happy to hear from you.`

### Contact methods

**Instagram**

`@easy_medlearning. Follow for updates and short educational content.`

URL: `https://www.instagram.com/easy_medlearning`

**YouTube**

`@easymedlearnings. Watch introductory and sample videos.`

URL: `https://youtube.com/@easymedlearnings`

**WhatsApp**

Visible copy: `Chat on WhatsApp.`

Source copy says: `Send us a message and we usually reply within [reply time].` Reply time is pending; do not publish the bracketed placeholder as if final.

WhatsApp URL format from source: `https://wa.me/91XXXXXXXXXX?text=Hello%20EasyMedLearning%2C%20I%20have%20a%20question%20about%20the%20ECG%20course.`

Use only the final, founder-supplied 10-digit business number. It must not appear as visible page text. Use `target="_blank"`, `rel="noopener noreferrer"` and `aria-label="Chat with EasyMedLearning on WhatsApp"`. The source notes that the number is still discoverable in the page source and recommends a dedicated business number. Do not guess digits.

The exact handles must be checked with the founder before launch because the PDF marks them pending verification.

### Send Us a Message — keep this enquiry form

**Intro:** `Fill in the form and we'll get back to you.`

Fields:

- Your Name (required)
- Your Email (required)
- Phone Number (optional)
- Your Message (required)
- Send Message

**Success message:** `Thank you. Your message has been sent and we'll get back to you soon.`

Only show this success state after the server confirms successful delivery/acceptance. Do not fake successful delivery in a frontend-only form.

The form submission must be delivered to the founder's inbox on the server side. Use environment configuration or an approved form provider; do not expose provider secrets or the recipient email as visible public text.

### Removed Contact section

Remove the Join the Waitlist form, its Name/Email/Phone fields and consent checkbox completely. Do not replace it with an email marketing subscription form.

### FAQ accordion

Intro: `Find quick answers to common questions.`

1. **When will the course launch?**  
   `The tentative launch date is 15 November 2026. Check the course page or Learnyst destination for current course availability.`  
   Keep the date explicitly tentative, and update it only after founder confirmation.

2. **Who can enrol in the course?**  
   `Learners from the medical field, including medical students, nursing students, paramedics, physiotherapists, pharmacists and working professionals.`

3. **Will the course be in Hinglish, English or both?**  
   `The course is currently available in Hinglish (a mix of Hindi and English). An English version will follow.`  
   If “currently available” conflicts with the partially recorded/not-yet-launched status at publication time, adjust only after the founder confirms the actual availability. Do not imply access before it is offered.

4. **Will I receive a certificate?**  
   The PDF says `Yes. A certificate will be issued by EasyMedLearning. Conditions: —` but its launch-summary table also categorises the certificate as planned. **Do not publish a definitive answer until the founder resolves this conflict and provides conditions.** Keep this FAQ hidden or explicitly marked pending in development until resolved; do not make up conditions.

5. **How will I receive the book?**  
   `A printed copy will be delivered to the address you provide. A PDF version is not available.`

6. **How can I stay updated?**  
   Updated to remove waitlist references: `Follow EasyMedLearning on Instagram and YouTube for course updates.`

---

## 8. SEO and technical content requirements

- One H1 per page; H2s should follow the actual section hierarchy.
- Apply the page titles and descriptions above, including the specified waitlist-free replacements.
- Target keywords naturally: `ECG interpretation course`, `learn ECG online`, `ECG course for medical students`, `ECG in Hinglish`.
- Set the HTML language to `en-IN`.
- JSON-LD: Organization + WebSite where appropriate; Person on About; Course on Courses only when current details support it; FAQPage only when the FAQ is accurate and visible. Do not add unsupported fields or publish structured data that contradicts visible content.
- Descriptive alt text for real images. Decorative SVGs should not be announced to screen readers.
- Include internal links among Home, About, Courses and Contact.
- Compress/optimise images, lazy-load below-the-fold media, ensure visible focus states and sufficient contrast, add `sitemap.xml` and `robots.txt`.
- Forms: validate email format, protect against spam with an appropriate server-side strategy/honeypot or CAPTCHA, and store only data genuinely needed. If consent is required for a specific processing purpose, obtain approved copy; do not retain the waitlist consent form after removing the waitlist.

## 9. Pending details / launch blockers

1. Exact branded Learnyst course URL and whether it points to a public information page, enrolment page or active course.
2. Final WhatsApp number (10 digits in the Indian number format after country code handling) and typical reply time.
3. Corona Warrior awarding body and year.
4. Certificate availability and certificate conditions — resolve the source conflict.
5. Confirmation for the coronary artery territories learning-outcome wording.
6. Verify both social handles/URLs.
7. Approved Privacy Policy and Terms & Conditions text; owner/legal review required.
8. Approved instructor portrait, seated portrait and teaching photos.
9. Approved introduction video URL/file.
10. Actual book cover, sample pages and permission-cleared original ECG illustrations.
11. Sample lesson URL and permission to embed/link.
12. Logo in SVG or transparent PNG format.
13. Confirm actual course availability/language when deploying; the source states partially recorded and a tentative date.

The agent must not block layout engineering because assets are absent. Use clearly tracked, intentional placeholders and keep a launch checklist. Do not ship placeholders as genuine assets or make a pending value look final.
