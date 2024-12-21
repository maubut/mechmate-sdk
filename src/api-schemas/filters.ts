/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/filters.ts)
 * Last updated: 2024-12-21T13:23:14.080Z
 * Update this file when API schema changes
 */

import { z } from 'zod';

export * from './common/filters/operators';
export * from './common/filters/types';
export * from './common/filters/base';

export const createFilterValidator = <T extends z.ZodType>(schema: T) => {
  return (filter: unknown): z.infer<T> => {
    return schema.parse(filter);
  };
};
