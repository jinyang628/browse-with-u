import { pageStateSchema } from "@/types/page";
import { z } from "zod";

export const pageStateHistorySchema = z.object({
  history: z.array(pageStateSchema),
});

export type PageStateHistory = z.infer<typeof pageStateHistorySchema>;

export const defaultPageStateHistory: PageStateHistory = {
  history: [],
};
