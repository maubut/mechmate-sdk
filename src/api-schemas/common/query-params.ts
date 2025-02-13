/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/common/query-params.ts)
 * Last updated: 2025-02-12T13:43:34.419Z
 * Update this file when API schema changes
 */

import { z } from 'zod';

export const QueryParamsSchema = z.object({
  page: z.coerce.number().int().positive().optional(),
  limit: z.coerce.number().int().positive().max(100).optional(),
  sort: z.string().optional(),
  order: z.enum(['asc', 'desc']).optional()
});

export type QueryParams = z.infer<typeof QueryParamsSchema>;
