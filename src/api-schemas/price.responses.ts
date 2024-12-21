/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/price.responses.ts)
 * Last updated: 2024-12-21T01:18:17.935Z
 * Update this file when API schema changes
 */

import { z } from 'zod';

export const RateTypeEnum = z.enum(['STANDARD']);

export const PriceBaseSchema = z.object({
  rateType: RateTypeEnum,
  valuePerUnit: z.number()
});

// Request schemas

// Response schemas

// Types
