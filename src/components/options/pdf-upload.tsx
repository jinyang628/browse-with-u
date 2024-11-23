import { Input } from "@/components/ui/input";
import { defaultPdfState, PdfState } from "@/types/profile/pdf";

type PdfUploadProps = {
  onPdfUpload: (pdf_base64_image: string) => void;
};

export default function PdfUpload({ onPdfUpload }: PdfUploadProps) {
  const [pdfState, setPdfState] = useState<PdfState>(defaultPdfState);

  return (
    <div className="w-full items-center">
      <Input
        type="file"
        accept=".pdf"
        data-file-name={pdfState.pdf?.name || ""}
        className={`input-component upload-field ${
          pdfState.pdf?.name ? "document-name-label" : "document-upload-label"
        }`}
        onChange={async (event) => {
          if (
            !event.target.files ||
            !event.target.files[0] ||
            !event.target.files[0].name
          ) {
            return;
          }
          const file: File = event.target.files[0];
          const imageSrc: string = await getDocumentImageSrc(file);
          setPdfState({
            pdf: event.target.files[0],
            imageSrc: imageSrc,
          });
          onPdfUpload(imageSrc);
        }}
      />
    </div>
  );
}
