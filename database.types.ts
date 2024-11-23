export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      history: {
        Row: {
          created_at: string;
          id: number;
          session_id: number;
          webpage_ids: number[];
        };
        Insert: {
          created_at?: string;
          id?: number;
          session_id: number;
          webpage_ids: number[];
        };
        Update: {
          created_at?: string;
          id?: number;
          session_id?: number;
          webpage_ids?: number[];
        };
        Relationships: [
          {
            foreignKeyName: "history_session_id_fkey";
            columns: ["session_id"];
            isOneToOne: false;
            referencedRelation: "sessions";
            referencedColumns: ["id"];
          },
        ];
      };
      sessions: {
        Row: {
          created_at: string;
          id: number;
          user_id: number | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          user_id?: number | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          user_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "sessions_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      users: {
        Row: {
          created_at: string;
          data: string | null;
          data_vector: string | null;
          date_of_birth: string | null;
          email: string | null;
          fitness_goals: string[] | null;
          food: string[] | null;
          gender: string | null;
          goals: string[] | null;
          health_conditions: string | null;
          hobbies: string[] | null;
          id: number;
          industry: string | null;
          languages: string[] | null;
          location: string | null;
          name: string | null;
          nationality: string | null;
          occupation: string | null;
          phone: string | null;
          skills: string[] | null;
          sleep_hours: number | null;
        };
        Insert: {
          created_at?: string;
          data?: string | null;
          data_vector?: string | null;
          date_of_birth?: string | null;
          email?: string | null;
          fitness_goals?: string[] | null;
          food?: string[] | null;
          gender?: string | null;
          goals?: string[] | null;
          health_conditions?: string | null;
          hobbies?: string[] | null;
          id?: number;
          industry?: string | null;
          languages?: string[] | null;
          location?: string | null;
          name?: string | null;
          nationality?: string | null;
          occupation?: string | null;
          phone?: string | null;
          skills?: string[] | null;
          sleep_hours?: number | null;
        };
        Update: {
          created_at?: string;
          data?: string | null;
          data_vector?: string | null;
          date_of_birth?: string | null;
          email?: string | null;
          fitness_goals?: string[] | null;
          food?: string[] | null;
          gender?: string | null;
          goals?: string[] | null;
          health_conditions?: string | null;
          hobbies?: string[] | null;
          id?: number;
          industry?: string | null;
          languages?: string[] | null;
          location?: string | null;
          name?: string | null;
          nationality?: string | null;
          occupation?: string | null;
          phone?: string | null;
          skills?: string[] | null;
          sleep_hours?: number | null;
        };
        Relationships: [];
      };
      webpages: {
        Row: {
          base64_image: string | null;
          created_at: string;
          id: number;
          page_data: string | null;
          response: string | null;
          session_id: number | null;
          url: string | null;
        };
        Insert: {
          base64_image?: string | null;
          created_at?: string;
          id?: number;
          page_data?: string | null;
          response?: string | null;
          session_id?: number | null;
          url?: string | null;
        };
        Update: {
          base64_image?: string | null;
          created_at?: string;
          id?: number;
          page_data?: string | null;
          response?: string | null;
          session_id?: number | null;
          url?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "webpages_session_id_fkey";
            columns: ["session_id"];
            isOneToOne: false;
            referencedRelation: "sessions";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      user_vector_search: {
        Args: {
          query_embedding: string;
          similarity_threshold: number;
          match_count: number;
        };
        Returns: {
          id: number;
          name: string;
          data: string;
          created_at: string;
          similarity: number;
        }[];
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;
