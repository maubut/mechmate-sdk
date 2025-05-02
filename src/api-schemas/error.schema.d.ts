/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/error.schema.d.ts)
 * Last updated: 2025-04-30T02:52:08.076Z
 * Update this file when API schema changes
 */

import { z } from "zod";
export declare const ErrorSourceEnum: z.ZodEnum<["INTERNAL", "CLIENT", "NETWORK", "UNKNOWN"]>;
export type ErrorSource = z.infer<typeof ErrorSourceEnum>;
export declare const ErrorTypeEnum: z.ZodEnum<["VALIDATION", "NOT_FOUND", "UNAUTHORIZED", "FORBIDDEN", "CONFLICT", "INTERNAL", "BAD_REQUEST", "API_ERROR", "NETWORK_ERROR", "DATABASE_ERROR", "RATE_LIMIT"]>;
export type ErrorType = z.infer<typeof ErrorTypeEnum>;
export declare const ErrorStatusMap: Record<ErrorType, number>;
export declare const ValidationErrorFieldSchema: z.ZodObject<{
    field: z.ZodString;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    field: string;
}, {
    message: string;
    field: string;
}>;
export declare const ErrorDetailsSchema: z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodUnknown>, z.ZodArray<z.ZodObject<{
    field: z.ZodString;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    field: string;
}, {
    message: string;
    field: string;
}>, "many">]>;
export declare const BaseErrorSchema: z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    message: string;
    type: "INTERNAL" | "VALIDATION" | "NOT_FOUND" | "UNAUTHORIZED" | "FORBIDDEN" | "CONFLICT" | "BAD_REQUEST" | "API_ERROR" | "NETWORK_ERROR" | "DATABASE_ERROR" | "RATE_LIMIT";
    source: "CLIENT" | "INTERNAL" | "NETWORK" | "UNKNOWN";
    statusCode?: number | undefined;
    timestamp?: string | undefined;
    details?: Record<string, unknown> | {
        message: string;
        field: string;
    }[] | undefined;
    correlationId?: string | undefined;
}, {
    message: string;
    type: "INTERNAL" | "VALIDATION" | "NOT_FOUND" | "UNAUTHORIZED" | "FORBIDDEN" | "CONFLICT" | "BAD_REQUEST" | "API_ERROR" | "NETWORK_ERROR" | "DATABASE_ERROR" | "RATE_LIMIT";
    source: "CLIENT" | "INTERNAL" | "NETWORK" | "UNKNOWN";
    statusCode?: number | undefined;
    timestamp?: string | undefined;
    details?: Record<string, unknown> | {
        message: string;
        field: string;
    }[] | undefined;
    correlationId?: string | undefined;
}>;
export declare const ValidationErrorSchema: z.ZodObject<z.objectUtil.extendShape<{
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
    type: z.ZodLiteral<"VALIDATION">;
    source: z.ZodLiteral<"CLIENT">;
    details: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        message: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        message: string;
        field: string;
    }, {
        message: string;
        field: string;
    }>, "many">;
}>, "strip", z.ZodTypeAny, {
    message: string;
    type: "VALIDATION";
    source: "CLIENT";
    details: {
        message: string;
        field: string;
    }[];
    statusCode?: number | undefined;
    timestamp?: string | undefined;
    correlationId?: string | undefined;
}, {
    message: string;
    type: "VALIDATION";
    source: "CLIENT";
    details: {
        message: string;
        field: string;
    }[];
    statusCode?: number | undefined;
    timestamp?: string | undefined;
    correlationId?: string | undefined;
}>;
export declare const InternalErrorSchema: z.ZodObject<z.objectUtil.extendShape<{
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
    source: z.ZodLiteral<"INTERNAL">;
}>, "strip", z.ZodTypeAny, {
    message: string;
    type: "INTERNAL" | "VALIDATION" | "NOT_FOUND" | "UNAUTHORIZED" | "FORBIDDEN" | "CONFLICT" | "BAD_REQUEST" | "API_ERROR" | "NETWORK_ERROR" | "DATABASE_ERROR" | "RATE_LIMIT";
    source: "INTERNAL";
    statusCode?: number | undefined;
    timestamp?: string | undefined;
    details?: Record<string, unknown> | {
        message: string;
        field: string;
    }[] | undefined;
    correlationId?: string | undefined;
}, {
    message: string;
    type: "INTERNAL" | "VALIDATION" | "NOT_FOUND" | "UNAUTHORIZED" | "FORBIDDEN" | "CONFLICT" | "BAD_REQUEST" | "API_ERROR" | "NETWORK_ERROR" | "DATABASE_ERROR" | "RATE_LIMIT";
    source: "INTERNAL";
    statusCode?: number | undefined;
    timestamp?: string | undefined;
    details?: Record<string, unknown> | {
        message: string;
        field: string;
    }[] | undefined;
    correlationId?: string | undefined;
}>;
export type BaseError = z.infer<typeof BaseErrorSchema>;
export type ValidationError = z.infer<typeof ValidationErrorSchema>;
export type InternalError = z.infer<typeof InternalErrorSchema>;
export type ErrorDetails = z.infer<typeof ErrorDetailsSchema>;
