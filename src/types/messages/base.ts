import { z } from "zod";

export const messageSchema = z.object({
  content: z.string(),
});

export type Message = z.infer<typeof messageSchema>;
