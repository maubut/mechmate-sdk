/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/price.responses.ts)
 * Last updated: 2025-04-21T15:23:13.101Z
 * Update this file when API schema changes
 */

import { z } from 'zod';

export const RateTypeEnum = z.enum(['STANDARD']);

export const PriceBaseSchema = z.object({
  rateType: RateTypeEnum.optional().default('STANDARD'),
  valuePerUnit: z.number()
});

// Request schemas

// Response schemas

// Types
