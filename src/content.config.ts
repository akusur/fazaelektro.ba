import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projekti = defineCollection({
	// Load Markdown and MDX files in the `src/content/projekti/` directory.
	loader: glob({ base: './src/content/projekti', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});


const savjeti = defineCollection({
	// Load Markdown and MDX files in the `src/content/savjeti/` directory.
	loader: glob({ base: './src/content/savjeti', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			imageUrl: z.string().url(),
			imageAlt: z.string(),
		}),
});

export const collections = { projekti, savjeti };
