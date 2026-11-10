# kanabar.dev

Personal website built with [Astro](https://astro.build). Live at [kanabar.dev](https://kanabar.dev).

## Project Structure

```text
/
├── public/
│   ├── CNAME
│   └── favicon.svg
├── src/
│   ├── constants.ts          # links + WRITING_ENABLED flag
│   ├── content.config.ts     # writing collection schema
│   ├── content/writing/      # blog posts (markdown)
│   ├── layouts/Base.astro    # shared head + styles
│   └── pages/
│       ├── index.astro
│       ├── 404.astro
│       └── writing/
├── astro.config.mjs
└── package.json
```

## Writing

Add a markdown file to `src/content/writing/`. The filename becomes the URL (`my-post.md` → `/writing/my-post`).

```md
---
title: My post
date: 2026-11-09
draft: true # optional, hides the post
---

Markdown here…
```

The writing section is always visible in `bun dev`. It ships to production only when `PUBLISH_WRITING` is `true` in `src/constants.ts`.

## Commands

Requires Node 24 (`nvm use`).

| Command        | Action                                      |
| :------------- | :------------------------------------------ |
| `bun install`  | Install dependencies                        |
| `bun dev`      | Start local dev server at `localhost:4321`  |
| `bun build`    | Build production site to `./dist/`          |
| `bun preview`  | Preview production build locally            |

## Deployment

Deployed to GitHub Pages via GitHub Actions on every push to `main`.
