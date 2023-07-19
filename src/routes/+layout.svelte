<script lang="ts">
	import '../app.css';
	import { Nav } from '$components/layout';
</script>

<div class="min-h-full">
	<div class="bg-gray-800 pb-32">
		<Nav />
		<!-- <header class="py-10">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<h1 class="text-3xl font-bold tracking-tight text-white">Dashboard</h1>
			</div>
		</header> -->
	</div>

	<main class="-mt-24">
		<div class="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
			<slot />
		</div>
	</main>
</div>

<svelte:head>
	<script>
		// On page load or when changing themes, best to add inline in `head` to avoid FOUC
		if (
			localStorage.getItem('color-theme') === 'dark' ||
			(!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	</script>
</svelte:head>

<style>
</style>
