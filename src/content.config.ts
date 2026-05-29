import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Things I write — essays, notes, explorations.
const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Little things I build — experiments, projects, tools.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    url: z.string().url().optional(),
    status: z.enum(['live', 'building', 'archived']).default('building'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing, projects };
