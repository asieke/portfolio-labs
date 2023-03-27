<!-- src/routes/_error.svelte -->
<script lang="ts">
	export let status: number;
	export let error: { message: string };
</script>

<main>
	<h1>Error {status}: {error.message}</h1>
	<p>Sorry, the page you requested could not be found.</p>
</main>
