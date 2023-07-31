<script lang="ts">
	import { onMount } from 'svelte';
	import { drawChart } from '$lib/chart/lineChart';
	import type { DashStyleValue } from 'highcharts';
	import type { Price } from '$types/prices';

	export let prices: Price[];

	let temp = prices.filter((p) => p.price > 0);
	let ratio = 10000 / temp[0].price || 1;

	// Initialize container and chart variables
	let container: HTMLElement;

	const data = [
		{
			name: 'Your Performance',
			data: temp.map((p) => [new Date(p.date).getTime(), p.price * ratio] as [number, number]),
			// data: displayBalances.map((b) => [new Date(b.date).getTime(), b.end_balance] as [number, number]),
			lineWidth: 2,
			dashStyle: 'Solid' as DashStyleValue,
			color: '#ffcc33',
			type: 'line' as 'line'
		}
	];

	onMount(() => {
		drawChart({
			container,
			data
		});
	});
</script>

<div>
	<div class="h-[400px]" bind:this={container} />
</div>
