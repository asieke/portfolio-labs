<script>
	import { onMount } from 'svelte';
	import Highcharts from 'highcharts/highstock';

	import { writable } from 'svelte/store';

	export let balances;
	export let visibility;

	let container;
	let chart;
	let labels = Object.keys(balances[0].benchmarks);

	function getData() {
		const data = [
			{
				name: 'Your Performance',
				data: balances.map((b) => [
					new Date(b.date).getTime(),
					(b.balance * balances[0].balance) / balances[0].balance
				]),
				lineWidth: 5
			}
		];

		labels.forEach((label, i) => {
			data.push({
				name: label,
				data: balances.map((b) => [
					new Date(b.date).getTime(),
					(b.benchmarks[label] * balances[0].balance) / balances[0].benchmarks[label]
				]),
				dashStyle: 'dash',
				visible: visibility[i]
			});
		});

		return data;
	}

	onMount(async () => {
		const data = getData();

		chart = Highcharts.stockChart(container, {
			rangeSelector: {
				enabled: false
			},
			title: {},
			series: data,
			tooltip: {
				valueDecimals: 2, // Set the number of decimal places in the tooltip
				valuePrefix: '$' // Add a dollar sign in front of the values in the tooltip
			},
			yAxis: {
				labels: {
					//add commas and dollar signs

					formatter: function () {
						return '$' + this.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
					}
				}
			}
		});
	});

	$: {
		if (chart && visibility) {
			labels.forEach((label, i) => {
				if (chart.series[i + 1]) {
					chart.series[i + 1].setVisible(visibility[i]);
				}
			});
		}

		if (chart && balances) {
			const data = getData();
			chart.series.forEach((s, i) => {
				if (data[i]) {
					s.setData(data[i].data);
				}
			});
			// Update the navigator's range
			const minDate = new Date(balances[0].date).getTime();
			const maxDate = new Date(balances[balances.length - 1].date).getTime();
			chart.xAxis[0].setExtremes(minDate, maxDate);
		}
	}
</script>

<div class="h-[440px]" bind:this={container} />
