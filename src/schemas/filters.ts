import { z } from "zod";

export const WorksheetFilterSchema = z.object({
  field: z.enum(["status", "technician"]),
  operator: z.enum(["IS"]),
  value: z.union([z.string(), z.array(z.string())]),
});

export type WorksheetFilter = z.infer<typeof WorksheetFilterSchema>;
