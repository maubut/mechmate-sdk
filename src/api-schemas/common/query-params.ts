/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/common/query-params.ts)
 * Last updated: 2024-12-21T15:26:16.289Z
 * Update this file when API schema changes
 */

import { z } from 'zod';

export const QueryParamsSchema = z.object({
  page: z.coerce.number().int().positive().optional().default(1),
  limit: z.coerce.number().int().positive().max(100).optional().default(10),
  sort: z.string().optional(),
  order: z.enum(['asc', 'desc']).optional().default('asc')
});

export type QueryParams = z.infer<typeof QueryParamsSchema>;
