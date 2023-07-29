import type { AssetClass } from '$types/assets';

export type Profile = {
	id: string; // UUIDs are represented as strings in JavaScript/TypeScript
	full_name: string | null;
	dob: Date | null;
	accepted_tos: boolean;
	is_active: boolean | null;
	phone: string | null;
	address: string | null;
	email: string | null;
	financial_information: Record<string, string> | null; // JSONB is represented as any in JavaScript/TypeScript
	settings: Record<string, string> | null; // JSONB is represented as any in JavaScript/TypeScript
	allocation_targets: AssetClass[] | null;
};
