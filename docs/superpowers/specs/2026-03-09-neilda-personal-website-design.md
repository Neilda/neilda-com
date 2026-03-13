# neilda.com — Personal Website Design Spec

**Date:** 2026-03-09
**Status:** Approved

---

## Overview

A single-page personal hub at `neilda.com`. The goal is to introduce Neilda to visitors, establish her voice and credibility, and route each audience to the right destination. Content lives elsewhere (Substack, Notion, AGI Ventures) — this site is the connective tissue.

---

## Visual Identity

| Token | Value |
|---|---|
| Background | `#0f0f0f` (near black) |
| Surface | `#141414` / `#1a1a1a` |
| Border | `#1e1e1e` / `#222` |
| Accent | `#c8912a` (Warm Amber) |
| Text primary | `#ffffff` |
| Text secondary | `#dddddd` |
| Text muted | `#888888` / `#555555` |
| Heading font | Cormorant Garamond (600/700, italic for emphasis) |
| Body/UI font | System UI sans-serif |
| Label style | Uppercase, letter-spacing: 3px, 10–11px |

---

## Page Structure

Single scrollable page. No routing, no sub-pages.

### 1. Nav
- Left: "Neilda Pacquing Gagné" in Cormorant Garamond
- Right: "Say Hello ↗" in amber — links to `mailto:neilda@agiventures.ca`
- Bottom border: `#1e1e1e`

### 2. Hero
Two-column layout: profile photo left, content right.

- **Photo:** Circular, 88×88px, amber border
- **Eyebrow label:** `CHIEF ECOSYSTEM OFFICER · AGI VENTURES CANADA`
- **Headline:** Cormorant Garamond 32px
  - Line 1 (italic): *Momentum is architecture.*
  - Line 2 (normal): I build the rooms where it compounds.
- **Audience slider** (below headline, separated by a thin rule):
  - Label: "I'm talking to..."
  - Three toggle buttons: `Founders & Builders` | `Ecosystem Leaders` | `Collaborators`
  - Active button: amber background, dark text
  - Inactive buttons: dark surface, muted text, subtle border
  - Subheadline (Cormorant italic, 18px, amber left border) changes per selection:
    - **Founders & Builders:** "I design ecosystems where ambitious builders find momentum, capital, and each other."
    - **Ecosystem Leaders:** "I help communities move from random results to deliberate architecture."
    - **Collaborators:** "If you're building something serious, let's find where our work connects."

### 3. About
- Section label: `ABOUT` (amber, uppercase)
- Body copy in Cormorant Garamond 20px, `#ddd`, line-height 1.7
- Copy (editable): "I've spent the last several years building tech ecosystems in Canada and the SF Bay Area — hackathons, hacker houses, community programs. My work is about designing the conditions where builders thrive: the right people, the right programs, the right roles activated at the right time."

### 4. Explore (Links)
- Section label: `EXPLORE` (amber, uppercase)
- Three link cards, stacked vertically
- Card structure: dark surface, subtle border, title in Cormorant, subtitle in sans-serif muted, amber `↗` arrow
- First card (Substack) has amber left border accent as featured indicator
- Cards:
  1. **Substack** — "Essays on ecosystem architecture" → Neilda's Substack URL
  2. **Personal OS** — "How I work — tools, systems, frameworks" → Neilda's Notion URL
  3. **AGI Ventures Canada** — "The company I help build" → `https://www.agiventures.ca`

### 5. Footer
- Left: `Neilda Pacquing Gagné © 2026` (muted, uppercase, small)
- Right: `neilda@agiventures.ca` (amber)

---

## Behaviour

- **Slider:** JavaScript toggles active audience button and swaps the subheadline text. No page reload. Default selection: Founders & Builders.
- **Link cards:** Full card is clickable, opens in new tab.
- **Nav CTA:** Opens mail client (`mailto:`).
- **Mobile:** Stack hero to single column (photo centered above content). Nav wraps gracefully.

---

## Tech Stack

- Plain HTML + CSS + vanilla JS (no framework)
- Google Fonts: Cormorant Garamond (600, 700, italic)
- Deploy to Vercel or Netlify (static, no build step needed)
- Domain: `neilda.com` (already owned)

---

## Content Needed from Neilda

- [ ] Profile photo file
- [ ] Substack URL
- [ ] Personal OS Notion URL
- [ ] Confirm/edit about copy
- [ ] Confirm slider subheadlines
