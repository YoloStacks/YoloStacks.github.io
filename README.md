# YoloStacks

> **"Serious Engineering. Questionable Decisions."**  
> *A small corner of the internet for developers who write code, break things, occasionally blame their tools, and eventually have to read the diff anyway.*

---

## ⚡ Overview & Brand Hierarchy

**YoloStacks** is a small corner of the internet for developer culture, software satire, and painful engineering lessons learned the hard way.

- **Brand:** YoloStacks
- **Motto:** *"Serious Engineering. Questionable Decisions."*
- **First Project (#01):** [**Anger-Driven Development (AAD)**](#-first-project-aad--anger-driven-development)
  - Tagline: *"First you vibe. Then you rage. Eventually, you read the diff."*
- **Tone:** Technically literate, irreverent, funny, self-aware, and credible to actual software engineers.
- **Language:** English only.

---

## 🔥 First Project: AAD — Anger-Driven Development

**Anger-Driven Development (AAD)** is a satirical software engineering methodology for developers who trusted an LLM and lived to regret it. It parodies traditional software engineering frameworks (TDD, DDD, BDD, CI/CD) with a dark, terminal-inspired manifesto.

### The AAD Canon Preserved:
1. **The Methodology Taxonomy:** TDD vs. DDD vs. BDD vs. AAD.
2. **The Central Operational Loop:** 7-step recursive failure cycle from innocent prompt to diff enlightenment.
3. **The Five Stages of the Rage Cycle:** Denial, Anger, Bargaining, Depression, Acceptance (with telemetry & metric counters).
4. **The 12 Canonical Laws:** Including The Law of Hallucinated Competence, The Law of Terminal Humility, and The Law of the Hall of Mirrors.
5. **The Rage Dictionary:** 5 severity tiers (27 authentic developer phrases) with accessible one-click copy triggers and clipboard fallback.
6. **The AAD Maturity Model:** 5 progressive realization phases from Level 0 (Blind Trust) to Level 4 (Diff Enlightenment).
7. **Telemetry & Metrics Dashboard:** Observability console with animated diagnostic gauges and entertainment disclaimers.
8. **The AAD Covenant Pledge:** Formal oath of verification with a one-click copy trigger.
9. **Closing Manifesto Statement:** The fundamental truth that clarity begins at `git diff`.

---

## 📁 Architecture & Tech Stack

Migrated to **React + Vite + TypeScript** while maintaining static compatibility for GitHub Pages without server-side routing dependencies:

```
.
├── index.html                  # Vite entry point with anti-FOUC theme hydration
├── package.json                # React 18, Vite 6, TypeScript 5
├── tsconfig.json               # Modern TS bundler config
├── vite.config.ts              # Vite config with base: '/' for root domain (yolostacks.github.io)
├── src/
│   ├── app/
│   │   ├── ThemeContext.tsx    # System / Light / Dark theme engine & OS synchronization
│   │   ├── useHashRoute.ts     # Lightweight client hash router with anchor scrolling
│   │   └── announce.ts         # Screen reader ARIA live dispatch utility
│   ├── components/
│   │   ├── Header.tsx          # Brand breadcrumbs, responsive navigation, theme toggle
│   │   ├── Footer.tsx          # YoloStacks parent brand shell & satire disclaimer
│   │   └── Accessibility.tsx   # SkipToContent link and ARIA live regions
│   ├── content/
│   │   └── aadContent.ts       # Typed datasets for all laws, stages, dictionary, metrics
│   ├── pages/
│   │   ├── HomePage.tsx        # YoloStacks brand hero, featured AAD card, principles, lab
│   │   └── AADPage.tsx         # Complete Anger-Driven Development specification
│   ├── styles/
│   │   └── globals.css         # Dark terminal manifesto + clean light technical design system
│   ├── utils/
│   │   └── clipboard.ts        # Resilient clipboard copy with textarea fallback
│   ├── App.tsx                 # Root application shell
│   └── main.tsx                # Client DOM mount
└── README.md
```

---

## 🚀 Local Development & Build

### Install Dependencies

```bash
npm install
```

### Run Dev Server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The production assets will be generated in `dist/`. All asset URLs use root-relative paths (`/assets/...`), optimized for the root user domain `https://yolostacks.github.io/`.

### Preview Production Build

```bash
npm run preview
```

Visit [http://localhost:4173](http://localhost:4173) in your browser.

---

## 🌐 GitHub Pages Deployment Guide

### Deploying via GitHub Actions (Pre-configured)

The workflow file `.github/workflows/deploy.yml` is already included:

```yaml
name: Deploy YoloStacks to GitHub Pages

on:
  push:
    branches: [ "main" ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build site
        run: npm run build

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist/

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. On GitHub, navigate to **Settings** > **Pages** > **Source** and select **GitHub Actions**.
3. Push to `main` to trigger the build and deployment.

---

## 🛡️ Accessibility & Design Standards

- **Theme Engine:** Default follows system preference (`prefers-color-scheme`). Users can manually cycle between **System**, **Light**, and **Dark** modes with instant local persistence and anti-FOUC pre-hydration. URL query parameters (`?theme=light` or `?theme=dark`) are also supported for direct previews.
- **Client Routing on GitHub Pages:** Hash-based routing (`#/` for YoloStacks, `#/aad` for AAD, and `#/aad#laws` for anchor jumps) avoids 404 rewrite issues on direct URL navigation and hard refreshes.
- **WCAG 2.1 AA Compliance:** Color contrast ratios verified across all light and dark palettes; `:focus-visible` outlines; semantic landmarks; and screen reader announcements on all interactive copy buttons.
- **Zero Hallucinated External Dependencies:** Zero third-party UI libraries, zero heavyweight state containers, and zero external tracking scripts.

---

## ⚖️ Satire Disclaimer

YoloStacks and Anger-Driven Development (AAD) are works of engineering satire and developer humor. They are not formally recognized engineering standards or certified software methodologies. No matter how polite an LLM sounds, always inspect the diff, write deterministic tests, and verify changes before deploying to production.
