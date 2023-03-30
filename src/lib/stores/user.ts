import { writable } from 'svelte/store';

export type UserProps = {
	id?: string | null;
	updated_at?: string | null;
	username?: string | null;
	full_name?: string | null;
	avatar_url?: string | null;
	website?: string | null;
	dob?: string | null;
	accepted_tos?: boolean | null;
	email: string | null | undefined;
};

export const userStore = writable<UserProps | null>(null);
