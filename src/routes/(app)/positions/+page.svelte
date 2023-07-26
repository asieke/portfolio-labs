<script lang="ts">
	import { Container } from '$components/layout';
	import Table from './components/Table.svelte';
	import Detail from './components/Detail.svelte';

	export let data;

	const { portfolios, positions } = data;

	// Initialize portfolio ID and symbol with appropriate default values
	let portfolio_id = portfolios?.[0]?.id || -1;
	let symbol: string | null = null;

	$: displayPositions = positions?.filter((position) => position.portfolio_id === portfolio_id);

	const onClick = (s: string | null) => {
		symbol = s;
	};
</script>

{#if portfolios && positions}
	{#if symbol}
		<Detail {symbol} onClick={() => (symbol = null)} />
	{:else}
		<Container>
			<h4>Positions</h4>
			<select class="w-full" bind:value={portfolio_id}>
				{#each portfolios as portfolio}
					<option value={portfolio.id}>{portfolio.name}</option>
				{/each}
			</select>
			<Table positions={displayPositions} {onClick} />
		</Container>
	{/if}
{/if}
