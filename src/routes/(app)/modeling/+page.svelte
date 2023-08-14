<script lang="ts">
	import { Container } from '$components/layout';
	import type { BenchmarkPrice } from '$types/benchmarks';

	export let data;
	const { benchmarkPrices } = data;
</script>

<Container>
	<h3>Modeling Impact</h3>
	<span>There are {benchmarkPrices.length} items</span>

	<!-- Create a table that displays the first 3 items in the data array -->

	<table>
		<thead>
			<tr>
				<th>id</th>
				<th>date</th>
				<th>price</th>
			</tr>
		</thead>
		<tbody>
			{#each benchmarkPrices as item, i}
				{#if i < 10}
					<tr>
						<td>{item.asset_id}</td>
						<td>{item.date}</td>
						<td>{item.price}</td>
					</tr>
				{/if}
			{/each}
		</tbody>
	</table>
</Container>
