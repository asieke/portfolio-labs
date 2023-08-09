<script lang="ts">
	import { Container } from '$components/layout';
	import Table from './components/Table.svelte';
	import Detail from './components/Detail.svelte';
	import type { Asset } from '$types/assets';
	import type { Position } from '$types/positions';

	import { dataToContext } from '$models/ai-process/positions';

	export let data;

	const { portfolios, positions, assets } = data;

	// Initialize portfolio ID and symbol with appropriate default values
	let portfolio_id = portfolios?.[0]?.id || -1;
	let asset: Asset | null = null;
	let position: Position | null = null;

	$: displayPositions = positions?.filter((position) => position.portfolio_id === portfolio_id);
	$: dataToContext(displayPositions);

	const onClick = (s: string | null) => {
		asset = assets?.find((a) => a.symbol === s) || null;
		position = positions?.find((p) => p.symbol === s && p.portfolios?.name === 'Total') || null;
	};
</script>

{#if portfolios && positions}
	{#if asset}
		<Detail onClick={() => (asset = null)} {asset} {position} />
	{:else}
		<Container>
			<div class="space-y-6">
				<h3>My Positions</h3>
				<select class="w-1/3" bind:value={portfolio_id}>
					{#each portfolios as portfolio}
						<option value={portfolio.id}>{portfolio.name}</option>
					{/each}
				</select>
				<Table positions={displayPositions} {onClick} />
			</div>
		</Container>
	{/if}
{/if}
