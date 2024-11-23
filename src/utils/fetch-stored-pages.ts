import { logger } from "@/lib/logger";
import { GET } from "@/stores/supabase";
import { PageState, pageStateSchema } from "@/types/page";

export default async function fetchStoredPages(): Promise<PageState[]> {
  // Example usage
  // const data = await fetchStoredPages();
  
  const result = await GET<"webpages">("webpages", {
    session_id: 1, // Hard coded for now
  });
  logger.info("fetchStoredPages result:", result);

  const res = [];
  for (const page of result) {
    const pageState = pageStateSchema.parse({
      url: page.url,
      textContent: page.page_data,
      screenshot: page.base64_image,
    });
    res.push(pageState);
  }
  return res
};
