# ankit.md

A minimalist personal site — writing, projects, and small experiments.
Built with [Astro](https://astro.build) + one React island, hand-written CSS,
and a single accent colour.

## Writing a post

Create a Markdown (or MDX) file in `src/content/writing/`:

```md
---
title: My new post
date: 2026-06-01
description: A one-line hook. (optional)
draft: false
---

Your words here.
```

Save it. It appears on `/writing` and the home page. That's the whole workflow.

## Adding a project

Same idea, in `src/content/projects/`:

```md
---
title: My thing
date: 2026-06-01
summary: One line describing it.
status: live   # live | building | archived
url: https://example.com   # optional
---

What it is and why it exists.
```

## Commands

| Command           | Action                                   |
| :---------------- | :--------------------------------------- |
| `npm run dev`     | Start the dev server                     |
| `npm run build`   | Build the static site to `./dist/`       |
| `npm run preview` | Preview the production build locally     |

## How it's structured

```
src/
  content/
    writing/        ← Markdown posts
    projects/       ← Markdown project pages
  content.config.ts ← collection schemas
  layouts/Base.astro
  components/ThemeToggle.tsx  ← the one React island
  pages/            ← routes
  styles/global.css ← all the design lives here
```

Design notes: warm-paper light mode + warm-ink dark mode, a single clay accent
(`--accent`), a serif body for reading, and as few elements as possible.
