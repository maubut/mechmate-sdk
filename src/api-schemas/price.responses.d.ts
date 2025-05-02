/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/price.responses.d.ts)
 * Last updated: 2025-04-30T02:52:08.088Z
 * Update this file when API schema changes
 */

import { z } from 'zod';
export declare const RateTypeEnum: z.ZodEnum<["STANDARD"]>;
export declare const PriceBaseSchema: z.ZodObject<{
    rateType: z.ZodDefault<z.ZodOptional<z.ZodEnum<["STANDARD"]>>>;
    valuePerUnit: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    rateType: "STANDARD";
    valuePerUnit: number;
}, {
    valuePerUnit: number;
    rateType?: "STANDARD" | undefined;
}>;
