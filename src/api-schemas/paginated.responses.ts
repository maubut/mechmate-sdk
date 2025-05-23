/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/paginated.responses.ts)
 * Last updated: 2025-04-21T15:23:13.100Z
 * Update this file when API schema changes
 */

import { z } from 'zod';

export const PaginatedResponseSchema = <T extends z.ZodType>(schema: T) =>
  z.object({
    items: z.array(schema),
    total: z.number(),
    page: z.number(),
    limit: z.number(),
    totalPages: z.number()
  });

export type PaginatedResponse<T> = {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};
