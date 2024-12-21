/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/common/filters/base.ts)
 * Last updated: 2024-12-21T13:23:14.078Z
 * Update this file when API schema changes
 */

import { z } from 'zod';
import { FilterOperator } from './operators';

export const BaseFilterSchema = z.object({
  field: z.string(),
  operator: FilterOperator,
  value: z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.date(),
    z.array(z.union([z.string(), z.number(), z.date()]))
  ])
});

export type BaseFilter = z.infer<typeof BaseFilterSchema>;
