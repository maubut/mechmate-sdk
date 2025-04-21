/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/common/filters/operators.ts)
 * Last updated: 2025-04-21T15:23:13.087Z
 * Update this file when API schema changes
 */

import { z } from 'zod';

export const FilterOperator = z.enum([
  'IS',
  'IS_NOT',
  'CONTAINS',
  'NOT_CONTAINS',
  'GREATER_THAN',
  'LESS_THAN',
  'BETWEEN',
  'IN',
  'NOT_IN',
  'BEFORE'
]);

export type FilterOperatorType = z.infer<typeof FilterOperator>;
