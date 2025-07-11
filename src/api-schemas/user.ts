/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/backend/mechmate-api/src/api-schemas/user.ts)
 * Last updated: 2025-07-10T01:37:07.982Z
 * Update this file when API schema changes
 */

import { z } from 'zod';
import { User, PermissionFlags } from './common/ts-interfaces';
import { SchemaFromInterface } from './common/utils';

const permissionFlagsRecord: Record<PermissionFlags, PermissionFlags> = {
  GUEST: 'GUEST',
  EMPLOYEE: 'EMPLOYEE',
  ADMINISTRATOR: 'ADMINISTRATOR',
  FULL_ADMIN: 'FULL_ADMIN',
  CLIENT: 'CLIENT',
  USER: 'USER'
};

const permissionFlagsValues = Object.values(
  permissionFlagsRecord
) as readonly PermissionFlags[];

export const UserSchema = z.object({
  id: z.number(),
  uuid: z.string(),
  email: z.string().nullable(),
  username: z.string(),
  profileUrl: z.string().nullable(),
  fullname: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
  permissionFlags: z.enum(
    permissionFlagsValues as [PermissionFlags, ...PermissionFlags[]]
  ),
  preferences: z.any().nullable(),
  verified: z.boolean(),
  accountId: z.number(),
  password: z.string().nullable()
}) satisfies SchemaFromInterface<User>;

const normalizeEmail = (email: string) => {
  // Simulate gmail_remove_dots and all_lowercase
  const [localPart, domain] = email.toLowerCase().split('@');
  if (domain === 'gmail.com') {
    return `${localPart.replace(/\./g, '')}@${domain}`;
  }
  return email.toLowerCase();
};

export const passwordSchema = z
  .string()
  .min(6)
  .regex(/.*[!@#$%^&*]/, 'Password must contain a special character')
  .regex(/.*\d/, 'Password must contain a number');

export const usernameSchema = z
  .string()
  .trim()
  .min(3, { message: 'ERR_USERNAME_LENGTH' })
  .max(28, { message: 'ERR_USERNAME_LENGTH' })
  .regex(/^[a-zA-Z0-9_-]+$/, { message: 'ERR_USERNAME_INVALID_CHARS' })
  .refine((val) => !/^[0-9]/.test(val), {
    message: 'ERR_USERNAME_START_WITH_NUMBER'
  });

export const emailSchema = z
  .string()
  .email({ message: 'ERR_INVALID_EMAIL' })
  .transform(normalizeEmail);

export const UserRequestSchema = UserSchema.pick({ uuid: true });
export const UserResponseSchema = UserSchema.omit({
  id: true,
  accountId: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
  password: true
});

export const CreateUserSchema = z.object({
  fullname: z.string().min(1),
  username: usernameSchema.optional(),
  permissionFlags: z
    .enum(permissionFlagsValues as [PermissionFlags, ...PermissionFlags[]])
    .optional(),
  password: passwordSchema,
  email: emailSchema.optional()
});

export const InviteUserSchema = z.object({
  fullname: z.string().min(1),
  username: usernameSchema.optional(),
  permissionFlags: z
    .enum(permissionFlagsValues as [PermissionFlags, ...PermissionFlags[]])
    .optional(),
  email: emailSchema.optional()
});

// Utility functions that can be useful in both frontend and backend
export const isValidEmail = (email: string): boolean => {
  const result = emailSchema.safeParse(email);
  return result.success;
};

export const isValidUsername = (username: string): boolean => {
  const result = usernameSchema.safeParse(username);
  return result.success;
};

export type UserResponse = z.infer<typeof UserResponseSchema>;
