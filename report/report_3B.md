# Mongrel Boots — Website Redesign
## Assignment 3B: High Quality Project 3 Report

**Course:** INFO20005 — User Interface Development
**Student:** Yifan Zhu — 1653579
**Submission Date:** May 22, 2026
**GitHub Repository:** `github.com/[your-username]/mongrel-boots`
**Figma Prototype:** `figma.com/proto/[your-link]`
**Live Site:** `[your-github-pages-url]`

---

<!-- PAGE 2 -->

## 1. Project Overview

This project is a full redesign of the **Mongrel Boots** website — an Australian workwear footwear brand. The original site, identified in Assignment 1 as an underperformer, lacked visual hierarchy, had no functional e-commerce flow, and offered no AI-driven discovery features.

> **Goal:** Redesign Mongrel Boots' digital presence from the ground up, building both a high-fidelity Figma prototype and a functional HTML5 front-end that reflects the brand's core identity — tough, practical, and functional.

### What Was Built

**Figma Prototype**
- Mobile-first interactive prototype covering the full shopping journey: Homepage → Product List → Product Detail → Cart → Checkout Confirmation
- Desktop-adapted layout maintaining visual consistency across screen sizes

**Coded Front-End**
- HTML5 with semantic markup for accessibility and SEO
- Responsive CSS Grid/Flexbox layout across all breakpoints
- Accessible interactive states and WCAG AA compliance

### Design Direction

The final design is anchored in three brand colors — **black, yellow (#F5C518), and white** — with sharp angular forms to reinforce the brand's rugged, functional identity. This was a deliberate departure from the original site's visual confusion and lack of brand consistency.

**Design tokens:** `#0D0D0D` · `#F5C518` · `#FFFFFF` · Angular Forms · Mobile-First · WCAG AA

### Original Site — Key Problems Identified

- No e-commerce functionality — users cannot purchase online at all
- No dedicated search page — only a basic input box with no recommendations
- Poor visual hierarchy — heavy imagery without clear focal points or guidance
- No AI-driven product discovery or personalization
- Inconsistent interactive states — buttons with no clear affordance

---

<!-- PAGE 3 -->

## 2. Evolution: From Sketches to Final Design

### Step 1 — Inspiration & Mood Boarding

Research began by analyzing three top-performer websites — R.M. Williams, Tony Bianco, and Aquila — extracting patterns: clear category navigation, hero product shots, and brand-consistent color usage.

The Mongrel Boots mood board was built around the brand's existing logo. Yellow-black-white was selected because the combination mirrors the brand's rugged, high-visibility workwear market, and provides maximum contrast (accessible by WCAG standards).

### Step 2 — Divergent Sketching: Five Directions Explored

| Direction | Reference | Verdict | Reason |
|-----------|-----------|---------|--------|
| **Professional Outdoor** | R.M. Williams | ✅ Selected | Best match for Mongrel's functional positioning |
| **Glass/Frosted Texture** | Apple-style glass aesthetic | ❌ Rejected | Blurred backgrounds obscure operation buttons |
| **Rounded Comfort Style** | Lifestyle footwear brands | ❌ Rejected | Contradicts brand's tough, angular identity |
| **Luxury Avant-Garde** | High-end fashion brands | ❌ Rejected | Simplifies product info; wrong positioning |
| **Competitive Sports** | Performance brands | ❌ Rejected | No search page; filtering criteria misaligned |

### Before vs After — The Redesign Impact

![Before and after comparison of Mongrel Boots website redesign](before_after.png)

*LEFT: Original site — cluttered, no e-commerce, poor hierarchy | RIGHT: Redesigned — brand-consistent, full shopping flow*

### Step 3 — Skeleton Design

The wireframe phase defined structural logic before any visual styling: **angular square modules** aligned with brand tone, a **modular grid layout** for clear information hierarchy, and a **minimalist product detail template** that prioritizes product features over decoration.

> **Key insight:** The decision to use 0px border-radius everywhere was not just aesthetic — it was a deliberate brand alignment choice. Angular = tough = Mongrel Boots.

---

<!-- PAGE 4 -->

## 3. Art Direction & Prototype Testing

### Step 4 — Art Direction Exploration

**Direction 1 — ✅ SELECTED: Professional Outdoor**
Brand yellow/black fill + angular lines + modular hero shots. Successfully integrates brand tone with functional UI. Clear visual hierarchy: hero → categories → products → CTA.

**Direction 2 — ❌ Glassmorphism/Frosted**
High visual impact, but blurred backgrounds reduce button discoverability. Mentor feedback confirmed: users miss key CTAs. Rejected.

**Direction 3 — ❌ Rounded / Marble Texture**
Rounded corners and marble backgrounds conflict entirely with "tough outdoor" brand positioning. Rejected in early art direction review.

### Final Prototype — 8 Screens, Complete Shopping Flow

![Mongrel Boots mobile prototype screens](prototype_screens.png)

*Homepage → Search → Product List → Product Detail → Cart → Checkout*

### Step 5 — Mobile Prototyping & Usability Testing

The first interactive prototype revealed five critical usability failures during peer testing:

**Problems Found**
- "Shop Now" button non-functional
- No product model/size selector
- Inconsistent interactive states
- No payment confirmation page
- No clear exit path post-checkout

**Fixes Implemented**
- Fixed all navigation and CTA buttons
- Added size and color selection module
- Unified interaction design system
- Added full order confirmation page
- Navigation buttons after checkout

### Step 6 — Desktop Adaptation

The same visual language was maintained for desktop, reorganising the grid from 2 columns (mobile) → 4 columns (desktop), ensuring responsive design. Navigation shifts from a hamburger menu to a full horizontal nav bar.

---

<!-- PAGE 5 -->

## 4. Technical Code Map

### 4.1 — File Structure

```
mongrel-boots/
├── index.html            # Homepage
├── products.html         # Product list page
├── product-detail.html   # Product detail page
├── cart.html             # Shopping cart
├── css/
│   ├── style.css         # Global styles + design tokens
│   ├── components.css    # Reusable component styles
│   └── responsive.css    # Breakpoint overrides
├── js/
│   └── main.js           # Cart logic + interactive states
└── assets/
    └── images/           # Product and brand imagery
```

### 4.2 — Design Tokens as CSS Custom Properties

```css
:root {
  --color-primary:  #F5C518;  /* Brand yellow */
  --color-dark:     #0D0D0D;  /* Black */
  --color-white:    #FFFFFF;
  --color-accent:   #8B6914;  /* Earthy brown — active states */
  --font-heading:   'Bebas Neue', sans-serif;
  --font-body:      'Inter', sans-serif;
  --border-radius:  0px;  /* Angular — no rounded corners */
  --grid-gap:       16px;
}
```

### 4.3 — Responsive Layout Strategy (Mobile-First)

```css
/* Mobile: 2 columns (default) */
.product-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--grid-gap);
}
/* Tablet: 3 columns */
@media (min-width: 768px) {
  .product-grid { grid-template-columns: repeat(3, 1fr); }
}
/* Desktop: 4 columns */
@media (min-width: 1200px) {
  .product-grid { grid-template-columns: repeat(4, 1fr); }
}
```

---

<!-- PAGE 6 -->

## 5. Semantic HTML & Accessibility

### 5.1 — Semantic HTML Structure

```html
<header>
  <nav aria-label="Main navigation">
    <ul role="menubar">
      <li role="menuitem"><a href="/products.html">Shop</a></li>
    </ul>
  </nav>
</header>
<main>
  <section aria-labelledby="hero-heading">
    <h1 id="hero-heading">Built to Last</h1>
    <a href="/products.html" class="btn-primary">Shop Now</a>
  </section>
</main>
```

### 5.2 — Key Technical Decisions

| Decision | Rationale |
|----------|-----------|
| **0px border-radius everywhere** | Angular forms match brand positioning; consistent with design system |
| **CSS Custom Properties** | Single source of truth for colors — easy to maintain and scale |
| **`<nav>` + `role="menubar"`** | Screen reader compatibility; WCAG 2.1 navigation landmark |
| **Mobile-first breakpoints** | Desktop is an enhancement, not the default — better performance baseline |
| **No JS frameworks** | Simple, fast-loading, focused on HTML/CSS fundamentals |

### 5.3 — Accessibility Implementation

**Color Contrast**
Yellow (#F5C518) on Black (#0D0D0D) = **9.04:1**
Passes WCAG AAA (requires 7:1)

**Focus Management**
`:focus-visible` with custom outline replacing browser default — visible but brand-consistent

---

<!-- PAGE 7 -->

## 6. Critical Reflection & The Final You

### 6.1 — What I Struggled With Most

The hardest moment wasn't the design — it was the moment I started coding. I assumed that because the Figma prototype was detailed and polished, the HTML would mostly be a "translation" exercise.

I was wrong. The product grid looked clean in Figma at a fixed artboard width. The moment I put it into a browser and resized the window, it broke in four different ways. I spent two hours on a layout problem that in Figma hadn't existed at all.

> This taught me something I genuinely didn't understand before: Figma designs live in a fixed space. The web is fluid. Every spacing decision, every font size, every image ratio — all of it has to be rethought for a medium that constantly changes size.

### 6.2 — Where Feedback Changed My Direction

My initial prototype used a glassmorphism aesthetic — frosted backgrounds, subtle blur, a more "premium" feeling I was personally quite proud of. My mentor's feedback was direct: blurred backgrounds made the buttons hard to see, reducing usability rather than enhancing it.

My instinct was to defend the choice. I thought it looked better. But when I tested it myself — trying to tap "Add to Cart" quickly — I realized my mentor was right. The blur literally obscured the button.

> **Design is not about what looks impressive in isolation — it's about what works when someone is actually using it.** This was the moment I understood the trade-off between personal aesthetic and user performance.

I removed the glassmorphism entirely and went with flat, high-contrast surfaces. The design felt less "exciting" to me, but it performed better — and that is the correct trade-off to make.

---

<!-- PAGE 8 -->

## 7. Accessibility & GenAI Strategy

### 7.1 — Accessibility: From Checkbox to Understanding

At the start of this project, accessibility was a rubric item to satisfy. I knew WCAG existed. I knew contrast ratios mattered. By the end, I actually understood *why*.

The yellow-on-black combination I chose for purely aesthetic reasons — because it looked bold and matched the brand — turned out to also be one of the most accessible color combinations possible (9.04:1 contrast ratio, exceeding WCAG AAA). This was not a coincidence; it was a lesson that **good brand thinking and good accessibility thinking often overlap**, because both require clear, legible communication.

**Focus States Mistake & Fix**

I removed the browser's default `:focus` outline because it looked "ugly." This created an interface completely unusable for keyboard navigation. For users who navigate by keyboard, a missing focus state is the equivalent of removing all visual affordances from a touchscreen.

Fix: Re-implemented `:focus-visible` with a custom styled outline — visible but brand-consistent.

### 7.2 — The GenAI Strategy — What I'd Do Differently

In Assignment 1, I proposed an AI recommendation system based on search keyword analysis. Having now built the front-end, I understand this feature far better — and I understand how far from implementation it actually is.

The front-end can support AI recommendations through a simple API call pattern: send the search query to a backend, receive ranked product IDs, render them in the grid. The HTML/CSS structure I built already supports this — the product grid renders from a data structure that can be dynamically populated.

> But the AI model itself — the part that actually understands user intent from keywords — requires training data, a real product catalog, and a backend infrastructure I haven't built. This is the gap between design thinking and engineering reality.

---

<!-- PAGE 9 -->

## 8. Collaboration & What I'd Change

### 8.1 — The Collaboration Experience

Working with a mentor in weekly check-ins was structurally different from feedback I've received before. Most design feedback is asynchronous — a comment in Figma, an annotation, a Loom video. This was a live conversation.

The difference matters because in a live conversation, I had to articulate **why** I made a decision in real time. I couldn't just show a polished result. I had to explain the reasoning behind every choice.

> When my mentor asked "why did you choose angular forms over rounded corners?", I had a visual intuition — but hadn't fully articulated the rationale. Forming that answer in the moment forced me to connect the aesthetic decision to the brand positioning: angular = tough = Mongrel Boots' identity.

This practice of "design justification" — explaining every choice with a reason — is now how I approach every decision. It has changed how I work in Figma: I now add annotations explaining *why* a component is designed a certain way, not just what it looks like.

### 8.2 — What I Would Change If Starting Over

**1. Wireframe at multiple screen sizes simultaneously**
Some content modules that work well at 390px don't scale to 1440px without a fundamental rethink — not just a column count change. Starting with both extremes would catch these issues earlier.

**2. Build a design system before designing individual pages**
I defined colors, fonts, and spacing rules relatively late. Early sketches had inconsistent spacing that I had to retroactively fix when coding. Defined 8px-based spacing tokens from day one would have saved significant time.

**3. Test on a real device earlier**
All usability testing was done in Figma preview and a browser window. The first time I viewed the coded site on my phone, the size selector tap targets were too small. Hardware testing at every prototype stage would have caught this.

---

<!-- PAGE 10 -->

## 9. Self-Assessment Against Rubric

### 9.1 — Criterion Scores

| Criterion | Self-Assessment |
|-----------|----------------|
| Evolution Documented | Full Mark |
| Design Rationale Applied | Strong |
| Accessibility Addressed | Good |
| Technical Implementation | Good |
| Collaboration Reflected | Good |
| GitHub / Project Rigor | Full Mark |

### 9.2 — The "Final You" Moment

If there is one thing I want the assessor to take from this report, it is this:

**I did not understand what front-end development meant before this course.**

I knew HTML existed. I knew CSS was "the styling language." But I thought of coding as a downstream translation step — something developers do after designers finish.

> What this project taught me is that design and code are not sequential phases. They are simultaneous constraints. A design decision that ignores how it will be coded creates technical debt. A coding decision that ignores design intent creates an inconsistent product.

**The designer who understands how their decisions will be implemented** — who thinks in terms of CSS Grid while placing elements in Figma, who knows what a semantic HTML element is and why it matters — makes categorically **better design decisions** than one who doesn't. That is the designer I am working toward becoming.

---

<!-- PAGE 11 -->

## 10. Conclusions & Future Improvements

### 10.1 — What Was Achieved

**Figma Deliverables**
- Fully interactive mobile prototype — complete shopping journey
- Desktop adaptation maintaining brand consistency
- Documented design rationale for all major decisions

**Code Deliverables**
- HTML5/CSS3 front-end with semantic markup
- WCAG 2.1 AA accessibility compliance
- Version-controlled GitHub workflow

### 10.2 — What Remains (Exam Week — 35%)

- Complete product list page with functional filtering and sorting
- Cart page with item management (quantity update, remove)
- Checkout flow with form validation
- Mobile hamburger nav → slide-in drawer
- AI search recommendation interface (front-end structure only)

### 10.3 — Future Improvements Beyond This Course

| Priority | Improvement | Rationale |
|----------|-------------|-----------|
| **High** | Backend + product database integration | Replace static HTML cards with dynamic data |
| **High** | AI recommendation engine | Implement keyword-based NLP for product suggestions |
| Medium | Real user testing (5 Mongrel Boots customers) | Unmoderated usability sessions with target audience |
| Medium | Performance optimization (WebP, lazy load) | Improve LCP score and Core Web Vitals |
| Low | Progressive Web App (PWA) | Service worker + manifest for offline capability |

> The Mongrel Boots website is not finished. But the designer who started it and the designer submitting it today are meaningfully different — and that difference is the real deliverable of this course.

---

*Yifan Zhu — 1653579 — INFO20005 — May 2026*
