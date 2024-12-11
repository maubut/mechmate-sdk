import { z } from "zod";

export const CreateUserSchema = z.object({
  statusId: z.number(),
  customer: z.object({
    email: z.string().email().optional(),
    fullname: z.string().optional(),
    mobile: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
    uuid: z.string().uuid().optional(),
  }),
});

const usernameRegex = /^[a-zA-Z0-9]+([_. -]?[a-zA-Z0-9])*$/;
export const SignInUserSchema = z.object({
  username: z
    .string()
    .min(1, "Username is required")
    .regex(usernameRegex, "Invalid username"),
  password: z.string(),
});

export type SignInUserRequest = z.infer<typeof SignInUserSchema>;

export const SignInResponseSchema = z.object({});
