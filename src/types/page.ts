import { z } from "zod";

export const pageStateSchema = z.object({
  url: z.string(),
  atree: z.record(z.any()),
  screenshot: z.string(),
});

export const defaultPageState: PageState = {
  url: "",
  atree: {},
  screenshot: "",
};

export type PageState = z.infer<typeof pageStateSchema>;
