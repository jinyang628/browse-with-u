import { messageSchema } from "@/types/messages/base";
import { pageStateSchema } from "@/types/page";
import { z } from "zod";

export const invokeRequestSchema = z.object({
  pageState: pageStateSchema,
});

export type InvokeRequest = z.infer<typeof invokeRequestSchema>;

export const invokeResponseSchema = z.object({
  response: messageSchema,
});

export type InvokeResponse = z.infer<typeof invokeResponseSchema>;
