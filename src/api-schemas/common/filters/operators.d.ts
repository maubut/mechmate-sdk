/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/common/filters/operators.d.ts)
 * Last updated: 2025-04-30T02:52:08.071Z
 * Update this file when API schema changes
 */

import { z } from 'zod';
export declare const FilterOperator: z.ZodEnum<["IS", "IS_NOT", "CONTAINS", "NOT_CONTAINS", "GREATER_THAN", "LESS_THAN", "BETWEEN", "IN", "NOT_IN", "BEFORE"]>;
export type FilterOperatorType = z.infer<typeof FilterOperator>;
