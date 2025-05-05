/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/backend/mechmate-api/src/api-schemas/common/utils.ts)
 * Last updated: 2025-05-05T19:38:30.939Z
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
