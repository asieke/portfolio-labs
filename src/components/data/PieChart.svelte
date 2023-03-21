<script lang="ts">
	import { onMount } from 'svelte';
	import { chartColors } from '$data/colors';
	import Chart from 'chart.js/auto';
	import type { ChartConfiguration } from 'chart.js';

	interface Data {
		label: string;
		value: number;
	}

	export let data: Data[];

	let series = data.map((d) => d.value);
	let temp = [...chartColors];
	temp.sort(() => Math.random() - 0.5);
	let bgs = temp.slice(0, series.length);

	let portfolio: HTMLCanvasElement;
	const chartData = {
		labels: data.map((d) => d.label),
		datasets: [
			{
				data: series,
				backgroundColor: bgs,
				hoverOffset: 0
			}
		]
	};
	const config: ChartConfiguration<'pie'> = {
		type: 'pie',
		data: chartData,
		options: {
			responsive: true,
			maintainAspectRatio: false
		}
	};

	onMount(() => {
		const ctx = portfolio.getContext('2d');
		// Initialize chart using default config set
		if (ctx) {
			var myChart = new Chart(ctx, config);
		}
	});
</script>

<canvas bind:this={portfolio} width={400} height={400} />
