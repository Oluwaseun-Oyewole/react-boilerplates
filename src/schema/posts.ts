import { z } from 'zod';

export const postValidationSchema = z.object({
  id: z.number(),
  title: z.string(),
  body: z.string(),
  userId: z.number(),
});

export type PostFormValues = z.infer<typeof postValidationSchema>;
