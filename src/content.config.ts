import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        // Editorial metadata for PageStatus
        quality: z.number().min(1).max(5).optional(),
        llmSummary: z.string().optional(),
        lastEdited: z.string().optional(),
        todo: z.string().optional(),
        // Existing custom fields
        maturity: z.string().optional(),
      }),
    }),
  }),
};
