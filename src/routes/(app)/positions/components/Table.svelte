<script lang="ts">
	import type { Position } from '$types/positions';
	import { formatNumber, formatCurrency, formatPercent, color } from '$lib/utils/format';

	export let positions: Position[] = [];
	export let onClick = (s: string) => {};

	let dollarUnit = true;

	let sortedDisplayPositions: Position[] = [];

	$: {
		sortedDisplayPositions = [...positions];

		sortedDisplayPositions.sort((a, b) => {
			if (a.symbol === 'CASHX') return 1;
			if (b.symbol === 'CASHX') return -1;
			return 0;
		});

		sortedDisplayPositions.push({
			symbol: 'Total',
			name: 'Total',
			market_value: positions.reduce((a, c) => a + c.market_value, 0),
			cost_basis: positions.reduce((a, c) => a + c.cost_basis, 0),
			market_value_1d: positions.reduce((a, c) => a + c.market_value_1d, 0),
			market_value_7d: positions.reduce((a, c) => a + c.market_value_7d, 0)
		});
	}
</script>

<div>
	<table>
		<thead>
			<tr class="text-left">
				<th class="w-1/12" rowspan="2">Symbol</th>
				<th class="w-4/12" rowspan="2">Name</th>
				<th class="w-1/12" rowspan="2">Quantity</th>
				<th class="w-1/12" rowspan="2">Price</th>
				<th class="w-1/12" rowspan="2">Value</th>
				<th class="w-1/12" rowspan="2">Cost Basis</th>
				<th class="w-1/12 text-center" colspan="3">
					<button on:click={() => (dollarUnit = !dollarUnit)}>Gain/Loss {dollarUnit ? '($)' : '(%)'}</button>
				</th>
			</tr>
			<tr class="text-left">
				<th class="w-1/12">Total</th>
				<th class="w-1/12">Last 7</th>
				<th class="w-1/12">Yesterday</th>
			</tr>
		</thead>
		<tbody>
			{#each sortedDisplayPositions as position}
				<tr>
					<td class="whitespace-nowrap"><button on:click={() => onClick(position.symbol)}>{position.symbol}</button></td>
					<td>{position.name || ''}</td>
					<td>{formatNumber(position.quantity, 0)}</td>
					<td>{formatCurrency(position.price, 0)}</td>
					<td>{formatCurrency(position.market_value, 0)}</td>
					{#if position.symbol !== 'CASHX'}
						<td>{formatCurrency(position.cost_basis, 0)}</td>
						{#if dollarUnit}
							<td class={color(position.market_value - position.cost_basis)}>{formatCurrency(position.market_value - position.cost_basis, 0)}</td>
							<td class={color(position.market_value - position.market_value_1d)}>{formatCurrency(position.market_value - position.market_value_1d, 0)}</td>
							<td class={color(position.market_value - position.market_value_7d)}>{formatCurrency(position.market_value - position.market_value_7d, 0)}</td>
						{:else}
							<td class={color(position.market_value / position.cost_basis - 1)}>{formatPercent(position.market_value / position.cost_basis - 1, 1)}</td>
							<td class={color(position.market_value / position.market_value_1d - 1)}>{formatPercent(position.market_value / position.market_value_1d - 1, 1)}</td>
							<td class={color(position.market_value / position.market_value_7d - 1)}>{formatPercent(position.market_value / position.market_value_7d - 1, 1)}</td>
						{/if}
					{:else}
						<td colspan="4" />
					{/if}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style lang="postcss">
	table {
		@apply mt-5 w-full rounded-xl text-slate-500;
	}
	td {
		@apply p-2;
	}

	th {
		@apply bg-primary-500 px-2 py-1  text-white dark:bg-primary-800;
	}

	tbody > tr {
		@apply border-b-[1px] border-slate-200 dark:border-slate-700;
	}

	tr:nth-last-child(2) td {
		@apply bg-slate-100 dark:bg-slate-800;
	}

	tr:last-child td {
		@apply bg-slate-200 dark:bg-slate-900;
	}
</style>
