/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/common/filters/types.ts)
 * Last updated: 2024-12-21T01:18:17.933Z
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
