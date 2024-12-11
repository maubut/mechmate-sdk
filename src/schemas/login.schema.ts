import { z } from "zod";
import { SessionSchema } from "./session.schema";

const usernameRegex = /^[a-zA-Z0-9]+([_. -]?[a-zA-Z0-9])*$/;
export const LoginSchema = z.object({
  username: z
    .string()
    .min(1, "Username is required")
    .regex(usernameRegex, "Invalid username"),
  password: z.string(),
});

export type LoginResponse = z.infer<typeof SessionSchema>;
export type LoginRequest = z.infer<typeof LoginSchema>;
