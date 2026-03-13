# neilda.com Personal Website Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy a single-page personal hub at neilda.com with a dark bold aesthetic, Cormorant Garamond headings, warm amber accents, and an audience slider.

**Architecture:** Plain HTML + CSS + vanilla JS — no framework, no build step. All styles in one CSS file. Slider interactivity in one JS file. Deploy as a static site to Vercel. Google Fonts loads Cormorant Garamond via CDN.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, Google Fonts (Cormorant Garamond), Vercel (static deploy)

**Spec:** `docs/superpowers/specs/2026-03-09-neilda-personal-website-design.md`

---

## Chunk 1: Project scaffold + HTML structure

### Task 1: Initialize project

**Files:**
- Create: `index.html`
- Create: `styles.css`
- Create: `script.js`
- Create: `assets/` (directory for profile photo)
- Create: `.gitignore`
- Create: `vercel.json`

- [ ] **Step 1: Initialize git repo**

```bash
cd /Users/neilda/neilda-com
git init
```

Expected: `Initialized empty Git repository`

- [ ] **Step 2: Create .gitignore**

```
.DS_Store
.superpowers/
node_modules/
```

- [ ] **Step 3: Create vercel.json**

```json
{
  "cleanUrls": true,
  "trailingSlash": false
}
```

- [ ] **Step 4: Create assets directory with a placeholder**

```bash
mkdir -p assets
touch assets/.gitkeep
```

- [ ] **Step 5: Commit scaffold**

```bash
git add .gitignore vercel.json assets/.gitkeep
git commit -m "chore: initialize project scaffold"
```

---

### Task 2: HTML structure

**Files:**
- Create: `index.html`

- [ ] **Step 1: Write index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Neilda Pacquing Gagné</title>
  <meta name="description" content="Chief Ecosystem Officer at AGI Ventures Canada. Building the rooms where momentum compounds." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="styles.css" />
</head>
<body>

  <!-- NAV -->
  <nav class="nav">
    <span class="nav-name">Neilda Pacquing Gagné</span>
    <a class="nav-cta" href="mailto:neilda@agiventures.ca">Say Hello ↗</a>
  </nav>

  <!-- HERO -->
  <section class="hero">
    <div class="hero-photo-wrap">
      <img class="hero-photo" src="assets/profile.jpg" alt="Neilda Pacquing Gagné" />
    </div>
    <div class="hero-content">
      <p class="eyebrow">Chief Ecosystem Officer · AGI Ventures Canada</p>
      <h1 class="headline">
        <em>Momentum is architecture.</em><br />
        I build the rooms where it compounds.
      </h1>

      <div class="slider">
        <p class="slider-label">I'm talking to...</p>
        <div class="slider-tabs" role="tablist">
          <button class="tab active" data-audience="founders" role="tab" aria-selected="true">Founders &amp; Builders</button>
          <button class="tab" data-audience="leaders" role="tab" aria-selected="false">Ecosystem Leaders</button>
          <button class="tab" data-audience="collaborators" role="tab" aria-selected="false">Collaborators</button>
        </div>
        <blockquote class="slider-quote" id="slider-quote">
          I design ecosystems where ambitious builders find momentum, capital, and each other.
        </blockquote>
      </div>
    </div>
  </section>

  <hr class="divider" />

  <!-- ABOUT -->
  <section class="about">
    <p class="section-label">About</p>
    <p class="about-body">
      I've spent the last several years building tech ecosystems in Canada and the SF Bay Area — hackathons, hacker houses, community programs. My work is about designing the conditions where builders thrive: the right people, the right programs, the right roles activated at the right time.
    </p>
  </section>

  <hr class="divider" />

  <!-- EXPLORE -->
  <section class="explore">
    <p class="section-label">Explore</p>
    <div class="links">
      <!-- TODO Task 5: replace YOUR_SUBSTACK_URL with real URL -->
      <a class="link-card link-card--featured" href="https://YOUR_SUBSTACK_URL" target="_blank" rel="noopener">
        <div class="link-card-text">
          <span class="link-card-title">Substack</span>
          <span class="link-card-sub">Essays on ecosystem architecture</span>
        </div>
        <span class="link-card-arrow">↗</span>
      </a>
      <!-- TODO Task 5: replace YOUR_NOTION_URL with real URL -->
      <a class="link-card" href="https://YOUR_NOTION_URL" target="_blank" rel="noopener">
        <div class="link-card-text">
          <span class="link-card-title">Personal OS</span>
          <span class="link-card-sub">How I work — tools, systems, frameworks</span>
        </div>
        <span class="link-card-arrow">↗</span>
      </a>
      <a class="link-card" href="https://www.agiventures.ca" target="_blank" rel="noopener">
        <div class="link-card-text">
          <span class="link-card-title">AGI Ventures Canada</span>
          <span class="link-card-sub">The company I help build</span>
        </div>
        <span class="link-card-arrow">↗</span>
      </a>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <span class="footer-copy">Neilda Pacquing Gagné © 2026</span>
    <a class="footer-email" href="mailto:neilda@agiventures.ca">neilda@agiventures.ca</a>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 2: Open in browser and verify structure renders (unstyled is fine)**

Open `index.html` in a browser. Expected: all sections visible, text readable, no console errors. Note: the profile photo will show as a broken image at this stage — that is expected and will be resolved in Task 5. Note: the two placeholder hrefs (`YOUR_SUBSTACK_URL`, `YOUR_NOTION_URL`) are intentional stubs to be replaced in Task 5 — do not stop to look them up now.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add HTML structure for all sections"
```

---

## Chunk 2: Styles

### Task 3: CSS — design tokens and reset

**Files:**
- Create: `styles.css`

- [ ] **Step 1: Create styles.css with tokens, reset, and base layout**

This step creates the file. Steps 3–7 append additional sections to this same file.

```css
/* === TOKENS === */
:root {
  --bg: #0f0f0f;
  --surface: #141414;
  --surface-2: #1a1a1a;
  --border: #1e1e1e;
  --border-2: #222;
  --accent: #c8912a;
  --text: #ffffff;
  --text-secondary: #dddddd;
  --text-muted: #888888;
  --text-dim: #555555;

  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-sans: system-ui, -apple-system, sans-serif;

  --page-max: 720px;
  --page-pad: 32px;
}

/* === RESET === */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { font-size: 16px; }
body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
}
a { color: inherit; text-decoration: none; }
img { display: block; max-width: 100%; }
button { font-family: inherit; cursor: pointer; border: none; background: none; }
hr { border: none; }

/* === LAYOUT CONTAINER === */
.nav,
.hero,
.about,
.explore,
.footer,
.divider {
  max-width: var(--page-max);
  margin: 0 auto;
  padding-left: var(--page-pad);
  padding-right: var(--page-pad);
}
```

- [ ] **Step 2: Verify in browser — body should be black, text white**

- [ ] **Step 3: Append nav styles to styles.css**

```css
/* === NAV === */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border);
}

.nav-name {
  font-family: var(--font-serif);
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.3px;
}

.nav-cta {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--accent);
  transition: opacity 0.15s;
}
.nav-cta:hover { opacity: 0.75; }
```

- [ ] **Step 4: Append hero styles to styles.css**

```css
/* === HERO === */
.hero {
  display: flex;
  gap: 32px;
  align-items: flex-start;
  padding-top: 52px;
  padding-bottom: 40px;
}

.hero-photo-wrap {
  flex-shrink: 0;
}

.hero-photo {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  border: 2px solid var(--accent);
  object-fit: cover;
  object-position: center top;
  background: var(--surface-2);
}

.hero-content {
  flex: 1;
  min-width: 0;
}

.eyebrow {
  font-size: 10px;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 14px;
}

.headline {
  font-family: var(--font-serif);
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
  color: var(--text);
}

.headline em {
  font-style: italic;
}
```

- [ ] **Step 5: Append slider styles to styles.css**

```css
/* === SLIDER === */
.slider {
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid var(--border);
}

.slider-label {
  font-size: 10px;
  color: var(--text-dim);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.slider-tabs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.tab {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 5px 12px;
  border-radius: 2px;
  border: 1px solid var(--border-2);
  color: var(--text-dim);
  background: var(--surface);
  transition: background 0.15s, color 0.15s, border-color 0.15s;
}

.tab.active {
  background: var(--accent);
  color: var(--bg);
  border-color: var(--accent);
}

.tab:hover:not(.active) {
  border-color: var(--accent);
  color: var(--text-muted);
}

.slider-quote {
  font-family: var(--font-serif);
  font-size: 18px;
  font-style: italic;
  color: var(--text-secondary);
  line-height: 1.6;
  border-left: 2px solid var(--accent);
  padding-left: 14px;
  transition: opacity 0.2s;
}

.slider-quote.fade {
  opacity: 0;
}
```

- [ ] **Step 6: Append divider, about, explore, and footer styles to styles.css**

```css
/* === DIVIDER === */
.divider {
  border-top: 1px solid var(--border);
  padding: 0;
}

/* === SECTION LABEL === */
.section-label {
  font-size: 10px;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

/* === ABOUT === */
.about {
  padding-top: 36px;
  padding-bottom: 36px;
}

.about-body {
  font-family: var(--font-serif);
  font-size: 20px;
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 540px;
}

/* === EXPLORE === */
.explore {
  padding-top: 36px;
  padding-bottom: 36px;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.link-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--surface);
  border: 1px solid var(--border-2);
  border-left: 3px solid var(--border-2);
  padding: 16px 18px;
  transition: border-color 0.15s, background 0.15s;
}

.link-card--featured {
  border-left-color: var(--accent);
}

.link-card:hover {
  background: var(--surface-2);
  border-color: var(--accent);
  border-left-color: var(--accent);
}

.link-card-text {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.link-card-title {
  font-family: var(--font-serif);
  font-size: 17px;
  font-weight: 700;
  color: var(--text);
}

.link-card-sub {
  font-size: 11px;
  color: var(--text-dim);
  letter-spacing: 0.3px;
}

.link-card-arrow {
  color: var(--accent);
  font-size: 18px;
  flex-shrink: 0;
}

/* === FOOTER === */
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid var(--border);
}

.footer-copy {
  font-size: 10px;
  color: var(--text-dim);
  letter-spacing: 1px;
  text-transform: uppercase;
}

.footer-email {
  font-size: 11px;
  color: var(--accent);
  transition: opacity 0.15s;
}
.footer-email:hover { opacity: 0.75; }
```

- [ ] **Step 7: Append mobile responsive styles to styles.css**

```css
/* === MOBILE === */
@media (max-width: 560px) {
  :root {
    --page-pad: 20px;
  }

  .nav {
    flex-wrap: wrap;
    gap: 8px;
  }

  .hero {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 36px;
    gap: 20px;
  }

  .slider {
    text-align: left;
  }

  .headline {
    font-size: 26px;
  }

  .about-body {
    font-size: 18px;
  }

  .footer {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
}
```

- [ ] **Step 8: Verify in browser at desktop and mobile widths**

Open `index.html`. Check:
- Dark background, amber accents, Cormorant headings loaded
- Hero: photo + content side by side on desktop
- Resize to <560px: photo stacks above content, headline smaller, nav wraps gracefully
- Hover on link cards: border turns amber
- No layout overflow or broken text

- [ ] **Step 9: Commit**

```bash
git add styles.css
git commit -m "feat: add all styles — layout, hero, slider, cards, footer, responsive"
```

---

## Chunk 3: Slider interactivity + final wiring

### Task 4: Audience slider JavaScript

**Files:**
- Create: `script.js`

- [ ] **Step 1: Write script.js**

```javascript
const QUOTES = {
  founders: 'I design ecosystems where ambitious builders find momentum, capital, and each other.',
  leaders: 'I help communities move from random results to deliberate architecture.',
  collaborators: "If you're building something serious, let's find where our work connects.",
};

const quote = document.getElementById('slider-quote');
const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const audience = tab.dataset.audience;

    // Update active tab
    tabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');

    // Fade out, swap text, fade in
    quote.classList.add('fade');
    setTimeout(() => {
      quote.textContent = QUOTES[audience];
      quote.classList.remove('fade');
    }, 200);
  });
});
```

- [ ] **Step 2: Verify slider works in browser**

Open `index.html`. Click each of the three audience tabs:
- Active tab turns amber
- Quote fades out and updates to the correct text
- No console errors

Expected quotes:
- Founders & Builders → "I design ecosystems where ambitious builders find momentum, capital, and each other."
- Ecosystem Leaders → "I help communities move from random results to deliberate architecture."
- Collaborators → "If you're building something serious, let's find where our work connects."

- [ ] **Step 3: Commit**

```bash
git add script.js
git commit -m "feat: add audience slider interactivity"
```

---

### Task 5: Swap in real content

> **PREREQUISITE — stop and gather before starting this task:**
> - Profile photo file (save to `assets/profile.jpg`)
> - Neilda's Substack URL
> - Neilda's Notion Personal OS URL
>
> Do not begin this task until all three are available. The site should not be deployed with placeholder content.

**Files:**
- Modify: `index.html` — update placeholder URLs and add profile photo
- Add: `assets/profile.jpg` — profile photo file

- [ ] **Step 1: Confirm profile photo is in place**

The profile photo must be at `assets/profile.jpg` before continuing. Place it there by any means (copy from Downloads, drag-and-drop, etc.), then verify:

```bash
ls -lh assets/profile.jpg
```
Expected: file listed, size > 0. If the file is missing, stop and obtain it before continuing.

- [ ] **Step 2: Update Substack URL in index.html**

Find the comment `<!-- TODO Task 5: replace YOUR_SUBSTACK_URL with real URL -->` and update the `href` on the next line from `https://YOUR_SUBSTACK_URL` to the real Substack URL. Remove the TODO comment.

- [ ] **Step 3: Update Notion URL in index.html**

Find the comment `<!-- TODO Task 5: replace YOUR_NOTION_URL with real URL -->` and update the `href` on the next line from `https://YOUR_NOTION_URL` to the real Notion Personal OS URL. Remove the TODO comment.

- [ ] **Step 4: Verify all content in browser before committing**

Open `index.html`. Check:
- Profile photo renders correctly in the circular frame (not broken)
- Click Substack card → opens correct Substack in new tab
- Click Personal OS card → opens correct Notion page in new tab
- Click AGI Ventures Canada card → opens `https://www.agiventures.ca` in new tab
- Click "Say Hello ↗" → opens mail client with `neilda@agiventures.ca`
- Click footer email → same as above

Only proceed to Step 5 once all checks pass.

- [ ] **Step 5: Commit**

```bash
git add assets/profile.jpg index.html
git commit -m "feat: add profile photo and real URLs"
```

---

## Chunk 4: Deploy

### Task 6: Deploy to Vercel

**Files:**
- No new files — uses existing `vercel.json`

- [ ] **Step 1: Install Vercel CLI if not already installed**

```bash
npm install -g vercel
```

- [ ] **Step 2: Confirm working tree is clean before deploying**

```bash
git status
```
Expected: `nothing to commit, working tree clean`. If there are uncommitted changes, go back and commit them before deploying.

- [ ] **Step 3: Deploy to preview**

```bash
cd /Users/neilda/neilda-com
vercel
```

Follow prompts:
- Set up and deploy: `Y`
- Which scope: select your account
- Link to existing project: `N`
- Project name: `neilda-com`
- Directory: `./` (current)
- Override settings: `N`

Expected: Vercel outputs a preview URL like `https://neilda-com-xxxx.vercel.app`

- [ ] **Step 4: Verify preview URL in browser**

Open the preview URL. Check:
- Site loads correctly on the Vercel domain
- All fonts load (Cormorant Garamond)
- Slider works
- All links open correctly
- Mobile layout correct (use browser devtools or a phone)

- [ ] **Step 5: Add custom domain in Vercel dashboard**

1. Go to `vercel.com/dashboard` → your `neilda-com` project → Settings → Domains
2. Add `neilda.com` and `www.neilda.com`
3. Vercel will show DNS records to configure

- [ ] **Step 6: Configure DNS at your domain registrar**

Add the records Vercel provides. Typically:
- `A` record for `neilda.com` → Vercel IP
- `CNAME` record for `www.neilda.com` → `cname.vercel-dns.com`

DNS propagation typically takes a few minutes to a few hours, but can take up to 48 hours. Do not assume it is broken if it hasn't resolved within 10 minutes.

- [ ] **Step 7: Verify live at neilda.com**

Once DNS propagates, open `https://neilda.com`. Verify:
- HTTPS works (green lock)
- Site loads at root URL
- All content, fonts, and interactivity working

- [ ] **Step 8: Push to GitHub (optional but recommended)**

Commits were made across Tasks 1–5. This step pushes all of them to a remote for backup and Vercel auto-deploy.

Before running these commands, you need:
- A GitHub account
- A new empty repo created at github.com (e.g., named `neilda-com`)
- The HTTPS clone URL for that repo (shown on the GitHub repo page)

```bash
git remote add origin <paste-your-github-clone-url-here>
git push -u origin main
```

Expected: all commits pushed, GitHub shows the repo containing `index.html`, `styles.css`, `script.js`, `vercel.json`.

Once pushed, connect the GitHub repo to the Vercel project (Vercel dashboard → project → Settings → Git → Connect) to enable auto-deploy on future commits.

---

## Content Checklist (before going live)

- [ ] Profile photo added to `assets/profile.jpg`
- [ ] Substack URL updated in `index.html`
- [ ] Notion Personal OS URL updated in `index.html`
- [ ] About copy reviewed and approved
- [ ] Slider subheadlines reviewed and approved
- [ ] Site tested on mobile
- [ ] DNS configured and `neilda.com` resolving
