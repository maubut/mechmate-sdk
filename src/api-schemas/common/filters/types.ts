/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/common/filters/types.ts)
 * Last updated: 2025-04-21T15:23:13.088Z
 * Update this file when API schema changes
 */

import { z } from 'zod';

export const FilterFieldType = z.enum([
  'string',
  'number',
  'boolean',
  'date',
  'array'
]);

export type FieldType = z.infer<typeof FilterFieldType>;
