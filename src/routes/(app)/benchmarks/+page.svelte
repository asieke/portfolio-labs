<script lang="ts">
	import { Container } from '$components/layout';

	export let data;

	console.log(data);
</script>

<div class="grid grid-cols-1 lg:grid-cols-rightcol gap-4">
	<div class="row-span-2">
		<Container>Hello</Container>
	</div>
	<div class="space-y-4">
		<Container>Accounts</Container>
	</div>
</div>

<style lang="postcss">
</style>
