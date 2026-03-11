# ASV-WEB

Marketing landing page for **Agent Secrets Vault** by [Aegis](https://github.com/Agent-secrets-vault).

Live: https://agent-secrets-vault.github.io/agent-secrets-vault/

---

## Stack

- React + Vite + TypeScript
- Tailwind CSS v4
- Radix UI (Tooltip, Dialog, NavigationMenu, Tabs)
- Aceternity UI (BackgroundBeams, Spotlight)
- Motion One for animations
- Lucide React for icons

## Dev

```bash
npm install
npm run dev        # http://localhost:5173/agent-secrets-vault/
```

## Build

```bash
npm run build      # outputs to dist/
```

## Deploy

Push to `main` — the GitHub Actions workflow at `.github/workflows/deploy.yml` builds and deploys to GitHub Pages automatically.

To deploy to Vercel instead: change `base` in `vite.config.ts` to `'/'` and connect the repo in Vercel.
