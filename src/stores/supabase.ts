import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { Database, Tables } from "@/stores/database.types";
import { getEmbedding } from "@/actions/embeddings/embed";
import { PageStateHistory } from "@/types/state/history";

let supabaseClient: SupabaseClient | null = null;

export async function getSupabaseClient(): Promise<SupabaseClient> {
  if (!supabaseClient) {
    const supabaseKey = await browser.storage.sync.get("supabaseKey");
    const supabaseUrl = await browser.storage.sync.get("supabaseUrl");
    supabaseClient = createClient(
      supabaseUrl.supabaseUrl,
      supabaseKey.supabaseKey,
    );
  }
  return supabaseClient;
}

export type _User = Tables<"users">;
export type User = Omit<_User, "id" | "created_at">;
export type UserData = Omit<
  _User,
  "id" | "created_at" | "data" | "data_vector"
>;

export type _Webpage = Tables<"webpages">;
export type Webpage = Omit<_Webpage, "id" | "created_at">;

export async function getUserById(id: number): Promise<User> {
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

export async function updateUserData(user: UserData) {
  const supabase = await getSupabaseClient();
  const { data, error } = await supabase.from("users").update(user).eq("id", 1);

  if (error) {
    throw new Error(`Error updating user: ${error.message}`);
  }

  return data;
}

export async function addWebpage(webpage: Webpage) {
  const supabase = await getSupabaseClient();
  const { data, error } = await supabase.from("webpages").insert(webpage);
}

export async function updateWebpage(webpage: Webpage) {
  const supabase = await getSupabaseClient();
  const { data, error } = await supabase.from("webpages").update(webpage);
}

export async function addHistory(history: PageStateHistory) {
  const supabase = await getSupabaseClient();
  const { data, error } = await supabase.from("history").insert(history);
}

// Hard code session_id for now
export async function getHistoryBySessionId(
  session_id: number = 1,
): Promise<History | null> {
  const supabase = await getSupabaseClient();
  const { data, error } = await supabase
    .from("history")
    .select("*")
    .eq("session_id", session_id);

  if (error) {
    throw new Error(`Error fetching history: ${error.message}`);
  }
  if (data.length > 1) {
    throw new Error(`Duplicate history found for ${session_id}`);
  }

  return data ? data[0] : null;
}

// Hard code session_id for now
export async function updateHistoryBySessionId(
  session_id: number = 1,
  history: PageStateHistory,
) {
  const supabase = await getSupabaseClient();
  const { data, error } = await supabase
    .from("history")
    .update(history)
    .eq("session_id", session_id);
  if (error) {
    throw new Error(`Error updating history: ${error.message}`);
  }
  return data;
}

export async function findSimilarUserData(query: string) {
  const embedding = await getEmbedding(query);
  const supabase = await getSupabaseClient();
  const { data: documents } = await supabase.rpc("user_vector_search", {
    query_embedding: embedding, // pass the query embedding
    match_count: 1, // choose the number of matches
    similarity_threshold: 0.4, // choose an appropriate threshold for your data
  });
  return documents;
}
