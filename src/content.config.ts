import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

/**
 * Quality Rating Guide (1-5 stars):
 *
 * 1 ⭐ - Stub: Minimal content, placeholder, or just a definition
 * 2 ⭐⭐ - Draft: AI-generated or rough draft, needs human review
 * 3 ⭐⭐⭐ - Adequate: Covers basics, factually checked, but lacks depth
 * 4 ⭐⭐⭐⭐ - Good: Well-researched, includes citations, balanced perspective
 * 5 ⭐⭐⭐⭐⭐ - Excellent: Comprehensive, expert-reviewed, authoritative source
 *
 * Most pages start at 2 (AI-generated drafts). Upgrade only after human review.
 */
export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        // Editorial metadata for PageStatus (see rating guide above)
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
