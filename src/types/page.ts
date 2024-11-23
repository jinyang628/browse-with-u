import { z } from "zod";

export const pageStateSchema = z.object({
  url: z.string(),
  textContent: z.string(),
  screenshot: z.string(),
});

export const defaultPageState: PageState = {
  url: "",
  textContent: "",
  screenshot: "",
};

export type PageState = z.infer<typeof pageStateSchema>;
