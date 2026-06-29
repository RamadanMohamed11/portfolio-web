# Ramadan Mohamed Portfolio Website Plan

## 1. Portfolio Strategy
Position Ramadan as a serious Flutter/mobile developer with engineering depth, polished product thinking, and real app experience. The site should feel like a premium mobile app launch page plus technical portfolio, not a static resume.

Core positioning:
“Flutter Developer building scalable cross-platform mobile apps with clean architecture, Firebase/REST integrations, responsive UI, offline-first features, and polished user experiences.”

Primary audience:
Recruiters, hiring managers, startup founders, and technical leads.

Main proof points:
Flutter/Dart, Clean Architecture, BLoC/Cubit, Provider, Riverpod, Firebase, REST APIs, Hive, offline persistence, localization/RTL, notifications, Git/GitHub, Postman, and engineering foundations in C, C++, Arduino, Raspberry Pi, Python.

## 2. Visual Identity
Use a dark cinematic product interface:
- Base: deep navy/black background.
- Accents: cyan, electric blue, subtle violet, small gold highlights.
- Surfaces: glassmorphism cards with soft blur, thin borders, inner glow.
- Mood: futuristic, technical, premium, mobile-first.
- Typography: strong display heading, clean readable body text, compact skill chips.
- Visual language: floating phone mockups, app UI panels, code fragments, soft particles, timeline lines, glowing buttons.

Avoid making the site feel like a generic CV. Each section should look like a product system with hierarchy, motion, and confidence.

## 3. Sitemap / Sections
Single-page GitHub Pages portfolio:
- `#home`
- `#about`
- `#skills`
- `#projects`
- `#sohba-case-study`
- `#experience`
- `#certificates`
- `#education`
- `#contact`

Navigation:
Sticky glass navbar with Ramadan Mohamed logo/initials, section links, theme toggle, and mobile menu.

## 4. Detailed Section-by-Section Content Plan
Hero:
- Headline: “Building polished Flutter apps with clean architecture and real product thinking.”
- Supporting text: use the exact positioning statement.
- Animated role text: Flutter Developer, Mobile App Developer, Clean Architecture Enthusiast.
- CTAs: View Projects, Download CV, Contact Me.
- Visual: 2-3 floating phone mockups showing placeholder screenshots for Sohba, Al-Bedayah, and PayMinder.
- Background: lightweight canvas particles, glow layers, tiny code/app UI fragments.

About:
- Summary from CV: engineering background in Computer and Control Systems, cross-platform apps, clean architecture, Firebase/REST, responsive UI, performance, maintainability.
- “What I bring” grid:
  Clean Architecture, Offline-First Apps, Firebase Integrations, RTL/Localization, Responsive UI, Product-Level Polish.

Skills:
- Mobile Development: Flutter, Dart, cross-platform apps.
- Architecture & State: Clean Architecture, SOLID, BLoC/Cubit, Provider, Riverpod.
- Backend & Integrations: Firebase, REST APIs, JSON, third-party APIs.
- Local Storage & Offline: Hive, SharedPreferences, HydratedBloc, offline sync queues.
- UI/UX: responsive/adaptive UI, RTL, localization, animations.
- Tools: Git, GitHub, Postman, GoRouter, GetIt, fl_chart.
- Engineering Foundations: C, C++, Arduino, Raspberry Pi, Python, control systems.

Featured Projects:
- Top 4 cards: Sohba, Al-Bedayah, PayMinder, Job Tracker.
- Sohba gets larger “flagship” treatment.
- Each card includes product description, tech chips, feature bullets, image placeholder, and buttons for Google Play / GitHub / Details.
- Buttons with missing real links should be disabled or use `href="#"` with a clear `data-status="coming-soon"` internally.

Sohba Case Study:
- Story structure: Problem, Solution, Core Features, Architecture, Offline Strategy, UI/Experience, Impact.
- Highlight prayer tracking, social accountability groups, reminders, leaderboards, prayer garden gamification, Quran/Azkar, Qibla, prayer times, chat, badges/streaks, admin metrics, Arabic localization, RTL-friendly UI.
- Tech: BLoC/Cubit, Firebase, GoRouter, Hive, SharedPreferences, offline sync queues.
- Layout: split storytelling timeline with phone mockups and architecture cards.

Experience & Volunteering:
- Timeline items:
  Computer & Control Engineer, New Dirout Group of Regulators Project at RGBS, January 2026 - Present.
  AC Head, Robotics Team, January 2025 - May 2025.
  AC Member, Robotics Team, October 2023 - January 2025.
  AC Member, ASME Team, September 2021 - July 2025.
- Emphasize mentoring, embedded systems, ROS, Raspberry Pi, hardware, computer vision, C, Arduino, C++ OOP, project execution, competition readiness.

Certificates:
Use elegant certificate cards:
- Deep Dive into Clean Architecture in Flutter, Udemy, Eng: Tharwat Samy, November 2025.
- Flutter Advanced Course Bloc and MVVM Pattern, Udemy, Eng: Tharwat Samy, September 2025.
- Mastering Flutter Responsive & Adaptive UI Design, Udemy, Eng: Tharwat Samy, August 2025.
- Complete Flutter & Dart Development Course, Udemy, Eng: Tharwat Samy, October 2024.
- Flutter Development Course, Easy Learn Academy, September 2024.
- Best Team Competition, Easy Learn Academy, June 2024.
- Dart & OOP, Udemy, Eng: Usama Elgendy, April 2024.
- Git & GitHub, Udemy, Eng: Tharwat Samy, April 2024.

Education:
- Bachelor of Computer and Control Engineering, Assiut University, Egypt.
- October 2020 - July 2025.
- Grade: 83%.
- Mention foundations: programming, control systems, embedded technologies, C, C++, Arduino, Raspberry Pi, Python.

Contact:
- Email: `ramadan.work010@gmail.com`
- Phone/WhatsApp: `+201067911051`
- Location: Assiut, Egypt.
- LinkedIn, Portfolio, GitHub, WhatsApp placeholders until exact URLs are provided.
- Contact form UI using `mailto:` fallback.
- CTA: “Let’s build something great.”

Footer:
- Minimal dark footer with social icons, copyright, quick anchors, and CV download link.

## 5. Animation & Interaction Plan
Use CSS and vanilla JS only:
- Preloader with animated “RM” initials and Flutter-like diamond motion.
- Smooth anchor scrolling.
- Typing effect for hero roles.
- Canvas particle background with low particle count.
- Floating phone mockups using CSS transforms.
- Scroll reveal via `IntersectionObserver`.
- Mouse spotlight glow on desktop only.
- Skill chips slide/fade in.
- Project card hover tilt using pointer position.
- Counters for projects, certificates, years of learning, and app categories.
- Timeline reveal animation.
- Project details modal with focus trap and Escape close.
- Theme toggle with dark default and optional lighter mode.
- Respect `prefers-reduced-motion` by disabling typing loops, particles, tilt, and large transforms.

## 6. Project Showcase Strategy
Project hierarchy:
- Flagship: Sohba.
- Strong featured apps: Al-Bedayah, PayMinder, Job Tracker.
- Supporting grid: Social Media App, Student Attendance Management System, Responsive Adaptive Design Dashboard, My Portfolio Using Dart & Flutter, Slogan App.

Sohba should communicate scale and maturity. Al-Bedayah should show technical creativity with tracing, speech, and RTL education UX. PayMinder should show utility/offline/reminder systems. Job Tracker should show AI/productivity capability.

## 7. Assets & Placeholder Image Plan
Recommended files:
- `assets/images/profile-placeholder.webp` square, 1200x1200.
- `assets/images/hero-phone-sohba.webp` phone screenshot, 1080x2340.
- `assets/images/hero-phone-albedayah.webp` phone screenshot, 1080x2340.
- `assets/images/project-sohba-cover.webp` 16:10 or 4:3.
- `assets/images/project-albedayah-cover.webp` 16:10.
- `assets/images/project-payminder-cover.webp` 16:10.
- `assets/images/project-jobtracker-cover.webp` 16:10.
- `assets/images/certificate-clean-architecture.webp` 16:9.
- `assets/cv/ramadan-mohamed-cv.pdf`.

All images should use WebP where possible, lazy loading outside the hero, descriptive alt text, and consistent aspect-ratio containers.

## 8. Folder Structure
```text
index.html
css/
  style.css
js/
  main.js
assets/
  images/
  icons/
  cv/
    ramadan-mohamed-cv.pdf
```

## 9. HTML/CSS/JS Implementation Architecture
HTML:
- Semantic sections: `header`, `nav`, `main`, `section`, `article`, `footer`.
- Data attributes for animations, modals, counters, and project details.
- One reusable modal shell for project details.

CSS:
- Use custom properties for colors, spacing, shadows, radius, transitions.
- Organize by: reset, tokens, base, layout, components, sections, animations, responsive.
- Use stable aspect ratios for phones, project images, certificate cards, and buttons.

JavaScript:
- `initPreloader()`
- `initNavigation()`
- `initTypingEffect()`
- `initParticles()`
- `initScrollReveal()`
- `initCounters()`
- `initProjectTilt()`
- `initProjectModals()`
- `initThemeToggle()`
- `initContactFormMailto()`

## 10. Responsive Design Plan
Desktop:
- Cinematic hero with split content and floating phones.
- Featured Sohba card spans wider than other projects.
- Timeline alternates left/right.

Tablet:
- Hero stacks with phones under text.
- Projects use 2-column grid.
- Timeline becomes single-column.

Mobile:
- Mobile-first polish is critical.
- Sticky compact nav with menu button.
- Hero uses one primary phone mockup plus small secondary cards.
- CTAs stack cleanly.
- Project cards become full-width.
- Modals become bottom-sheet style.

Very small screens:
- Reduce decorative background density.
- Keep buttons full-width.
- Avoid tiny text and cramped chips.
- Use fewer visible floating elements.

## 11. Accessibility Plan
- Semantic landmarks and heading hierarchy.
- Keyboard-accessible nav, buttons, modal, and theme toggle.
- Visible focus states.
- Sufficient color contrast on dark surfaces.
- `aria-label` for icon-only buttons.
- `alt` text for profile, project, and certificate images.
- Modal focus trap and Escape close.
- `prefers-reduced-motion` support.
- Do not rely on color alone for meaning.

## 12. SEO Plan
Title:
`Ramadan Mohamed | Flutter Developer`

Meta description:
`Flutter Developer building scalable cross-platform mobile apps with clean architecture, Firebase and REST integrations, offline-first features, responsive UI, and polished user experiences.`

Add:
- Open Graph title, description, image.
- Twitter card metadata.
- Canonical URL after GitHub Pages URL is known.
- JSON-LD `Person` schema with name, job title, email, location, sameAs links once provided.
- Favicon and Apple touch icon.
- Clean section anchors.

## 13. GitHub Pages Deployment Plan
- Create the files in the planned structure.
- Add the CV PDF to `assets/cv/`.
- Push to GitHub.
- Enable GitHub Pages from repository settings using the main branch root.
- Replace placeholders by keeping the same filenames or updating image paths in `index.html`.
- Update project links in one clear project data area inside `main.js` or inline HTML attributes.

## 14. Final Development Roadmap
1. Build static HTML structure with all CV-based content.
2. Create visual system in CSS: tokens, layout, glass cards, hero, projects, timeline.
3. Add placeholder assets and stable image containers.
4. Implement vanilla JS interactions: nav, typing, reveal, counters, particles, modals, theme toggle.
5. Add responsive refinements for tablet, mobile, and very small screens.
6. Add accessibility pass: keyboard, focus, ARIA, reduced motion.
7. Add SEO metadata and structured data.
8. Test locally by opening `index.html`, then verify on mobile viewport.
9. Deploy to GitHub Pages.
10. Replace placeholder images, CV file, and real project/social links.

## 15. Questions You Need From Me Before Coding
- Please provide the real LinkedIn, GitHub, Portfolio, WhatsApp, and Google Play links.
- Please provide or confirm the final CV PDF filename for `assets/cv/ramadan-mohamed-cv.pdf`.
- Should the site be English-only first, or should it include Arabic/RTL language toggle later?
- Do you want the contact form to open email via `mailto:` only, or just be a visual UI for now?
- Which project screenshots should appear in the hero: Sohba only, or Sohba + Al-Bedayah + PayMinder?
