<script lang="ts">
	import type { Balances } from '$lib/types';
	import { formatPercent } from '$lib/shared/formatters';

	export let balances: Balances[] = [];

	type YearDetail = {
		minDate: string;
		maxDate: string;
		startPortfolios: number[];
		endPortfolios: number[];
		flows: number;
	};
	let years: Record<string, YearDetail> = {};

	let labels = Object.keys(balances[0].benchmarks as Record<string, number>);

	for (let i = 0; i < balances.length; i++) {
		//get the year part of balances.date
		let year = balances[i].date.substring(0, 4);

		if (!years[year]) {
			years[year] = {
				minDate: '9999-99-99',
				maxDate: '0000-00-00',
				startPortfolios: [],
				endPortfolios: [],
				flows: 0
			};
		}

		years[year].flows += balances[i].flows;

		if (balances[i].date < years[year].minDate) {
			years[year].minDate = balances[i].date;
			years[year].startPortfolios = [
				balances[i].balance,
				...labels.map((label) => balances[i].benchmarks[label])
			];
		}

		if (balances[i].date > years[year].maxDate) {
			years[year].maxDate = balances[i].date;
			years[year].endPortfolios = [
				balances[i].balance,
				...labels.map((label) => balances[i].benchmarks[label])
			];
		}
	}

	labels = ['My Portfolio', ...labels];

	const displayPct = (i: number, y: string) => {
		return formatPercent(
			(years[y].endPortfolios[i] - years[y].flows * 0.5) /
				(years[y].startPortfolios[i] + years[y].flows * 0.5) -
				1
		);
	};
</script>

<table>
	<thead>
		<tr>
			<th>Year</th>
			{#each labels as label (label)}
				<th>{label}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each Object.entries(years) as [year, data] (year)}
			<tr>
				<td>{year}</td>
				{#each data.endPortfolios as value, i}
					<td>{displayPct(i, year)}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		@apply w-full text-xs;
	}
	td {
		@apply text-center w-[10%];
	}
</style>
