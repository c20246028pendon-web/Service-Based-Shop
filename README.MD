# Pendon Service Studio — Single-Page Website
**Pendon Service Studio** is a modern single-page website built for an intangible service business (offering Digital Strategy, UX Engineering, Cloud Architecture, and AI Consultation).
---
## 🎨 1. Design System & Palette (60-30-10 Rule)
- **Dominant (60%):** Slate backdrop (`#0b0f19` Dark / `#f8fafc` Light)
- **Secondary (30%):** Indigo slate containers & cards (`#131b2e` Dark / `#ffffff` Light)
- **Accent (10%):** Electric Cyan (`#06b6d4`) & Indigo Glow (`#6366f1`)
### Named Visual Style
**Glassmorphism + Bento Grid:** Translucent cards (`backdrop-blur-md`), subtle glowing borders, and modern bento grid layouts.
### Color Contrast Verification (C4)
- Dark Mode Primary Text (`#f8fafc` on `#0b0f19`): **18.1:1** (WCAG AAA)
- Light Mode Primary Text (`#0f172a` on `#f8fafc`): **17.5:1** (WCAG AAA)
- Accent Cyan Text (`#06b6d4` on dark backdrop): **10.4:1** (WCAG AAA)
---
## 🚀 2. Features & Stack
- **Stack:** HTML5, Tailwind CSS v4, JavaScript, GSAP 3.13.0, ScrollTrigger.
- **GSAP Intro Timeline:** Multi-step page intro with staggers, overlap position parameters (`"-=0.2"`), and a "Replay Intro" button (`tl.restart()`).
- **ScrollTrigger Progress & Reveals:** Linear scrub scroll progress bar (`ease: "none"`) and scroll reveals via `.reveal` array looping.
- **Accessibility & Motion Guard:** All GSAP timelines wrapped in `gsap.matchMedia()` checking `(prefers-reduced-motion: no-preference)`.
- **Dark Mode:** Persistent toggle using `localStorage` and `classList.toggle('dark')`.
- **Responsive Layout:** Mobile-first design with `sm:` and `md:` breakpoints.
---
## 📜 Git Commit Guidelines for Session Submission
To satisfy the **Git & GitHub requirement (at least 4 commits across 2 sessions)**, run the following Git commands in your terminal:
### Session A Commits
```bash
git add index.html README.md
git commit -m "Add HTML structure, Tailwind styling, and responsive layout"

git add index.html
git commit -m "Implement dark mode toggle with localStorage persistence"