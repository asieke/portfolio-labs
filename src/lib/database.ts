export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
	public: {
		Tables: {
			accounts: {
				Row: {
					asset_class: Json | null;
					cost_basis: number | null;
					created_at: string | null;
					description: string | null;
					id: number;
					market_value: number | null;
					name: string | null;
					type: string | null;
					user_id: string | null;
				};
				Insert: {
					asset_class?: Json | null;
					cost_basis?: number | null;
					created_at?: string | null;
					description?: string | null;
					id?: number;
					market_value?: number | null;
					name?: string | null;
					type?: string | null;
					user_id?: string | null;
				};
				Update: {
					asset_class?: Json | null;
					cost_basis?: number | null;
					created_at?: string | null;
					description?: string | null;
					id?: number;
					market_value?: number | null;
					name?: string | null;
					type?: string | null;
					user_id?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: 'accounts_user_id_fkey';
						columns: ['user_id'];
						referencedRelation: 'users';
						referencedColumns: ['id'];
					}
				];
			};
			assets: {
				Row: {
					asset_class: Json | null;
					country: string | null;
					created_at: string | null;
					cusip: string | null;
					description: string | null;
					id: number;
					industry: string | null;
					last_updated: string | null;
					name: string | null;
					sector: string | null;
					security_type: string | null;
					symbol: string | null;
				};
				Insert: {
					asset_class?: Json | null;
					country?: string | null;
					created_at?: string | null;
					cusip?: string | null;
					description?: string | null;
					id?: number;
					industry?: string | null;
					last_updated?: string | null;
					name?: string | null;
					sector?: string | null;
					security_type?: string | null;
					symbol?: string | null;
				};
				Update: {
					asset_class?: Json | null;
					country?: string | null;
					created_at?: string | null;
					cusip?: string | null;
					description?: string | null;
					id?: number;
					industry?: string | null;
					last_updated?: string | null;
					name?: string | null;
					sector?: string | null;
					security_type?: string | null;
					symbol?: string | null;
				};
				Relationships: [];
			};
			blog: {
				Row: {
					author: string | null;
					author_img: string | null;
					created_at: string | null;
					date: string | null;
					description: string | null;
					hero_img: string | null;
					id: number;
					md: string | null;
					tags: Json[] | null;
					title: string | null;
					url: string | null;
				};
				Insert: {
					author?: string | null;
					author_img?: string | null;
					created_at?: string | null;
					date?: string | null;
					description?: string | null;
					hero_img?: string | null;
					id?: number;
					md?: string | null;
					tags?: Json[] | null;
					title?: string | null;
					url?: string | null;
				};
				Update: {
					author?: string | null;
					author_img?: string | null;
					created_at?: string | null;
					date?: string | null;
					description?: string | null;
					hero_img?: string | null;
					id?: number;
					md?: string | null;
					tags?: Json[] | null;
					title?: string | null;
					url?: string | null;
				};
				Relationships: [];
			};
			portfolios: {
				Row: {
					account_id: number | null;
					asset_class: Json | null;
					cost_basis: number | null;
					created_at: string | null;
					description: string | null;
					id: number;
					market_value: number | null;
					name: string | null;
				};
				Insert: {
					account_id?: number | null;
					asset_class?: Json | null;
					cost_basis?: number | null;
					created_at?: string | null;
					description?: string | null;
					id?: number;
					market_value?: number | null;
					name?: string | null;
				};
				Update: {
					account_id?: number | null;
					asset_class?: Json | null;
					cost_basis?: number | null;
					created_at?: string | null;
					description?: string | null;
					id?: number;
					market_value?: number | null;
					name?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: 'portfolios_account_id_fkey';
						columns: ['account_id'];
						referencedRelation: 'accounts';
						referencedColumns: ['id'];
					}
				];
			};
			positions: {
				Row: {
					asset_class: Json | null;
					cost_basis: number | null;
					created_at: string | null;
					id: number;
					market_value: number | null;
					name: string | null;
					portfolio_id: number | null;
					price: number | null;
					quantity: number | null;
					security_type: string | null;
					symbol: string | null;
				};
				Insert: {
					asset_class?: Json | null;
					cost_basis?: number | null;
					created_at?: string | null;
					id?: number;
					market_value?: number | null;
					name?: string | null;
					portfolio_id?: number | null;
					price?: number | null;
					quantity?: number | null;
					security_type?: string | null;
					symbol?: string | null;
				};
				Update: {
					asset_class?: Json | null;
					cost_basis?: number | null;
					created_at?: string | null;
					id?: number;
					market_value?: number | null;
					name?: string | null;
					portfolio_id?: number | null;
					price?: number | null;
					quantity?: number | null;
					security_type?: string | null;
					symbol?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: 'positions_portfolio_id_fkey';
						columns: ['portfolio_id'];
						referencedRelation: 'portfolios';
						referencedColumns: ['id'];
					}
				];
			};
			profiles: {
				Row: {
					accepted_tos: boolean;
					address: string | null;
					dob: string | null;
					email: string | null;
					employment_status: string | null;
					full_name: string | null;
					id: string;
					income: number | null;
					is_active: boolean | null;
					job_title: string | null;
					net_worth: number | null;
					phone: string | null;
					tax_filing_status: string | null;
				};
				Insert: {
					accepted_tos?: boolean;
					address?: string | null;
					dob?: string | null;
					email?: string | null;
					employment_status?: string | null;
					full_name?: string | null;
					id: string;
					income?: number | null;
					is_active?: boolean | null;
					job_title?: string | null;
					net_worth?: number | null;
					phone?: string | null;
					tax_filing_status?: string | null;
				};
				Update: {
					accepted_tos?: boolean;
					address?: string | null;
					dob?: string | null;
					email?: string | null;
					employment_status?: string | null;
					full_name?: string | null;
					id?: string;
					income?: number | null;
					is_active?: boolean | null;
					job_title?: string | null;
					net_worth?: number | null;
					phone?: string | null;
					tax_filing_status?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: 'profiles_id_fkey';
						columns: ['id'];
						referencedRelation: 'users';
						referencedColumns: ['id'];
					}
				];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			update_account_asset_class: {
				Args: Record<PropertyKey, never>;
				Returns: undefined;
			};
			update_portfolio_asset_class: {
				Args: Record<PropertyKey, never>;
				Returns: undefined;
			};
			update_position_asset_class: {
				Args: Record<PropertyKey, never>;
				Returns: undefined;
			};
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
