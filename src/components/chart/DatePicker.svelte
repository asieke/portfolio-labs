<script lang="ts">
	import { chartDates, chartSelectedDate } from '$lib/stores/performanceChart';

	const onClick = (date: string) => {
		chartSelectedDate.set(date);
	};
</script>

<div class="mt-3 flex flex-row space-x-2">
	{#each chartDates as date}
		{#if date.value === $chartSelectedDate}
			<button class="selected">{date.label}</button>
		{:else}
			<button on:click={() => onClick(date.value)}>{date.label}</button>
		{/if}
	{/each}
</div>

<style lang="postcss">
	button {
		@apply rounded-lg bg-slate-300 px-3 py-1 text-xs font-medium  dark:bg-slate-600 dark:text-white;
	}
	button.selected {
		@apply bg-primary-500 text-white dark:bg-primary-700;
	}
</style>
