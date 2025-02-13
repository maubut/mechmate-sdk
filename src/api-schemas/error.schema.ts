/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/error.schema.ts)
 * Last updated: 2025-02-13T14:08:27.458Z
 * Update this file when API schema changes
 */

import { z } from "zod"

export const ErrorSourceEnum = z.enum(['INTERNAL', 'CLIENT', 'NETWORK', 'UNKNOWN'])
export type ErrorSource = z.infer<typeof ErrorSourceEnum>;

export const ErrorTypeEnum = z.enum([
    'VALIDATION',
    'NOT_FOUND',
    'UNAUTHORIZED',
    'FORBIDDEN',
    'CONFLICT',
    'INTERNAL',
    'BAD_REQUEST',
    'API_ERROR',
    'NETWORK_ERROR',
    'DATABASE_ERROR',
    'RATE_LIMIT'
  ]);

 export type ErrorType = z.infer<typeof ErrorTypeEnum>;

export const ErrorStatusMap: Record<ErrorType, number> = {
    VALIDATION: 400,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    RATE_LIMIT: 429,
    INTERNAL: 500,
    DATABASE_ERROR: 500,
    API_ERROR: 500,
    NETWORK_ERROR: 503
  };

export const ValidationErrorFieldSchema = z.object({
    field: z.string(),
    message: z.string()
})

export const ErrorDetailsSchema = z.union([
    z.record(z.unknown()),
    z.array(ValidationErrorFieldSchema)
]);

export const BaseErrorSchema = z.object({
    message: z.string(),
    type: ErrorTypeEnum,
    source: ErrorSourceEnum,
    details: ErrorDetailsSchema.optional(),
    timestamp: z.string().datetime().optional(),
    correlationId: z.string().optional(),
    statusCode: z.number().optional()
})

export const ValidationErrorSchema = BaseErrorSchema.extend({
    type: z.literal('VALIDATION'),
    source: z.literal('CLIENT'),
    details: z.array(ValidationErrorFieldSchema)
});

export const InternalErrorSchema = BaseErrorSchema.extend({
    source: z.literal('INTERNAL')
});

export type BaseError = z.infer<typeof BaseErrorSchema>;
export type ValidationError = z.infer<typeof ValidationErrorSchema>;
export type InternalError = z.infer<typeof InternalErrorSchema>;
export type ErrorDetails = z.infer<typeof ErrorDetailsSchema>;