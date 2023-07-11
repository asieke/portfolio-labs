<script>
	import { formatCurrency, formatNumber, formatPercent } from '$lib/shared/formatters';

	export let displayPositions;
	export let showDetail;

	let sortedDisplayPositions;

	displayPositions.sort((a, b) => {
		if (a.symbol === 'CASHX') return 1; // Move 'CASHX' to the end
		if (b.symbol === 'CASHX') return -1; // Move 'CASHX' to the end
		return 0; // Don't change order
	});

	// Reactive statement - re-sort whenever displayPositions changes
	$: {
		sortedDisplayPositions = [...displayPositions];

		sortedDisplayPositions.sort((a, b) => {
			if (a.symbol === 'CASHX') return 1;
			if (b.symbol === 'CASHX') return -1;
			return 0;
		});

		sortedDisplayPositions.push({
			symbol: 'Total',
			name: 'Total',
			market_value: displayPositions.reduce((a, c) => a + c.market_value, 0),
			cost_basis: displayPositions.reduce((a, c) => a + c.cost_basis, 0)
		});
	}

	//sort displayPositions so that the last row is always CASHX
</script>

<div class="tableContainer">
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
					<td><button on:click={() => showDetail(position)}>{position.symbol || ''}</button></td>
					<td>{position.name || ''}</td>
					<td>{formatNumber(position.quantity || '')}</td>
					<td>{formatCurrency(position.price || '')}</td>
					<td>{formatCurrency(position.market_value || '')}</td>
					<td>{formatCurrency(position.cost_basis || '')}</td>
					<td>{formatPercent(position.market_value / position.cost_basis - 1)}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style lang="postcss">
	.tableContainer {
		@apply mt-5 rounded-xl;
	}
	table {
		@apply w-full text-xs text-slate-600;
	}

	th:first-child {
		@apply rounded-tl-lg;
	}

	th:last-child {
		@apply rounded-tr-lg;
	}

	tr:last-child td:first-child {
		@apply rounded-bl-lg;
	}

	tr:last-child td:last-child {
		@apply rounded-br-lg;
	}

	td {
		@apply py-2 px-2;
	}

	th {
		@apply py-4 px-2 text-left bg-primary-500 text-white;
	}

	tr {
		@apply border-slate-200 border-b-[1px];
	}

	tr:nth-last-child(2) td {
		@apply bg-slate-100;
	}

	tr:last-child td {
		@apply bg-slate-200;
	}
</style>
