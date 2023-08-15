import type { AssetClass } from '$types/assets';

export type Profile = {
	id: string; // UUIDs are represented as strings in JavaScript/TypeScript
	full_name: string;
	dob: Date;
	accepted_tos: boolean;
	is_active: boolean;
	is_setup: boolean;
	phone: string;
	address: string;
	email: string;
	financial_information: Record<string, string>; // JSONB is represented as any in JavaScript/TypeScript
	settings: Record<string, string>; // JSONB is represented as any in JavaScript/TypeScript
	allocation_targets: AssetClass[];
	stripe_customer_id: string;
	is_admin: boolean;
};
