# Mongrel Boots — Website Redesign
### INFO20005 User Interface Development | Assignment 2 & 3

**Student**: Yifan Zhu | **Student ID**: 1653579  
**Course**: INFO20005 — User Interface Development  
**University**: University of Melbourne

---

## 🥾 Project Overview

A full redesign of the [Mongrel Boots](https://www.mongrelboots.com.au/) website — an Australian workwear footwear brand. The original site was identified as an underperformer in Assignment 1, lacking visual hierarchy, e-commerce functionality, and brand-consistent design.

**Live Site**: [View Here](https://[your-username].github.io/mongrel-boots/)  
**Figma Prototype (Mobile)**: [Open in Figma](https://www.figma.com/proto/[your-link])  
**Assignment 3B Report**: [View Report](./report/index.html)

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#F5C518` | Brand yellow — CTAs, accents |
| `--color-dark` | `#0D0D0D` | Backgrounds, text |
| `--color-white` | `#FFFFFF` | Surfaces, text on dark |
| `--color-accent` | `#8B6914` | Active/selected states |
| `--font-heading` | Bebas Neue | Display headings |
| `--font-body` | Inter | Body text |
| `--border-radius` | `0px` | Angular forms — brand identity |

**Color Contrast**: Yellow on Black = **9.04:1** (exceeds WCAG AAA)

---

## 📁 File Structure

```
mongrel-boots/
├── index.html            # Homepage
├── products.html         # Product list with filtering
├── product-detail.html   # Product detail page
├── cart.html             # Shopping cart
├── css/
│   ├── style.css         # Global styles + design tokens
│   ├── components.css    # Reusable component styles
│   └── responsive.css    # Breakpoint overrides
├── js/
│   └── main.js           # Cart logic + interactive states
├── assets/
│   └── images/           # Product and brand imagery
└── report/
    └── index.html        # Assignment 3B visual report
```

---

## 🔄 Design Process

### 1. Research & Mood Boarding
- Analyzed competitor sites: R.M. Williams (top performer), Tony Bianco, Aquila
- Identified Mongrel Boots as underperformer with no e-commerce flow
- Mood board: yellow/black/white palette derived from brand logo

### 2. Divergent Sketching (5 Directions)
- **✅ Selected**: Professional Outdoor (R.M. Williams reference)
- ❌ Rejected: Glassmorphism (blurred backgrounds obscure CTAs)
- ❌ Rejected: Rounded comfort style (contradicts brand toughness)
- ❌ Rejected: Luxury avant-garde (wrong market positioning)
- ❌ Rejected: Competitive sports (missing search functionality)

### 3. Skeleton Wireframing
- Angular square module system (0px border-radius throughout)
- Modular grid layout for clear information hierarchy
- Mobile-first, then adapted to desktop

### 4. Art Direction & Prototyping
- Built interactive Figma prototype for mobile
- Usability testing revealed 5 critical issues → all fixed
- Desktop adaptation maintaining brand consistency

---

## ♿ Accessibility

- **WCAG 2.1 AA** compliant color contrast throughout
- Semantic HTML5 elements: `<nav>`, `<main>`, `<section>`, `<article>`
- ARIA labels on all navigation regions
- `:focus-visible` custom styled focus indicators
- Descriptive `alt` text on all images
- Keyboard navigable interactive elements

---

## 📱 Responsive Breakpoints

| Breakpoint | Columns | Target |
|-----------|---------|--------|
| Default | 2 col | Mobile 390px |
| `768px+` | 3 col | Tablet |
| `1200px+` | 4 col | Desktop |

---

## 🗂 Commit History

Commits follow this convention: `[scope]: description`

| Scope | Examples |
|-------|---------|
| `init` | Initial HTML structure, file setup |
| `style` | CSS styling, design tokens |
| `layout` | Responsive grid, flexbox |
| `component` | Nav, product card, cart |
| `a11y` | Accessibility fixes, ARIA, focus |
| `fix` | Bug fixes |

---

## 🚀 How to Run Locally

```bash
# Clone the repo
git clone https://github.com/[your-username]/mongrel-boots.git
cd mongrel-boots

# Open in browser (no build step needed)
open index.html

# Or use a local server
npx serve .
```

---

## 📋 Assignment Checklist

### Assignment 2 (Figma Prototype)
- [x] Inspiration & Mood Boarding
- [x] Divergent Sketching (5 directions with rationale)
- [x] Skeleton/Wireframe design
- [x] Art Direction (3 options, 1 selected with justification)
- [x] Mobile interactive prototype
- [x] Usability testing (5 issues found + fixed)
- [x] Desktop adaptation

### Assignment 3 (Coded Front-End + Report)
- [x] HTML5 semantic structure
- [x] CSS design system with custom properties
- [x] Responsive layout (mobile → desktop)
- [x] Accessibility implementation
- [x] GitHub repository with commit history
- [x] Assignment 3B report (11 pages)
- [ ] Video showcase (2-3 min) — *submitting May 22*

---

## 🔗 Links

- **Figma Prototype**: [figma.com/proto/...](https://www.figma.com/proto/[your-link])
- **Live Site**: [your-username.github.io/mongrel-boots](https://[your-username].github.io/mongrel-boots/)
- **Original Site**: [mongrelboots.com.au](https://www.mongrelboots.com.au/)
- **Loom Usability Test**: [loom.com/share/...](https://www.loom.com/share/e4508a33031a45939978aba687bab4c0)

---

*INFO20005 | Yifan Zhu | 1653579 | May 2026*
