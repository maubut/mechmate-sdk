/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/common/filters/base.d.ts)
 * Last updated: 2025-04-30T02:52:08.070Z
 * Update this file when API schema changes
 */

import { z } from 'zod';
export declare const BaseFilterSchema: z.ZodObject<{
    field: z.ZodString;
    operator: z.ZodEnum<["IS", "IS_NOT", "CONTAINS", "NOT_CONTAINS", "GREATER_THAN", "LESS_THAN", "BETWEEN", "IN", "NOT_IN", "BEFORE"]>;
    value: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodDate, z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodDate]>, "many">]>;
}, "strip", z.ZodTypeAny, {
    value: string | number | boolean | Date | (string | number | Date)[];
    field: string;
    operator: "IS" | "IS_NOT" | "CONTAINS" | "NOT_CONTAINS" | "GREATER_THAN" | "LESS_THAN" | "BETWEEN" | "IN" | "NOT_IN" | "BEFORE";
}, {
    value: string | number | boolean | Date | (string | number | Date)[];
    field: string;
    operator: "IS" | "IS_NOT" | "CONTAINS" | "NOT_CONTAINS" | "GREATER_THAN" | "LESS_THAN" | "BETWEEN" | "IN" | "NOT_IN" | "BEFORE";
}>;
export type BaseFilter = z.infer<typeof BaseFilterSchema>;
