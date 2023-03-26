export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      blog: {
        Row: {
          author: string | null
          author_img: string | null
          created_at: string | null
          date: string | null
          description: string | null
          hero_img: string | null
          id: number
          md: string | null
          tags: Json[] | null
          title: string | null
          url: string | null
        }
        Insert: {
          author?: string | null
          author_img?: string | null
          created_at?: string | null
          date?: string | null
          description?: string | null
          hero_img?: string | null
          id?: number
          md?: string | null
          tags?: Json[] | null
          title?: string | null
          url?: string | null
        }
        Update: {
          author?: string | null
          author_img?: string | null
          created_at?: string | null
          date?: string | null
          description?: string | null
          hero_img?: string | null
          id?: number
          md?: string | null
          tags?: Json[] | null
          title?: string | null
          url?: string | null
        }
      }
      profiles: {
        Row: {
          accepted_tos: boolean
          avatar_url: string | null
          dob: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          accepted_tos?: boolean
          avatar_url?: string | null
          dob?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          accepted_tos?: boolean
          avatar_url?: string | null
          dob?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
