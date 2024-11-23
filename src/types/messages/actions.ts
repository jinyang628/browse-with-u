import z from "zod";

export const actionTypeSchema = z.enum(["click", "navigate", "type"]);

export type ActionType = z.infer<typeof actionTypeSchema>;

export const screenshotPhaseSchema = z.enum(["before", "after"]);
export type ScreenshotPhase = z.infer<typeof screenshotPhaseSchema>;
