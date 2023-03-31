import { writable } from 'svelte/store';
import type { ProfilesInsert } from '$lib/types';

export const profileStore = writable<ProfilesInsert | null>(null);
