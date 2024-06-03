import { z } from 'zod';

export const albumsValidationSchema = z.object({
  id: z.number(),
  title: z.string(),
  userId: z.number(),
});

export type AlbumsValues = z.infer<typeof albumsValidationSchema>;
