/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/common/filters/operators.ts)
 * Last updated: 2024-12-21T01:18:17.932Z
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
  'NOT_IN'
]);

export type FilterOperatorType = z.infer<typeof FilterOperator>;
