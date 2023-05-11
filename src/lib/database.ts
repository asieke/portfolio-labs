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
          address: string | null
          dob: string | null
          email: string | null
          employment_status: string | null
          full_name: string | null
          id: string
          income: number | null
          is_active: boolean | null
          job_title: string | null
          net_worth: number | null
          phone: string | null
          tax_filing_status: string | null
        }
        Insert: {
          accepted_tos?: boolean
          address?: string | null
          dob?: string | null
          email?: string | null
          employment_status?: string | null
          full_name?: string | null
          id: string
          income?: number | null
          is_active?: boolean | null
          job_title?: string | null
          net_worth?: number | null
          phone?: string | null
          tax_filing_status?: string | null
        }
        Update: {
          accepted_tos?: boolean
          address?: string | null
          dob?: string | null
          email?: string | null
          employment_status?: string | null
          full_name?: string | null
          id?: string
          income?: number | null
          is_active?: boolean | null
          job_title?: string | null
          net_worth?: number | null
          phone?: string | null
          tax_filing_status?: string | null
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
