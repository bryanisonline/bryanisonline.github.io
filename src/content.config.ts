import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.string(),
      technology: z.array(z.string()),
      shortDescription: z.string(),
      summary: z.string(),
      focus: z.string(),
      images: z.array(image()).min(1),
      order: z.number().int().nonnegative().default(999),
    }),
});

export const collections = { projects };
