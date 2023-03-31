<script lang="ts">
	import { page } from '$app/stores';
	const { supabase } = $page.data;
	export let callback: () => void;
	export let view = 'mobile';

	const signOut = async () => {
		await supabase.auth.signOut();
		callback();
	};
</script>

<a class={view} href="/profile" on:click|stopPropagation={callback}>Your Profile</a>
<a class={view} href="/settings" on:click|stopPropagation={callback}>Settings</a>
<a
	href="/"
	class={view}
	on:click|preventDefault={() => {
		signOut();
	}}>Sign out</a
>

<style lang="postcss">
	a.desktop {
		@apply block px-4 py-2 text-sm;
	}

	a.mobile {
		@apply block rounded-md px-3 py-2 text-base font-medium;
	}
</style>
