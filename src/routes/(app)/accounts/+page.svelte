<script lang="ts">
	import { Container } from '$components/layout';
	import AddPositions from './components/AddPositions.svelte';
	import AddTransactions from './components/AddTransactions.svelte';

	export let data;
	const { supabase } = data;
	const accountID = data.accounts[0].id;
</script>

<div class="grid grid-cols-1 lg:grid-cols-rightcol gap-4">
	<div class="row-span-2">
		<Container>
			Account: {data.accounts[0].name}
		</Container>
	</div>
	<div class="space-y-4">
		<Container>
			<AddPositions {supabase} {accountID} />
		</Container>
		<Container>
			<AddTransactions {supabase} portfolioID={92} />
		</Container>
	</div>
</div>
