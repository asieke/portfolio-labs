<script lang="ts">
	import type { BalanceYearly } from './types';
	import { formatPercent } from '$lib/shared/formatters';

	export let data: BalanceYearly[];

	const displayPct = (start: number, end: number, flow: number) => {
		return formatPercent((end - 0.5 * flow) / (start + 0.5 * flow) - 1);
	};
</script>

<table>
	<tr>
		<td>Headers</td>
		<td>My Portfolio</td>
		{#each Object.keys(data[0].start_benchmarks) as label}
			<td>{label}</td>
		{/each}
	</tr>
	{#each data as row}
		<tr>
			<td>{row.year}</td>
			<td>{displayPct(row.start_balance, row.end_balance, row.total_flows)}</td>
			{#each Object.keys(row.end_benchmarks) as key}
				<td>{displayPct(row.start_benchmarks[key], row.end_benchmarks[key], row.total_flows)}</td>
			{/each}
		</tr>
	{/each}
</table>

<style>
	table {
		@apply w-full text-xs;
	}
	td {
		@apply text-center w-[10%];
	}
</style>
