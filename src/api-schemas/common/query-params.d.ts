/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/common/query-params.d.ts)
 * Last updated: 2025-04-30T02:52:08.073Z
 * Update this file when API schema changes
 */

import { z } from 'zod';
export declare const QueryParamsSchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodNumber>;
    limit: z.ZodOptional<z.ZodNumber>;
    sort: z.ZodOptional<z.ZodString>;
    order: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
}, "strip", z.ZodTypeAny, {
    sort?: string | undefined;
    page?: number | undefined;
    limit?: number | undefined;
    order?: "asc" | "desc" | undefined;
}, {
    sort?: string | undefined;
    page?: number | undefined;
    limit?: number | undefined;
    order?: "asc" | "desc" | undefined;
}>;
export type QueryParams = z.infer<typeof QueryParamsSchema>;
