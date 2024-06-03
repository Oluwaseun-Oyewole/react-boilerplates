import { z } from "zod";

export const todoValidationSchema = z.object({
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
  userId: z.number(),
});

export type TodoValues = z.infer<typeof todoValidationSchema>;
