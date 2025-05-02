/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/backend/mechmate-api/src/api-schemas/common/utils.ts)
 * Last updated: 2025-05-02T21:35:15.210Z
 * Update this file when API schema changes
 */

import { z, ZodObject, ZodType } from 'zod';

export type SchemaFromInterface<T> = ZodObject<{
  [K in keyof Partial<T>]: K extends keyof T ? ZodType<T[K]> : never;
}>;

export function createSchemaFromInterface<T>(
  schemaDefinition: Record<string, z.ZodType>
): z.ZodObject<z.ZodRawShape, 'strip', z.ZodTypeAny, T> {
  return z.object(schemaDefinition) as z.ZodObject<
    z.ZodRawShape,
    'strip',
    z.ZodTypeAny,
    T
  >;
}

export function createFlexibleDateSchema() {
  return z.preprocess((val) => {
    if (val instanceof Date) return val;
    if (typeof val === 'string') return new Date(val);
    return val;
  }, z.date());
}
