/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/price.responses.ts)
 * Last updated: 2024-12-20T16:42:23.268Z
 * Update this file when API schema changes
 */

import { z } from 'zod';

export const RateTypeEnum = z.enum(['STANDARD']);

export const PriceBaseSchema = z.object({
  rateType: RateTypeEnum,
  valuePerUnit: RateTypeEnum
});

// Request schemas

// Response schemas

// Types