<script lang="ts">
	import { onMount } from 'svelte';
	import { formatCurrency, formatPercent } from '$lib/shared/formatters';
	import type { AssetAllocationRow } from '$lib/types';
	export let detailRow: AssetAllocationRow;
	export let display: 'chart' | 'table' | 'both' = 'both';
	import Tooltip from './Tooltip.svelte';
	import Detail from './Detail.svelte';

	const T = 0;

	const { market_value } = detailRow;
	const { equity, fixedIncome, realEstate, other } = detailRow.asset_class;

	const data: {
		category: string;
		label: string;
		value: number;
		color: string;
		width?: string;
		pct?: string;
	}[] = [];

	data[0] = {
		category: 'Equity',
		label: 'US',
		value: equity.us,
		color: 'bg-cyan-100',
		pct: formatPercent(equity.us / equity.total)
	};

	data[1] = {
		category: 'Equity',
		label: 'Developed',
		value: equity.developed,
		color: 'bg-cyan-200',
		pct: formatPercent(equity.developed / equity.total)
	};

	data[2] = {
		category: 'Equity',
		label: 'Emerging',
		value: equity.emerging,
		color: 'bg-cyan-300',
		pct: formatPercent(equity.emerging / equity.total)
	};

	data[3] = {
		category: 'Equity',
		label: 'Other',
		value: equity.other,
		color: 'bg-cyan-400',
		pct: formatPercent(equity.other / equity.total)
	};

	data[4] = {
		category: 'Equity',
		label: 'Total',
		value: equity.total,
		color: 'bg-cyan-500',
		pct: formatPercent(equity.total / equity.total)
	};

	data[5] = {
		category: 'Fixed-Income',
		label: 'General',
		value: fixedIncome.general,
		color: 'bg-blue-100',
		pct: formatPercent(fixedIncome.general / fixedIncome.total)
	};

	data[6] = {
		category: 'Fixed-Income',
		label: 'Treasuries',
		value: fixedIncome.usTreasuries,
		color: 'bg-blue-200',
		pct: formatPercent(fixedIncome.usTreasuries / fixedIncome.total)
	};

	data[7] = {
		category: 'Fixed-Income',
		label: 'Munis',
		value: fixedIncome.usMunis,
		color: 'bg-blue-300',
		pct: formatPercent(fixedIncome.usMunis / fixedIncome.total)
	};

	data[8] = {
		category: 'Fixed-Income',
		label: 'Corporate',
		value: fixedIncome.usCorporates,
		color: 'bg-blue-400',
		pct: formatPercent(fixedIncome.usCorporates / fixedIncome.total)
	};

	data[9] = {
		category: 'Fixed-Income',
		label: 'Total',
		value: fixedIncome.total,
		color: 'bg-blue-500',
		pct: formatPercent(fixedIncome.total / fixedIncome.total)
	};

	data[10] = {
		category: 'Real-Estate',
		label: 'US',
		value: realEstate.us,
		color: 'bg-green-100',
		pct: formatPercent(realEstate.us / realEstate.total)
	};

	data[11] = {
		category: 'Real-Estate',
		label: 'Global',
		value: realEstate.global,
		color: 'bg-green-200',
		pct: formatPercent(realEstate.global / realEstate.total)
	};

	data[12] = {
		category: 'Real-Estate',
		label: 'Total',
		value: realEstate.total,
		color: 'bg-green-500',
		pct: formatPercent(realEstate.total / realEstate.total)
	};

	data[13] = {
		category: 'Other',
		label: 'Commodities',
		value: other.commodities,
		color: 'bg-yellow-100',
		pct: formatPercent(other.commodities / other.total)
	};

	data[14] = {
		category: 'Other',
		label: 'Crypto',
		value: other.crypto,
		color: 'bg-yellow-200',
		pct: formatPercent(other.crypto / other.total)
	};

	data[15] = {
		category: 'Other',
		label: 'Cash',
		value: other.cash,
		color: 'bg-yellow-300',
		pct: formatPercent(other.cash / other.total)
	};

	data[16] = {
		category: 'Other',
		label: 'Other',
		value: other.other,
		color: 'bg-yellow-400',
		pct: formatPercent(other.other / other.total)
	};

	data[17] = {
		category: 'Other',
		label: 'Total',
		value: other.total,
		color: 'bg-yellow-500',
		pct: formatPercent(other.total / other.total)
	};

	const chartData = data.filter((row) => row.label !== 'Total' && row.value / market_value > 0.005);
	chartData.forEach((row) => {
		row.width = Math.round((row.value / market_value) * 100).toString() + '%';
	});

	const counts: Record<string, number> = {};
	chartData.forEach((row) => (counts[row.category] = (counts[row.category] || 0) + 1));

	let tooltips = {
		Equity: false,
		'Fixed-Income': false,
		'Real-Estate': false,
		Other: false
	};

	let toolData = {
		Equity: data.slice(0, 5),
		'Fixed-Income': data.slice(5, 10),
		'Real-Estate': data.slice(10, 13),
		Other: data.slice(13, 18)
	};

	console.log(detailRow);

	onMount(() => {
		Object.keys(tooltips).forEach((key) => {
			// Find all the elements with the class
			const elements = document.querySelectorAll(`.${key}`);

			// Add event listeners to each element
			elements.forEach((el) => {
				el.addEventListener('mouseover', () => {
					tooltips = { ...tooltips, [key]: true };
				});
				el.addEventListener('mouseout', () => {
					tooltips = { ...tooltips, [key]: false };
				});
			});
		});
	});
</script>

{#if display === 'chart' || display === 'both'}
	<table class="w-full">
		<tr class="h-14">
			{#if counts['Equity']}
				<td class="Equity bg-cyan-500 header-cell" colspan={counts['Equity']}>
					{#if equity.total > 0.03 * market_value}
						Equity<br />
						{formatPercent(equity.total / market_value)}
					{/if}
					<Tooltip color="bg-cyan-500" status={tooltips['Equity']} data={toolData['Equity']} />
				</td>
			{/if}
			{#if counts['Fixed-Income']}
				<td class="Fixed-Income bg-blue-500 header-cell" colspan={counts['Fixed-Income']}>
					{#if fixedIncome.total > 0.03 * market_value}
						Fixed Income<br />
						{formatPercent(fixedIncome.total / market_value)}
					{/if}
					<Tooltip
						color="bg-blue-500"
						status={tooltips['Fixed-Income']}
						data={toolData['Fixed-Income']}
					/>
				</td>
			{/if}
			{#if counts['Real-Estate']}
				<td class="Real-Estate bg-green-500 header-cell" colspan={counts['Real-Estate']}>
					{#if realEstate.total > 0.03 * market_value}
						Real Estate<br />
						{formatPercent(realEstate.total / market_value)}
					{/if}
					<Tooltip
						color="bg-green-500"
						status={tooltips['Real-Estate']}
						data={toolData['Real-Estate']}
					/>
				</td>
			{/if}
			{#if counts['Other']}
				<td class="Other bg-yellow-500 header-cell" colspan={counts['Other']}>
					{#if other.total > 0.03 * market_value}
						Other<br />
						{formatPercent(other.total / market_value)}
					{/if}
					<Tooltip color="bg-yellow-500" status={tooltips['Other']} data={toolData['Other']} />
				</td>
			{/if}
		</tr>
		<tr class="h-14">
			{#each chartData as { label, value, color, width, pct, category }, i}
				<td class="{category} {color} relative chart-cell" {width}>
					{value / market_value > 0.03 ? label : ''}<br />
					{value / market_value > 0.03 ? pct : ''}<br />
				</td>
			{/each}
		</tr>
	</table>
{/if}

{#if display === 'table' || display === 'both'}
	<table class="w-full">
		<tr class="h-12 bg-gray-500 text-white font-semibold">
			<td>Category</td>
			<td>Name</td>
			<td>Market Value</td>
			<td>% of Asset Class</td>
			<td>% of Total</td>
		</tr>
		{#each data as { label, value, color, width, pct }, i}
			<tr class="h-8 {color}">
				{#if i === 0}
					<td rowspan="5" class="bg-cyan-500 text-white">Equities</td>
				{:else if i === 5}
					<td rowspan="5" class="bg-blue-500 text-white">Fixed Income</td>
				{:else if i === 10}
					<td rowspan="3" class="bg-green-500 text-white">Real Estate</td>
				{:else if i === 13}
					<td rowspan="5" class="bg-yellow-500 text-white">Other</td>
				{/if}
				<td>{label}</td>
				<td>{formatCurrency(value)}</td>
				<td>{pct}</td>
				<td>{formatPercent(value / market_value)}</td>
			</tr>
		{/each}
	</table>
{/if}

<style>
	table {
		@apply text-xs text-center mb-10;
	}

	.chart-cell {
		@apply cursor-pointer;
	}

	.header-cell {
		@apply cursor-pointer text-white font-semibold relative;
	}
</style>
