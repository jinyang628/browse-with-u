import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { Database, Tables } from "@/stores/database.types";

let supabaseClient: SupabaseClient | null = null;

export async function getSupabaseClient(): Promise<SupabaseClient> {
  if (!supabaseClient) {
    const supabaseKey = await browser.storage.sync.get("supabaseKey");
    const supabaseUrl = await browser.storage.sync.get("supabaseUrl");
    supabaseClient = createClient(supabaseUrl.supabaseUrl, supabaseKey.supabaseKey);
  }
  return supabaseClient;
}

export type _User = Tables<"users">;
export type User = Omit<_User, "id" | "created_at">;

export type _Webpage = Tables<"webpages">;
export type Webpage = Omit<_Webpage, "id" | "created_at">;

export async function getUserById(
  id: number,
): Promise<User> {
  const supabase = await getSupabaseClient();
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .filter("id", "eq", id);

  if (error) {
    throw new Error(`Error fetching user id: ${error.message}`);
  }
  if (data.length > 1) {
    throw new Error(`Duplicate user found for ${id}`);
  }
  if (data.length === 0) {
    throw new Error(`No user found for ${id}`);
  }
  return data[0];
}

export async function AddWebpage(webpage: Webpage) {
  const supabase = await getSupabaseClient();
  const { data, error } = await supabase
    .from("webpages")
    .insert(webpage);
}