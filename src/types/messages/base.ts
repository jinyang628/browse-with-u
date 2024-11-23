import { z } from "zod";

export const roleSchema = z.enum(["user", "assistant"]);
export type Role = z.infer<typeof roleSchema>;

export const messageSchema = z.object({
  role: roleSchema,
  content: z.string(),
});

export type Message = z.infer<typeof messageSchema>;
