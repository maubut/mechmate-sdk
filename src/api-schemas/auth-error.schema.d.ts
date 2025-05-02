/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/auth-error.schema.d.ts)
 * Last updated: 2025-04-30T02:52:08.065Z
 * Update this file when API schema changes
 */

import { z } from 'zod';
export declare const AuthErrorCodeEnum: z.ZodEnum<["AUTH_TOKEN_EXPIRED", "AUTH_USER_NOT_FOUND", "AUTH_INVALID_TOKEN", "AUTH_NO_TOKEN", "AUTH_INVALID_CREDENTIALS", "AUTH_SESSION_EXPIRED", "AUTH_INSUFFICIENT_PERMISSIONS", "AUTH_LOGOUT_FAILED"]>;
export type AuthErrorCode = z.infer<typeof AuthErrorCodeEnum>;
export declare const AuthErrorSchema: z.ZodObject<z.objectUtil.extendShape<{
    message: z.ZodString;
    type: z.ZodEnum<["VALIDATION", "NOT_FOUND", "UNAUTHORIZED", "FORBIDDEN", "CONFLICT", "INTERNAL", "BAD_REQUEST", "API_ERROR", "NETWORK_ERROR", "DATABASE_ERROR", "RATE_LIMIT"]>;
    source: z.ZodEnum<["INTERNAL", "CLIENT", "NETWORK", "UNKNOWN"]>;
    details: z.ZodOptional<z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodUnknown>, z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        message: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        message: string;
        field: string;
    }, {
        message: string;
        field: string;
    }>, "many">]>>;
    timestamp: z.ZodOptional<z.ZodString>;
    correlationId: z.ZodOptional<z.ZodString>;
    statusCode: z.ZodOptional<z.ZodNumber>;
}, {
    type: z.ZodLiteral<"UNAUTHORIZED">;
    source: z.ZodLiteral<"CLIENT">;
    code: z.ZodEnum<["AUTH_TOKEN_EXPIRED", "AUTH_USER_NOT_FOUND", "AUTH_INVALID_TOKEN", "AUTH_NO_TOKEN", "AUTH_INVALID_CREDENTIALS", "AUTH_SESSION_EXPIRED", "AUTH_INSUFFICIENT_PERMISSIONS", "AUTH_LOGOUT_FAILED"]>;
}>, "strip", z.ZodTypeAny, {
    code: "AUTH_TOKEN_EXPIRED" | "AUTH_USER_NOT_FOUND" | "AUTH_INVALID_TOKEN" | "AUTH_NO_TOKEN" | "AUTH_INVALID_CREDENTIALS" | "AUTH_SESSION_EXPIRED" | "AUTH_INSUFFICIENT_PERMISSIONS" | "AUTH_LOGOUT_FAILED";
    message: string;
    type: "UNAUTHORIZED";
    source: "CLIENT";
    statusCode?: number | undefined;
    timestamp?: string | undefined;
    details?: Record<string, unknown> | {
        message: string;
        field: string;
    }[] | undefined;
    correlationId?: string | undefined;
}, {
    code: "AUTH_TOKEN_EXPIRED" | "AUTH_USER_NOT_FOUND" | "AUTH_INVALID_TOKEN" | "AUTH_NO_TOKEN" | "AUTH_INVALID_CREDENTIALS" | "AUTH_SESSION_EXPIRED" | "AUTH_INSUFFICIENT_PERMISSIONS" | "AUTH_LOGOUT_FAILED";
    message: string;
    type: "UNAUTHORIZED";
    source: "CLIENT";
    statusCode?: number | undefined;
    timestamp?: string | undefined;
    details?: Record<string, unknown> | {
        message: string;
        field: string;
    }[] | undefined;
    correlationId?: string | undefined;
}>;
export type AuthError = z.infer<typeof AuthErrorSchema>;
