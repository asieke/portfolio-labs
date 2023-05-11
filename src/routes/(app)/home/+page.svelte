<script lang="ts">
	import { Container } from '$components/layout';
	export let data;
	$: ({ supabase, session } = data);
	console.log(data);
</script>

<div class="grid grid-cols-1">
	<Container>Home</Container>
</div>

<style lang="postcss">
</style>
