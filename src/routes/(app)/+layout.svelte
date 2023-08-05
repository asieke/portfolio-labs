<script lang="ts">
	import '$styles/base.css';
	import '$styles/app.css';
	import { Nav, Footer } from '$components/layout';
</script>

<div class="flex min-h-full flex-col bg-gray-100 dark:bg-dark-700">
	<div class="bg-gray-800 pb-32 dark:bg-dark-800">
		<Nav />
	</div>

	<main class="-mt-24 flex-grow">
		<div class="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
			<slot />
		</div>
	</main>

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
