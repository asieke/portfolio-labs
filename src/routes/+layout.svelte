<script lang="ts">
	import '../app.css';
	import { Nav, Footer } from '$components/layout';
</script>

<div class="flex min-h-full flex-col">
	<div class="bg-gray-800 pb-32 dark:bg-black-800">
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
		// On page load or when changing themes, best to add inline in `head` to avoid FOUC
		console.log('DARK MODE: ', localStorage.getItem('darkMode'));

		if (localStorage.getItem('darkMode') === 'true') {
			console.log('true');
			document.documentElement.classList.add('dark');
		} else {
			console.log('false');
			document.documentElement.classList.remove('dark');
		}
	</script>
</svelte:head>

<style>
</style>
