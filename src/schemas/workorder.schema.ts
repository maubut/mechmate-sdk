import { z } from "zod";

export const CreateWorkorderSchema = z.object({
  statusId: z.number(),
  customer: z.object({
    email: z.string().email().optional(),
    fullname: z.string().optional(),
    mobile: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
    uuid: z.string().uuid().optional(),
  }),
  technician: z.object({ uuid: z.string().uuid() }).optional(),
  mech: z.object({
    uuid: z.string().uuid().optional(),
    modelYear: z.number(),
    model: z.object({
      name: z.string(),
      id: z.number(),
      make: z.object({
        id: z.number(),
        name: z.string(),
      }),
    }),
  }),
});

export type CreateWorkorderRequest = z.infer<typeof CreateWorkorderSchema>;
