import { pageStateSchema } from "@/types/page";
import { z } from "zod";

export const askRequestSchema = z.object({
  prompt: z.string(),
  pageState: pageStateSchema,
});

export type AskRequest = z.infer<typeof askRequestSchema>;

export const askResponseSchema = z.object({
  response: z.string(),
});

export type AskResponse = z.infer<typeof askResponseSchema>;
