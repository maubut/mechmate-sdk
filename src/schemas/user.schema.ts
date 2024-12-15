import { z } from "zod";

const mobileRegex = /^(\+?[1-9]\d{0,3}[- ]?)?\d{3}[- ]?\d{3}[- ]?\d{4}$/;

export const CreateUserSchema = z.object({
  statusId: z.number(),
  customer: z.object({
    email: z.string().email().optional(),
    fullname: z.string().optional(),
    mobile: z.string().regex(mobileRegex),
    uuid: z.string().uuid().optional(),
  }),
});

const usernameRegex = /^[a-zA-Z0-9]+([_. -]?[a-zA-Z0-9])*$/;
export const SignInUserSchema = z.object({
  username: z
    .string()
    .min(1)
    .transform((str) => str.toLowerCase())
    .pipe(
      z.union([
        z.string().email("ERR_USERNAME_INVALID_FORMAT"), // Allows email format
        z.string().regex(usernameRegex, "ERR_USERNAME_INVALID_FORMAT"), // Allows simple username format
      ]),
    ),
  password: z.string().min(1),
});

export type SignInUserRequest = z.infer<typeof SignInUserSchema>;

export const SignInResponseSchema = z.object({});
