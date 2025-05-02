/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/filters.d.ts)
 * Last updated: 2025-04-30T02:52:08.076Z
 * Update this file when API schema changes
 */

import { z } from 'zod';
export * from './common/filters/operators';
export * from './common/filters/types';
export * from './common/filters/base';
export declare const createFilterValidator: <T extends z.ZodType>(schema: T) => (filter: unknown) => z.infer<T>;
