/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/backend/mechmate-api/src/api-schemas/price.ts)
 * Last updated: 2025-07-13T21:06:36.632Z
 * Update this file when API schema changes
 */

import { z } from 'zod';
import { SchemaFromInterface } from './common/utils';
import { Price, Rate } from './common/ts-interfaces';

export const FieldPriceRateEnum = [
  'FLAT',
  'STANDARD'
] as const satisfies readonly Rate[];

export const RateTypeEnum = z.enum(['STANDARD']);

export const PriceBaseSchema = z.object({
  rateType: z.enum(FieldPriceRateEnum),
  valuePerUnit: z
    .string()
    .regex(/^\d+(\.\d+)?$/, 'Must be a valid decimal number')
}) satisfies SchemaFromInterface<Price>;

// Request schemas

// Response schemas

// Types
