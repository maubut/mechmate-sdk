/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/backend/mechmate-api/src/api-schemas/common/filters/operators.ts)
 * Last updated: 2025-05-05T19:38:30.931Z
 * Update this file when API schema changes
 */

import { z } from 'zod';

export const FilterOperator = z.enum([
  'IS',
  'IS_NOT',
  'EQUALS',
  'NOT_EQUALS',
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
