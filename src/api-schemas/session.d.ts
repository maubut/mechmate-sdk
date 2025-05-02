/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/session.d.ts)
 * Last updated: 2025-04-30T02:52:08.090Z
 * Update this file when API schema changes
 */

import { z } from 'zod';
export declare const SessionResponseSchema: z.ZodObject<{
    user: z.ZodObject<Omit<{
        permissionFlags: z.ZodEnum<["GUEST", "EMPLOYEE", "ADMINISTRATOR", "FULL_ADMIN", "CLIENT", "USER"]>;
        id: z.ZodNumber;
        uuid: z.ZodString;
        email: z.ZodNullable<z.ZodString>;
        username: z.ZodString;
        password: z.ZodNullable<z.ZodType<Buffer<ArrayBuffer>, z.ZodTypeDef, Buffer<ArrayBuffer>>>;
        profileUrl: z.ZodNullable<z.ZodString>;
        fullname: z.ZodNullable<z.ZodString>;
        preferences: z.ZodNullable<z.ZodType<import("@prisma/client/runtime/library").JsonValue, z.ZodTypeDef, import("@prisma/client/runtime/library").JsonValue>>;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
        deletedAt: z.ZodNullable<z.ZodDate>;
        verified: z.ZodBoolean;
        accountId: z.ZodNumber;
    }, "password" | "id" | "createdAt" | "updatedAt" | "deletedAt" | "accountId">, "strip", z.ZodTypeAny, {
        fullname: string | null;
        email: string | null;
        username: string;
        preferences: import("@prisma/client/runtime/library").JsonValue;
        permissionFlags: "GUEST" | "EMPLOYEE" | "ADMINISTRATOR" | "FULL_ADMIN" | "CLIENT" | "USER";
        uuid: string;
        profileUrl: string | null;
        verified: boolean;
    }, {
        fullname: string | null;
        email: string | null;
        username: string;
        preferences: import("@prisma/client/runtime/library").JsonValue;
        permissionFlags: "GUEST" | "EMPLOYEE" | "ADMINISTRATOR" | "FULL_ADMIN" | "CLIENT" | "USER";
        uuid: string;
        profileUrl: string | null;
        verified: boolean;
    }>;
    account: z.ZodObject<z.objectUtil.extendShape<{
        preferences: z.ZodObject<{
            invoiceStartNumber: z.ZodNumber;
            worksheetStartNumber: z.ZodNumber;
            language: z.ZodString;
            hourlyRates: z.ZodOptional<z.ZodObject<{
                rateType: z.ZodDefault<z.ZodOptional<z.ZodEnum<["STANDARD"]>>>;
                valuePerUnit: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                rateType: "STANDARD";
                valuePerUnit: number;
            }, {
                valuePerUnit: number;
                rateType?: "STANDARD" | undefined;
            }>>;
            currency: z.ZodString;
            dateTime: z.ZodObject<{
                dateFormat: z.ZodString;
                timeFormat: z.ZodString;
                timezone: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                dateFormat: string;
                timeFormat: string;
                timezone: string;
            }, {
                dateFormat: string;
                timeFormat: string;
                timezone: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            invoiceStartNumber: number;
            worksheetStartNumber: number;
            language: string;
            currency: string;
            dateTime: {
                dateFormat: string;
                timeFormat: string;
                timezone: string;
            };
            hourlyRates?: {
                rateType: "STANDARD";
                valuePerUnit: number;
            } | undefined;
        }, {
            invoiceStartNumber: number;
            worksheetStartNumber: number;
            language: string;
            currency: string;
            dateTime: {
                dateFormat: string;
                timeFormat: string;
                timezone: string;
            };
            hourlyRates?: {
                valuePerUnit: number;
                rateType?: "STANDARD" | undefined;
            } | undefined;
        }>;
        package: z.ZodEffects<z.ZodObject<{
            name: z.ZodString;
            startedAt: z.ZodOptional<z.ZodUnion<[z.ZodDate, z.ZodString]>>;
            expireAt: z.ZodOptional<z.ZodUnion<[z.ZodDate, z.ZodString]>>;
            isTrial: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            startedAt?: string | Date | undefined;
            expireAt?: string | Date | undefined;
            isTrial?: boolean | null | undefined;
        }, {
            name: string;
            startedAt?: string | Date | undefined;
            expireAt?: string | Date | undefined;
            isTrial?: boolean | null | undefined;
        }>, {
            name: string;
            startedAt?: string | Date | undefined;
            expireAt?: string | Date | undefined;
            isTrial?: boolean | null | undefined;
        }, {
            name: string;
            startedAt?: string | Date | undefined;
            expireAt?: string | Date | undefined;
            isTrial?: boolean | null | undefined;
        }>;
    }, {}>, "strip", z.ZodTypeAny, {
        preferences: {
            invoiceStartNumber: number;
            worksheetStartNumber: number;
            language: string;
            currency: string;
            dateTime: {
                dateFormat: string;
                timeFormat: string;
                timezone: string;
            };
            hourlyRates?: {
                rateType: "STANDARD";
                valuePerUnit: number;
            } | undefined;
        };
        package: {
            name: string;
            startedAt?: string | Date | undefined;
            expireAt?: string | Date | undefined;
            isTrial?: boolean | null | undefined;
        };
    }, {
        preferences: {
            invoiceStartNumber: number;
            worksheetStartNumber: number;
            language: string;
            currency: string;
            dateTime: {
                dateFormat: string;
                timeFormat: string;
                timezone: string;
            };
            hourlyRates?: {
                valuePerUnit: number;
                rateType?: "STANDARD" | undefined;
            } | undefined;
        };
        package: {
            name: string;
            startedAt?: string | Date | undefined;
            expireAt?: string | Date | undefined;
            isTrial?: boolean | null | undefined;
        };
    }>;
    accessToken: z.ZodString;
    refreshToken: z.ZodString;
}, "strip", z.ZodTypeAny, {
    user: {
        fullname: string | null;
        email: string | null;
        username: string;
        preferences: import("@prisma/client/runtime/library").JsonValue;
        permissionFlags: "GUEST" | "EMPLOYEE" | "ADMINISTRATOR" | "FULL_ADMIN" | "CLIENT" | "USER";
        uuid: string;
        profileUrl: string | null;
        verified: boolean;
    };
    account: {
        preferences: {
            invoiceStartNumber: number;
            worksheetStartNumber: number;
            language: string;
            currency: string;
            dateTime: {
                dateFormat: string;
                timeFormat: string;
                timezone: string;
            };
            hourlyRates?: {
                rateType: "STANDARD";
                valuePerUnit: number;
            } | undefined;
        };
        package: {
            name: string;
            startedAt?: string | Date | undefined;
            expireAt?: string | Date | undefined;
            isTrial?: boolean | null | undefined;
        };
    };
    accessToken: string;
    refreshToken: string;
}, {
    user: {
        fullname: string | null;
        email: string | null;
        username: string;
        preferences: import("@prisma/client/runtime/library").JsonValue;
        permissionFlags: "GUEST" | "EMPLOYEE" | "ADMINISTRATOR" | "FULL_ADMIN" | "CLIENT" | "USER";
        uuid: string;
        profileUrl: string | null;
        verified: boolean;
    };
    account: {
        preferences: {
            invoiceStartNumber: number;
            worksheetStartNumber: number;
            language: string;
            currency: string;
            dateTime: {
                dateFormat: string;
                timeFormat: string;
                timezone: string;
            };
            hourlyRates?: {
                valuePerUnit: number;
                rateType?: "STANDARD" | undefined;
            } | undefined;
        };
        package: {
            name: string;
            startedAt?: string | Date | undefined;
            expireAt?: string | Date | undefined;
            isTrial?: boolean | null | undefined;
        };
    };
    accessToken: string;
    refreshToken: string;
}>;
export type SessionResponse = z.infer<typeof SessionResponseSchema>;
export declare const CreateSessionSchema: z.ZodEffects<z.ZodObject<{
    password: z.ZodString;
    username: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    email: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
}, "strip", z.ZodTypeAny, {
    password: string;
    email?: string | undefined;
    username?: string | undefined;
}, {
    password: string;
    email?: string | undefined;
    username?: string | undefined;
}>, {
    password: string;
    email?: string | undefined;
    username?: string | undefined;
}, {
    password: string;
    email?: string | undefined;
    username?: string | undefined;
}>;
export type CreateSessionRequest = z.infer<typeof CreateSessionSchema>;
