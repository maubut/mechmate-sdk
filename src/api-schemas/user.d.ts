/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/user.d.ts)
 * Last updated: 2025-04-30T02:52:08.091Z
 * Update this file when API schema changes
 */

import { z } from 'zod';
export declare const PermissionFlagValues: {
    readonly GUEST: "GUEST";
    readonly EMPLOYEE: "EMPLOYEE";
    readonly ADMINISTRATOR: "ADMINISTRATOR";
    readonly FULL_ADMIN: "FULL_ADMIN";
    readonly CLIENT: "CLIENT";
    readonly USER: "USER";
};
export type PermissionFlags = (typeof PermissionFlagValues)[keyof typeof PermissionFlagValues];
export declare const passwordSchema: z.ZodString;
export declare const usernameSchema: z.ZodEffects<z.ZodString, string, string>;
export declare const emailSchema: z.ZodEffects<z.ZodString, string, string>;
export declare const UserRequestSchema: z.ZodObject<Pick<{
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
}, "uuid">, "strip", z.ZodTypeAny, {
    uuid: string;
}, {
    uuid: string;
}>;
export declare const UserResponseSchema: z.ZodObject<Omit<{
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
export declare const CreateUserSchema: z.ZodObject<{
    fullname: z.ZodString;
    username: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    permissionFlags: z.ZodOptional<z.ZodNativeEnum<{
        readonly GUEST: "GUEST";
        readonly EMPLOYEE: "EMPLOYEE";
        readonly ADMINISTRATOR: "ADMINISTRATOR";
        readonly FULL_ADMIN: "FULL_ADMIN";
        readonly CLIENT: "CLIENT";
        readonly USER: "USER";
    }>>;
    password: z.ZodString;
    email: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
}, "strip", z.ZodTypeAny, {
    fullname: string;
    password: string;
    email?: string | undefined;
    username?: string | undefined;
    permissionFlags?: "GUEST" | "EMPLOYEE" | "ADMINISTRATOR" | "FULL_ADMIN" | "CLIENT" | "USER" | undefined;
}, {
    fullname: string;
    password: string;
    email?: string | undefined;
    username?: string | undefined;
    permissionFlags?: "GUEST" | "EMPLOYEE" | "ADMINISTRATOR" | "FULL_ADMIN" | "CLIENT" | "USER" | undefined;
}>;
export declare const InviteUserSchema: z.ZodObject<{
    fullname: z.ZodString;
    username: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    PermissionFlags: z.ZodOptional<z.ZodNativeEnum<{
        readonly GUEST: "GUEST";
        readonly EMPLOYEE: "EMPLOYEE";
        readonly ADMINISTRATOR: "ADMINISTRATOR";
        readonly FULL_ADMIN: "FULL_ADMIN";
        readonly CLIENT: "CLIENT";
        readonly USER: "USER";
    }>>;
    email: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
}, "strip", z.ZodTypeAny, {
    fullname: string;
    email?: string | undefined;
    username?: string | undefined;
    PermissionFlags?: "GUEST" | "EMPLOYEE" | "ADMINISTRATOR" | "FULL_ADMIN" | "CLIENT" | "USER" | undefined;
}, {
    fullname: string;
    email?: string | undefined;
    username?: string | undefined;
    PermissionFlags?: "GUEST" | "EMPLOYEE" | "ADMINISTRATOR" | "FULL_ADMIN" | "CLIENT" | "USER" | undefined;
}>;
export declare const isValidEmail: (email: string) => boolean;
export declare const isValidUsername: (username: string) => boolean;
export type UserResponse = z.infer<typeof UserResponseSchema>;
