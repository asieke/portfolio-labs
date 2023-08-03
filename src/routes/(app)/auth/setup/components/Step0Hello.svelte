<script lang="ts">
	import type { Profile } from '$types/profiles';
	import { Logo } from '$components/brand';
	import { IconSpinner } from '$components/svg';

	export let profile: Profile;
	export let next = async () => {};

	let loading = false;
	const handleClick = async () => {
		loading = true;
		await next();
		loading = false;
	};
</script>

<div class="flex w-full flex-col items-center justify-center">
	<Logo class="mb-3 h-8 w-8" />
	<h4 class="text-center font-semibold">Hello and Welcome!</h4>
	<p class="text-center">In order to better understand your finances, we need to collect some basic information. This won't take more than 2 minutes!</p>

	<form class="mt-6 flex w-1/2 flex-col items-center justify-center space-y-5">
		<span class="font-semibold">What's your name?</span>
		<input class="w-full" type="text" name="fullname" placeholder="Ada Lovelace" bind:value={profile.full_name} />
		{#if loading}
			<button class="submit w-2/3" disabled>Next <IconSpinner class="h-5 w-5" /></button>
		{:else}
			<button class="submit w-2/3" on:click|preventDefault={handleClick}>Next</button>
		{/if}
	</form>
</div>
