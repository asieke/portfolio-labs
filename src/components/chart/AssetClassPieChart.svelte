<script lang="ts">
	import { onMount } from 'svelte';
	import Highcharts from 'highcharts';
	import type { AssetClass } from '$types/assets';
	import type { SeriesPieOptions, ChartOptions, PlotOptions } from 'highcharts';

	//data is an array of keys and values
	export let data: AssetClass[];

	const displayData: { name: string; value: number; color: string }[] = [];
	let total = 0;
	data.forEach((a) => {
		a.breakdown.forEach((b) => {
			total += b.total;
			displayData.push({
				name: a.name + ' - ' + b.name,
				value: b.total,
				color: b.color
			});
		});
	});

	let container: HTMLElement;

	//calculate the total value of all y

	const series = displayData
		.map((a) => ({
			name: a.name,
			y: a.value,
			color: a.color
		}))
		.filter((d) => d.y > 0);

	onMount(() => {
		const chart = Highcharts.chart({
			chart: {
				renderTo: 'container',
				type: 'pie',
				backgroundColor: undefined,
				plotBorderWidth: undefined,
				plotShadow: true,
				spacingBottom: 0,
				spacingTop: 0,
				spacingLeft: 0,
				spacingRight: 0,
				margin: [0, 0, 0, 0]
			} as ChartOptions,
			title: undefined,
			tooltip: {
				pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b><br>Value: <b>${point.y:,.2f}</b>'
			},
			accessibility: {
				point: {
					valueSuffix: '%'
				}
			},
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						//make the text smaller
						style: {
							fontSize: '10px'
						},
						enabled: true,
						distance: -50,
						formatter: function () {
							return (this.y || 0) / total >= 0.1 ? `${this.key}: ${this.percentage.toFixed(1)} %` : '';
						}
					}
				}
			} as PlotOptions,
			series: [
				{
					name: 'Asset Allocation',
					type: 'pie', // <- add this line
					colorByPoint: true,
					data: series
				} as SeriesPieOptions
			],
			credits: {
				enabled: false
			}
		});
	});
</script>

<div bind:this={container} id="container" class="h-64" />
