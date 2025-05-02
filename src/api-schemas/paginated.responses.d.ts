/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/paginated.responses.d.ts)
 * Last updated: 2025-04-30T02:52:08.088Z
 * Update this file when API schema changes
 */

import { z } from 'zod';
export declare const PaginatedResponseSchema: <T extends z.ZodType>(schema: T) => z.ZodObject<{
    items: z.ZodArray<T, "many">;
    total: z.ZodNumber;
    page: z.ZodNumber;
    limit: z.ZodNumber;
    totalPages: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    items: T["_output"][];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}, {
    items: T["_input"][];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}>;
export type PaginatedResponse<T> = {
    items: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
};
