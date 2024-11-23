import { createClient, SupabaseClient } from "@supabase/supabase-js";

let supabaseClient: SupabaseClient | null = null;

export async function getSupabaseClient(): Promise<SupabaseClient> {
  if (!supabaseClient) {
    const supabaseKey = await browser.storage.sync.get("supabaseKey");
    const supabaseUrl = await browser.storage.sync.get("supabaseUrl");
    supabaseClient = createClient(supabaseUrl.supabaseUrl, supabaseKey.supabaseKey);
  }
  return supabaseClient;
}

