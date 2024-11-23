import { screenshotPhaseSchema } from "@/types/messages/actions";
import z from "zod";

export const screenshotRequestSchema = z.object({
  phase: screenshotPhaseSchema,
});

export type ScreenshotRequest = z.infer<typeof screenshotRequestSchema>;
