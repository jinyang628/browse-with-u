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

export type _History = Tables<"history">;
export type History = Omit<_History, "id" | "created_at">;
type TableName = keyof Database["public"]["Tables"];
type Row<T extends TableName> = Tables<T>;

export async function GET<T extends TableName>(
  tableName: T,
  filterConditions?: Partial<Row<T>>,
): Promise<Row<T>[]> {
  // const users = await GET("users", { gender: "male" });

  const client = await getSupabaseClient();
  let query = client.from(tableName).select("*");

  if (filterConditions) {
    Object.entries(filterConditions).forEach(([column, value]) => {
      query = query.eq(column, value);
    });
  }

  const { data, error } = await query;

  if (error) {
    throw error;
  }

  return data as Row<T>[];
}

export async function POST<T extends TableName>(
  tableName: T,
  data: Partial<Row<T>>,
): Promise<void> {
  // await POST("users", {
  //   gender: "male",
  //   ...
  //   ...
  // });
  const client = await getSupabaseClient();

  const filteredData = Object.fromEntries(
    Object.entries(data).filter(([_, value]) => value != null),
  );

  const { error } = await client.from(tableName).insert(filteredData);

  if (error) {
    throw error;
  }
}

export async function UPDATE<T extends TableName>(
  tableName: T,
  filterConditions: Partial<Row<T>>,
  updateData: Partial<Row<T>>,
): Promise<Row<T>[]> {
  // const updatedUsers = await UPDATE(
  //   "users",
  //   { gender: "male" },
  //   { email: "male_user@email.com" }
  // );

  const client = await getSupabaseClient();
  let query = client.from(tableName).update(updateData);

  Object.entries(filterConditions).forEach(([column, value]) => {
    query = query.eq(column, value);
  });

  const { data, error } = await query;

  if (error) {
    throw error;
  }

  return data as unknown as Row<T>[];
}

export async function DELETE<T extends TableName>(
  tableName: T,
  filterConditions: Partial<Row<T>>,
): Promise<Row<T>[]> {
  // const deletedUsers = await DELETE("users", { gender: "suveen" });

  const client = await getSupabaseClient();
  let query = client.from(tableName).delete();

  Object.entries(filterConditions).forEach(([column, value]) => {
    query = query.eq(column, value);
  });

  const { data, error } = await query;

  if (error) {
    throw error;
  }

  return data as unknown as Row<T>[];
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
