---
title: ankit.md
date: 2026-05-29
summary: This website. A minimalist, file-based home for writing and experiments.
status: live
url: https://ankit.md
---

The site you're reading right now. Built with [Astro](https://astro.build) and
a single React island for the theme toggle.

## Why

I wanted one place I fully own — no platform, no lock-in, no feed algorithm
deciding who sees what. Just text, served fast.

## How it's built

- **Astro** for static rendering — pages ship as HTML, JS only where needed.
- **Markdown / MDX** content collections for writing and projects.
- **One React component** (the light/dark toggle) to keep the door open for
  interactive experiments later.
- **One accent colour.** Kami ink blue, hand-written CSS, no framework.

## Adding to it

Writing is a file:

```md
---
title: My new post
date: 2026-06-01
description: A one-line hook.
---

Body goes here.
```

Drop it in `src/content/writing/`, push, done.
