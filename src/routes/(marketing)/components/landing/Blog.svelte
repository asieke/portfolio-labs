<script lang="ts">
	import { onMount } from 'svelte';
	import { BlogCard } from './';
	import { getBlogs } from '$models/blog';
	import type { Blog } from '$types/blog';
	import { page } from '$app/stores';

	const { supabase } = $page.data;
	let blogs: Blog[] = [];

	onMount(async () => {
		blogs = await getBlogs(supabase, 3);
	});
</script>

<div class="py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the <span class="text-primary-500">[blog]</span></h2>
			<p class="mt-6 text-lg leading-8 text-gray-600">Making sense of all things portfolio management, asset allocation, managing long term risk, and tax advantaged investing.</p>
		</div>
		<div class="mx-auto mt-12 grid grid-cols-1 gap-x-3 gap-y-6 md:grid-cols-3 lg:gap-x-6">
			{#each blogs as blog}
				<BlogCard {blog} />
			{/each}
		</div>
	</div>
</div>
