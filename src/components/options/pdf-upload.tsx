import { Input } from "@/components/ui/input";
import { defaultPdfState, PdfState } from "@/types/profile/pdf";
import { getDocumentImageSrc } from "@/utils/pdf";
import * as pdfjsLib from "pdfjs-dist";
import { Loader2 } from "lucide-react";

type PdfUploadProps = {
  onPdfUpload: (pdf_base64_image: string) => void;
  onTextExtracted: (text: string) => void;
};

export default function PdfUpload({
  onPdfUpload,
  onTextExtracted,
}: PdfUploadProps) {
  const [pdfState, setPdfState] = useState<PdfState>(defaultPdfState);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="w-full items-center relative">
      <Input
        type="file"
        accept=".pdf"
        data-file-name={pdfState.pdf?.name || ""}
        className={`input-component upload-field ${
          pdfState.pdf?.name ? "document-name-label" : "document-upload-label"
        }`}
        onChange={async (event) => {
          try {
            setIsLoading(true);
            if (
              !event.target.files ||
              !event.target.files[0] ||
              !event.target.files[0].name
            ) {
              return;
            }
            const file: File = event.target.files[0];
  
            const imageSrc: string = await getDocumentImageSrc(file);
  
            // Extract text from PDF
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
            let fullText = "";
  
            for (let i = 1; i <= pdf.numPages; i++) {
              const page = await pdf.getPage(i);
              const textContent = await page.getTextContent();
              const pageText = textContent.items
                .map((item: any) => item.str)
                .join(" ");
              fullText += pageText + "\n";
            }
            setPdfState({
              pdf: event.target.files[0],
              imageSrc: imageSrc,
            });
            onPdfUpload(imageSrc);
            if (onTextExtracted) {
              onTextExtracted(fullText);
            }
          } finally {
            setIsLoading(false);
          }
          
        }}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/50">
          <Loader2 className="h-6 w-6 animate-spin" />
        </div>
      )}
    </div>
  );
}
