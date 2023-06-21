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
        Relationships: [
          {
            foreignKeyName: "accounts_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      asset_classes: {
        Row: {
          cash: number | null
          commodities: number | null
          created_at: string | null
          crypto: number | null
          equityDeveloped: number | null
          equityEmerging: number | null
          equityOther: number | null
          equityUS: number | null
          fixedIncomeGlobal: number | null
          fixedIncomeUS: number | null
          id: number
          other: number | null
          realEstateGlobal: number | null
          realEstateUS: number | null
          symbol: string | null
        }
        Insert: {
          cash?: number | null
          commodities?: number | null
          created_at?: string | null
          crypto?: number | null
          equityDeveloped?: number | null
          equityEmerging?: number | null
          equityOther?: number | null
          equityUS?: number | null
          fixedIncomeGlobal?: number | null
          fixedIncomeUS?: number | null
          id?: number
          other?: number | null
          realEstateGlobal?: number | null
          realEstateUS?: number | null
          symbol?: string | null
        }
        Update: {
          cash?: number | null
          commodities?: number | null
          created_at?: string | null
          crypto?: number | null
          equityDeveloped?: number | null
          equityEmerging?: number | null
          equityOther?: number | null
          equityUS?: number | null
          fixedIncomeGlobal?: number | null
          fixedIncomeUS?: number | null
          id?: number
          other?: number | null
          realEstateGlobal?: number | null
          realEstateUS?: number | null
          symbol?: string | null
        }
        Relationships: []
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
        Relationships: []
      }
      portfolios: {
        Row: {
          account_id: number | null
          cost_basis: number | null
          created_at: string | null
          description: string | null
          id: number
          market_value: number | null
          name: string | null
        }
        Insert: {
          account_id?: number | null
          cost_basis?: number | null
          created_at?: string | null
          description?: string | null
          id?: number
          market_value?: number | null
          name?: string | null
        }
        Update: {
          account_id?: number | null
          cost_basis?: number | null
          created_at?: string | null
          description?: string | null
          id?: number
          market_value?: number | null
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "portfolios_account_id_fkey"
            columns: ["account_id"]
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          }
        ]
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
          security_type: string | null
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
          security_type?: string | null
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
          security_type?: string | null
          symbol?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "positions_portfolio_id_fkey"
            columns: ["portfolio_id"]
            referencedRelation: "portfolios"
            referencedColumns: ["id"]
          }
        ]
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
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
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
        Relationships: [
          {
            foreignKeyName: "transactions_portfolio_id_fkey"
            columns: ["portfolio_id"]
            referencedRelation: "portfolios"
            referencedColumns: ["id"]
          }
        ]
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
