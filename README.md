# kanabar.dev

Personal website built with [Astro](https://astro.build). Live at [kanabar.dev](https://kanabar.dev).

## Project Structure

```text
/
├── public/
│   └── CNAME
├── src/
│   ├── constants.ts
│   └── pages/
│       └── index.astro
├── astro.config.mjs
└── package.json
```

## Commands

| Command        | Action                                      |
| :------------- | :------------------------------------------ |
| `bun install`  | Install dependencies                        |
| `bun dev`      | Start local dev server at `localhost:4321`  |
| `bun build`    | Build production site to `./dist/`          |
| `bun preview`  | Preview production build locally            |

## Deployment

Deployed to GitHub Pages via GitHub Actions on every push to `main`.
