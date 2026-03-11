# ASV-WEB — Claude Code Instructions

## Project Overview
Marketing/landing page for **Agent Secrets Vault (ASV)** — a local, MCP-native credential broker for AI agents. Target audience: AI developers using Claude Code, Cursor, LangChain, etc.

Deployment targets: GitHub Pages (current), then Vercel + custom domain.

---

## Tech Stack

This codebase is being rebuilt from vanilla HTML/CSS/JS into a proper React app.

| Layer | Tool |
|---|---|
| Framework | React (Vite) |
| Styling | Tailwind CSS v4 |
| Primitives | Radix UI |
| Animated components | Aceternity UI |
| Motion / animations | Motion One (`motion`) |
| Language | TypeScript |
| Package manager | npm |

**No** UI kit presets (no shadcn default theme, no Chakra, no MUI). Build custom.

---

## Design Philosophy

The current `index.html` is AI slop — generic dark theme, generic card grids, generic blue buttons. The rebuild must not look like it came from Lovable, v0, or any AI scaffold.

### What to avoid
- Generic "feature card" grids with icons + title + description
- Default blue (`#3b82f6`) as the only accent
- Generic gradient text on every heading
- Oversized padding with nothing in it
- Animations that feel like a template (floating cards, generic fade-ins)

### What to aim for
- Opinionated, intentional design with a clear visual voice
- Use whitespace with *purpose*, not to pad empty sections
- Typography-first: hierarchy through weight, size, and spacing — not decorations
- Subtle motion that reinforces meaning (scroll-linked, state-driven) via Motion One
- Radix UI for all interactive primitives (dialogs, tooltips, dropdowns, etc.)
- Aceternity UI for high-quality animated hero/feature components — use sparingly, not everywhere

---

## Code Conventions

- **Components**: PascalCase, one per file, colocated with their styles if any
- **File structure**: `src/components/`, `src/sections/`, `src/lib/`, `src/assets/`
- **No inline styles** — Tailwind classes only; use `cn()` (clsx + tailwind-merge) for conditionals
- **No CSS-in-JS** — no styled-components, no emotion
- **Animations**: prefer Motion One (`animate`, `scroll`, `inView`) over CSS keyframes for interactive motion; use CSS transitions for simple hover/focus states
- **Radix**: always use the unstyled Radix primitives and apply Tailwind on top — never use pre-styled wrappers
- Keep components small and composable; avoid "god components" that do everything

---

## Content (do not change without asking)

### Brand
- Product name: **Agent Secrets Vault** (abbrev: ASV)
- Company name: **Aegis**
- Tagline: "Your AI agent is leaking your API keys."

### Key sections (in order)
1. Nav
2. Hero — headline, subhead, install command, CTA
3. The Problem — credential exposure patterns
4. How It Works — 3-step flow
5. Features — 6 feature cards
6. Get Started — install steps with code blocks
7. Pricing — Free / Pro / Team
8. Waitlist — email capture (Mailchimp TBD)
9. Footer

### Pricing
- Free: $0/mo — up to 3 services, 7-day audit log
- Pro: $15/mo → Early Access $10.50/mo (30% off, locked)
- Team: $49/seat/mo — Coming Soon

### Install command
```
npm install -g agent-secrets-vault
```

### Mailchimp form
Action URL is a placeholder (`YOUR_MAILCHIMP_FORM_ACTION_URL`) — do not remove the placeholder, just leave it.

---

## GitHub Pages Compatibility

Until moved to Vercel, the site must work as a static export. Use Vite's `base` config if deploying to a subpath.

- Repo: `Agent-secrets-vault` GitHub account
- Static export: `npm run build` → `dist/` → deploy

---

## What NOT to do

- Do not auto-commit or push without being asked
- Do not install packages without explaining what they're for
- Do not add placeholder lorem ipsum content — use real copy from the existing `index.html`
- Do not add features not discussed (no dark mode toggle, no i18n, no analytics snippets)
- Do not use AI-generated SVG icon dumps — use Radix Icons or Lucide only
