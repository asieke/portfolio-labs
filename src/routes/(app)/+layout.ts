export const load = async ({ parent }) => {
	const { session } = await parent();
	return { user: session?.user };
};
