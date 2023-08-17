<script lang="ts">
	import Highcharts from 'highcharts';
	import { onMount } from 'svelte';
	import { drawChart } from '$lib/chart/lineChart';
	import { formatCurrency, formatPercent } from '$lib/utils/format';

	type SimulationResult = {
		date: Date;
		timestamp: number;
	} & {
		[key in 'p5' | 'p10' | 'p25' | 'p50' | 'p75' | 'p90' | 'p95']: number;
	};

	type PercentileKey = 'p5' | 'p10' | 'p25' | 'p50' | 'p75' | 'p90' | 'p95';
	const percentiles: PercentileKey[] = ['p5', 'p10', 'p25', 'p50', 'p75', 'p90', 'p95'];

	const colors = ['#f43f5e', '#d946ef', '#a855f7', '#6366f1', '#0ea5e9', '#14b8a6', '#22c55e'];

	export let startingBalance: number;
	export let simulationResults: SimulationResult[];
	let adjustedResults: SimulationResult[];
	let highlightedResult: SimulationResult;

	let container: HTMLElement;

	const onMouseOver = (x: number) => {
		const date = new Date(x).toISOString().split('T')[0];

		//find the closest timestamp
		highlightedResult = adjustedResults.reduce((prev, curr) => {
			return Math.abs(curr?.timestamp - x) < Math.abs(prev?.timestamp - x) ? curr : prev;
		});
	};

	$: {
		adjustedResults = simulationResults.map((s) => ({
			...s,
			timestamp: new Date(s.date.getFullYear(), s.date.getMonth(), 1).getTime()
		}));

		const data = ['p5', 'p10', 'p25', 'p50', 'p75', 'p90', 'p95'].map((key, i) => ({
			name: key,
			data: adjustedResults.map((result) => [result.timestamp, result[key as keyof typeof result]]),
			color: colors[i],
			type: 'line' as 'line'
		}));

		if (container) {
			drawChart({ container, data, tooltip: false, showY: false, onMouseOver });
		}
	}
</script>

<div id="container" class="cursor-crosshair" bind:this={container} />

<table class="data text-sm">
	<thead>
		<tr>
			<td />
			<td>Percentile</td>
			<td>Ending Value</td>
			<td>%</td>
			<td>Selected Value</td>
			<td>%</td>
		</tr>
	</thead>
	<tbody>
		{#each percentiles as percentile, i}
			<tr>
				<td><div class="h-4 w-4" style="background-color: {colors[i]}" /></td>
				<td>{percentile}</td>
				<td>{formatCurrency(simulationResults[simulationResults.length - 1][percentile], 0)}</td>
				<td>{formatPercent(simulationResults[simulationResults.length - 1][percentile] / startingBalance - 1)}</td>
				{#if highlightedResult}
					<td>{formatCurrency(highlightedResult[percentile], 0)}</td>
					<td>{formatPercent(highlightedResult[percentile] / startingBalance - 1, 0)}</td>
				{/if}
			</tr>
		{/each}
	</tbody>
</table>
