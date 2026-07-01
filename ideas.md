# Career Planner — Design Brainstorm

## Three Stylistic Approaches

### Approach A — "The War Room"
A dark, high-contrast tactical dashboard inspired by military operations centers and Bloomberg terminals. Dense data, amber-on-black typography, grid-based layout with hard edges. Probability: 0.04

### Approach B — "The Atlas"
A cartographic, editorial aesthetic — like a beautifully typeset academic journal meets a Moleskine notebook. Warm cream backgrounds, serif display fonts, hand-drawn-style accents, generous margins. Probability: 0.07

### Approach C — "The Signal"
A bold, modern data-forward interface inspired by Palantir's Foundry and Linear's design system. Dark navy base with electric accent colors, asymmetric sidebar layout, sharp typographic hierarchy. Probability: 0.08

---

## Chosen Approach: **C — "The Signal"**

### Design Movement
Post-brutalist data interface — the aesthetic language of serious engineering tools. Inspired by Linear, Vercel, and Palantir Foundry. Functional beauty over decorative excess.

### Core Principles
1. **Information density without clutter** — every pixel earns its place; no decorative filler
2. **Asymmetric sidebar-first layout** — persistent left nav, wide content canvas on the right
3. **Typographic hierarchy as navigation** — size, weight, and color carry the user through the content
4. **Micro-interactions that confirm intent** — checkboxes animate, credit counters update live, cards respond to hover

### Color Philosophy
- **Base:** Deep navy `oklch(0.14 0.03 255)` — serious, focused, premium
- **Surface:** Slightly lighter `oklch(0.19 0.025 255)` for cards and panels
- **Signature Brand Color:** Electric cyan `oklch(0.78 0.18 200)` — used sparingly for active states, progress bars, and key numbers
- **Warm amber** `oklch(0.82 0.18 75)` — for "drop candidate" warnings and caution states
- **Text:** Off-white `oklch(0.92 0.01 255)` primary, muted `oklch(0.55 0.015 255)` secondary

### Layout Paradigm
Left sidebar (240px) for archetype navigation. Right content area split into two columns: Fall 2026 and Spring 2027. Each semester shows a live credit counter at the top. Course rows are checkboxes — unchecking drops the course and updates the credit total in real time.

### Signature Elements
1. **Live credit bar** — animated progress bar showing current credits vs. 16.5 cap, color-coded green/amber/red
2. **Drop candidate badges** — amber "LIKELY DROP" tags on courses flagged for removal
3. **Archetype identity cards** — each archetype has a one-line positioning statement and 3 personality adjectives in the sidebar

### Typography System
- **Display:** `Space Grotesk` — geometric, technical, distinctive
- **Body:** `Inter` — readable at small sizes for course tables
- **Mono:** `JetBrains Mono` — for credit numbers and course codes

### Brand Essence
"Your degree, your strategy." — For the engineer who treats their education like a product roadmap.
Personality: **Precise. Ambitious. Uncompromising.**

### Brand Voice
Headlines: Direct, declarative, no fluff. "Build the schedule that gets you hired."
CTAs: Action-oriented. "Add to plan." "Drop this course." "Lock your semester."
No filler: Never "Welcome to our planner" or "Get started today."
