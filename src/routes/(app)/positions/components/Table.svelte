<script lang="ts">
	import type { Position } from '$types/positions';
	import { formatNumber, formatCurrency, formatPercent } from '$lib/utils/format';

	export let positions: Position[] = [];
	export let onClick = (s: string) => {};

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
			cost_basis: positions.reduce((a, c) => a + c.cost_basis, 0)
		});
	}
</script>

<div>
	<table>
		<thead>
			<tr>
				<th class="w-1/12">Symbol</th>
				<th class="w-4/12">Name</th>
				<th class="w-1/12">Quantity</th>
				<th class="w-1/12">Price</th>
				<th class="w-1/12">Value</th>
				<th class="w-1/12">Cost Basis</th>
				<th class="w-1/12">Gain/Loss</th>
			</tr>
		</thead>
		<tbody>
			{#each sortedDisplayPositions as position}
				<tr>
					<td><button on:click={() => onClick(position.symbol)}>{position.symbol}</button></td>
					<td>{position.name || ''}</td>
					<td>{formatNumber(position.quantity)}</td>
					<td>{formatCurrency(position.price)}</td>
					<td>{formatCurrency(position.market_value)}</td>
					<td>{formatCurrency(position.cost_basis)}</td>
					<td>{formatPercent(position.market_value / position.cost_basis - 1)}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style lang="postcss">
	table {
		@apply mt-5 w-full rounded-xl text-xs text-slate-600;
	}
	td {
		@apply p-2;
	}

	th {
		@apply bg-primary-500 px-2 text-left text-white;
	}

	tr {
		@apply border-b-[1px] border-slate-200;
	}

	tr:nth-last-child(2) td {
		@apply bg-slate-100;
	}

	tr:last-child td {
		@apply bg-slate-200;
	}
</style>
