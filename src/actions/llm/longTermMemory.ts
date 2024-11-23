import { GET, UPDATE } from "@/stores/supabase";
import { invokeClaudeAPI } from "@/actions/llm/claude";
import { fetchLtmInfo } from "@/utils/fetch-ltm-info";
import { logger } from "@/lib/logger";

export interface AnalysisType {
    is_relevant: boolean;
    url: string;
}

const ANALYSIS_PROMPT = `Look at the user's webpage history by an user and find if there are visual patterns 
about the user's intents and behaviors. You should only return a topic user is interested in using less than 8 words

URLs and content: {context}

Identify patterns and return the topic.


Focus on finding meaningful patterns like:
- Common subject matter or themes
- Similar types of activities (shopping, learning, research)
- Technical topics or documentation
- Content format patterns (tutorials, product pages, documentation)

GOOD RESPONSE:
If an user has been browsing a lot of jobs sites, it means they could be looking for a job.`;

export async function analyzeNewWebpages() {
  try {
    // Get unanalyzed pages and user context in parallel
    const [unanalyzedPages, userPreferences] = await Promise.all([
      GET("webpages", { is_analyzed: false }),
      fetchLtmInfo()
    ]);


    if (unanalyzedPages.length < 10) {
        return;
    }
    if (!unanalyzedPages.length) {
      logger.info("No new pages to analyze");
      return;
    }

    // Process pages in parallel with rate limiting
    const combinedPrompt = ANALYSIS_PROMPT
      .replace("{context}", unanalyzedPages.map(p => p.url).join("\n"))

    const analysis = await invokeClaudeAPI(combinedPrompt);
    
    // Update all pages with the same analysis
    await Promise.all(unanalyzedPages.map(page => 
      UPDATE("webpages", 
        { id: page.id },
        { response: analysis, is_analyzed: true }
      )
    ));

    logger.info(`Analyzed ${unanalyzedPages.length} new pages`);
    
    console.log('long term memory analysis', analysis);
    return analysis;
  } catch (error) {
    logger.error(`Page analysis failed: ${error}`);
    throw error;
  }
}
