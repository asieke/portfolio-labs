<script lang="ts">
	import { chartDates, chartSelectedDate, chartSelectedBenchmarks, balanceDisplayData } from '$lib/stores/performanceChart';
	import { hexToRGBA } from '$lib/utils/colors';

	const updateBenchmarks = (i: number) => {
		let temp = [...$chartSelectedBenchmarks];
		temp[i] = !temp[i];
		chartSelectedBenchmarks.set(temp);
	};
</script>

<!-- Create a row of buttons for each of the dates in chartDate -->
<div class="flex flex-row space-x-2">
	{#each balanceDisplayData as label, i}
		{#if label.name !== 'Your Performance'}
			{#if $chartSelectedBenchmarks[i]}
				<button style="background-color: {hexToRGBA(label.color, 1)}" class="text-white" on:click={() => updateBenchmarks(i)}>{label.name}</button>
			{:else}
				<button style="background-color: {hexToRGBA(label.color, 0.1)}" on:click={() => updateBenchmarks(i)}>{label.name}</button>
			{/if}
		{/if}
	{/each}
</div>

<style lang="postcss">
	button {
		@apply rounded-lg bg-slate-300 px-3 py-1 text-xs font-medium dark:text-white;
	}
</style>
