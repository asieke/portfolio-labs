<script lang="ts">
	import '../app.css';
	import { Nav, Footer } from '$components/layout';
	import { LOGNAME } from '$env/static/private';
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

<style>
</style>
