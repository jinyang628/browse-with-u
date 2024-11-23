const loadPdfJs = async () => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const PDFJS = await import("pdfjs-dist");

    PDFJS.GlobalWorkerOptions.workerSrc = "/pdf.worker.mjs";

    return PDFJS;
  } catch (error) {
    return null;
  }
};

export async function getDocumentImageSrc(file: File | null): Promise<string> {
  const PDFJS = await loadPdfJs();
  if (!file || !PDFJS) {
    return "";
  }

  try {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await PDFJS.getDocument({ data: arrayBuffer }).promise;
    const totalPages = pdf.numPages;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("Cannot get canvas context");
    }

    let totalHeight = 0;
    let maxWidth = 0;
    const pageCanvases: HTMLCanvasElement[] = [];

    for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const viewport = page.getViewport({ scale: 1.5 });

      const pageCanvas = document.createElement("canvas");
      const pageCtx = pageCanvas.getContext("2d");
      if (!pageCtx) {
        throw new Error("Cannot get page canvas context");
      }

      pageCanvas.width = viewport.width;
      pageCanvas.height = viewport.height;

      await page.render({
        canvasContext: pageCtx,
        viewport: viewport,
      }).promise;

      pageCanvases.push(pageCanvas);
      totalHeight += viewport.height;
      maxWidth = Math.max(maxWidth, viewport.width);
    }

    canvas.width = maxWidth;
    canvas.height = totalHeight;

    let currentHeight = 0;
    for (const pageCanvas of pageCanvases) {
      ctx.drawImage(
        pageCanvas,
        0,
        currentHeight,
        pageCanvas.width,
        pageCanvas.height,
      );
      currentHeight += pageCanvas.height;
    }

    return canvas.toDataURL("image/jpeg", 0.8);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error getting PDF src:", error);
    throw error;
  }
}

export async function convertFileToBase64(file: File | null): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!file) {
      return resolve("");
    }
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}

export async function loadPdfAsFile(
  filePath: string,
  fileName: string,
): Promise<File | null> {
  try {
    const response = await fetch(filePath);
    const blob = await response.blob();

    const file = new File([blob], fileName, { type: blob.type });

    return file;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error loading PDF as File:", error);

    return null;
  }
}
