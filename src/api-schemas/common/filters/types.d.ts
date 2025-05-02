/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/common/filters/types.d.ts)
 * Last updated: 2025-04-30T02:52:08.072Z
 * Update this file when API schema changes
 */

import { z } from 'zod';
export declare const FilterFieldType: z.ZodEnum<["string", "number", "boolean", "date", "array"]>;
export type FieldType = z.infer<typeof FilterFieldType>;
