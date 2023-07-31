<script lang="ts">
	// import { phone } from '$lib/stores/phone';
	// import { updatePhone } from '$lib/utils/phone';
	import type { Profile } from '$types/profiles';
	import { IconSpinner } from '$components/svg';
	import { tos } from '$lib/data/tos';

	export let profile: Profile;
	export let prev = () => {};
	export let next = async () => {};

	let loading = false;
	let error = '';

	const handleClick = async () => {
		if (!profile.accepted_tos) {
			error = 'Please accept terms';
			return;
		}
		loading = true;
		await next();
		loading = false;
	};
</script>

<div class="w-full">
	<form class="space-y-4">
		<div class="h-[40vh] overflow-y-scroll border-[1px] border-gray-300 p-2">
			{@html tos}
		</div>

		<div class="mt-5 text-sm text-gray-600">
			<input
				type="checkbox"
				class="ml-1 outline-none focus:outline-none focus:ring-0"
				bind:checked={profile.accepted_tos}
				on:click={() => {
					error = '';
				}}
			/>
			I accept the terms of service
			<span class="text-red-600">{error}</span>
		</div>

		<div class="flex flex-row pt-3">
			<button class="cancel w-1/3" on:click|preventDefault={prev}>Previous</button>
			{#if loading}
				<button class="submit w-2/3" disabled>Next <IconSpinner class="h-5 w-5" /></button>
			{:else}
				<button class="submit w-2/3" on:click|preventDefault={handleClick}>Next</button>
			{/if}
		</div>
	</form>
</div>
