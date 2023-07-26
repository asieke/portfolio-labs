<script lang="ts">
	import type { Balance } from '$types/balances';
	import { balanceDisplayData } from '$lib/stores/performanceChart';

	// Define the prop for the component
	export let balances: Balance[];
	export let options: {
		datePicker?: boolean;
		benchmarkPicker?: boolean;
	} = {};
	const { datePicker = true, benchmarkPicker = true } = options;
</script>

<div class="mt-6">
	<!-- Create a table that has a row for every value in balanceDisplayData and a bg color -->
	<!-- that corresponds to the color in balanceDisplayData -->
	{#each balanceDisplayData as label, i}
		<div class="flex items-center justify-between py-1 text-sm">
			<div class="">
				<div class="h-3 w-3" style="background-color: {label.color}" />
			</div>
			<div class="w-5/12 text-left"><span>{label.name}</span></div>
			<div class="w-3/12 text-center">$$$</div>
			<div class="w-3/12 text-center">%%%</div>
		</div>
	{/each}
</div>
