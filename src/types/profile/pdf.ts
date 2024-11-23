import { z } from "zod";

export const pdfStateSchema = z.object({
  pdf: z.custom<File | null>((val) => val === null || val instanceof File, {
    message: "Expected a File or null",
  }),
  imageSrc: z.string(),
});

export type PdfState = z.infer<typeof pdfStateSchema>;

export const defaultPdfState: PdfState = {
  pdf: null,
  imageSrc: "",
};
