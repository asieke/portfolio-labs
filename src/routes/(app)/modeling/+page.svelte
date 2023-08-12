<script lang="ts">
	import { Container } from '$components/layout';

	export let data;
</script>

<Container>
	<h3>Modeling Impact</h3>
	<span>There are {data.benchmarkPrices.length} items</span>
</Container>
