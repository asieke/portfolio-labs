<script lang="ts">
	import type { ProfilesRow } from '$lib/types';
	import { onMount } from 'svelte';
	import { formatNumber } from '$lib/shared/formatters';
	export let formData: ProfilesRow;
	let netWorth: HTMLInputElement;
	let income: HTMLInputElement;

	onMount(() => {
		netWorth.value = formatNumber(formData.net_worth as number);
		income.value = formatNumber(formData.income as number);
	});

	const update = () => {
		formData.net_worth = Number(netWorth.value.replace(/[^0-9.-]+/g, ''));
		netWorth.value = formatNumber(formData.net_worth as number);
		formData.income = Number(income.value.replace(/[^0-9.-]+/g, ''));
		income.value = formatNumber(formData.income as number);
	};
</script>

<div>
	<div>
		<label for="email" class="">Net Worth</label>
		<div class="mt-2">
			<input
				type="text"
				name="networth"
				placeholder="$50,000"
				bind:this={netWorth}
				on:input={update}
			/>
		</div>
	</div>
	<div>
		<label for="email">Annual Income</label>
		<div class="mt-2">
			<input
				type="text"
				name="income"
				placeholder="$100,000"
				bind:this={income}
				on:input={update}
			/>
		</div>
	</div>
</div>

<style lang="postcss">
	input {
		@apply mb-6 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6;
	}

	label {
		@apply block text-sm font-medium leading-6 text-gray-900;
	}
</style>
