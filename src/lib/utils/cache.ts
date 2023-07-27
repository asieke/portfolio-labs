import { browser } from '$app/environment';
import { default as localforage } from 'localforage';

export const putCache = async (user_id: string, key: string, data: unknown) => {
	if (!browser) return null;

	const userStore = localforage.createInstance({
		name: user_id
	});

	userStore.setItem(key, { timestamp: new Date().getTime(), data: data });
};

export const getCache = async (user_id: string, key: string) => {
	//start a timer
	const now = new Date().getTime();
	if (!browser) return null;
	const userStore = localforage.createInstance({
		name: user_id
	});
	const data = (await userStore.getItem(key)) as { timestamp: number; data: unknown };
	if (!data) return null;

	//if data is older than 24 hours, return null
	if (now - data.timestamp > 24 * 60 * 60 * 1000) return null;

	return data;
};
