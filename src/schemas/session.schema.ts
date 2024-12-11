import { z } from "zod";

export const SessionSchema = z.object({
  user: z.object({}),
  account: z.object({}),
  accessToken: z.string(),
  refreshToken: z.string(),
});
