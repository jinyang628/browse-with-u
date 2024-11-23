import { pageStateSchema } from "@/types/page";
import { z } from "zod";

export const invokeRequestSchema = z.object({
  pageStates: z.array(pageStateSchema),
});

export type InvokeRequest = z.infer<typeof invokeRequestSchema>;

export const invokeResponseSchema = z.object({
  response: z.string(),
});

export type InvokeResponse = z.infer<typeof invokeResponseSchema>;
