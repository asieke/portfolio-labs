<script lang="ts">
	import { Container } from '$components/layout';
	import AddPositions from './components/AddPositions.svelte';
	import AddTransactions from './components/AddTransactions.svelte';

	export let data;

	const { accounts, portfolios, positions } = data;

	console.log(accounts, portfolios, positions);
</script>

<!-- <div class="grid grid-cols-1 lg:grid-cols-rightcol gap-4">
	<div class="row-span-2"> -->
<Container />
<!-- </div>
	<div class="space-y-4">
		<Container>
			<AddPositions {supabase} {accountID} />
		</Container>
		<Container>
			<AddTransactions {supabase} {accountID} />
		</Container>
	</div>
</div> -->
