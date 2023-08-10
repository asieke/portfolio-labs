<script lang="ts">
	import { Nav, Footer, Chat } from '$components/layout';
</script>

<div class="mt-4 h-[64px]">
	<Nav />
</div>

<div class="mx-auto min-h-[calc(100vh-100px)] max-w-7xl px-12 py-8">
	<slot />
</div>

<div class="h-[36px]">
	<Chat />
	<Footer />
</div>

<svelte:head>
	<script>
		if (localStorage.getItem('darkMode') === 'true') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	</script>
</svelte:head>

<style>
</style>
