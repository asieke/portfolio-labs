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
      accounts: {
        Row: {
          created_at: string | null
          description: string | null
          id: number
          name: string | null
          type: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: number
          name?: string | null
          type?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: number
          name?: string | null
          type?: string | null
          user_id?: string | null
        }
      }
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
      portfolios: {
        Row: {
          account_id: number | null
          created_at: string | null
          description: string | null
          id: number
          name: string | null
        }
        Insert: {
          account_id?: number | null
          created_at?: string | null
          description?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          account_id?: number | null
          created_at?: string | null
          description?: string | null
          id?: number
          name?: string | null
        }
      }
      positions: {
        Row: {
          cost_basis: number | null
          created_at: string | null
          id: number
          market_value: number | null
          name: string | null
          portfolio_id: number | null
          price: number | null
          quantity: number | null
          symbol: string | null
        }
        Insert: {
          cost_basis?: number | null
          created_at?: string | null
          id?: number
          market_value?: number | null
          name?: string | null
          portfolio_id?: number | null
          price?: number | null
          quantity?: number | null
          symbol?: string | null
        }
        Update: {
          cost_basis?: number | null
          created_at?: string | null
          id?: number
          market_value?: number | null
          name?: string | null
          portfolio_id?: number | null
          price?: number | null
          quantity?: number | null
          symbol?: string | null
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
      transactions: {
        Row: {
          action: string | null
          amount: number | null
          date: string | null
          description: string | null
          fees: number | null
          id: number
          portfolio_id: number | null
          price: number | null
          quantity: number | null
          symbol: string | null
        }
        Insert: {
          action?: string | null
          amount?: number | null
          date?: string | null
          description?: string | null
          fees?: number | null
          id?: number
          portfolio_id?: number | null
          price?: number | null
          quantity?: number | null
          symbol?: string | null
        }
        Update: {
          action?: string | null
          amount?: number | null
          date?: string | null
          description?: string | null
          fees?: number | null
          id?: number
          portfolio_id?: number | null
          price?: number | null
          quantity?: number | null
          symbol?: string | null
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
