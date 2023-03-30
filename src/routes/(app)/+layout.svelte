<script lang="ts">
	import '$styles/app.css';

	import { Nav, Footer } from '$components/layout';
</script>

<div class="min-h-full">
	<Nav />

	<main class="-mt-16 pb-8">
		<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
			<slot />
		</div>
	</main>
	<Footer />
</div>

<svelte:head>
	<script>
		// On page load or when changing themes, best to add inline in `head` to avoid FOUC
		if (
			localStorage.getItem('color-theme') === 'dark' ||
			(!('color-theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	</script>
</svelte:head>

<style>
</style>
