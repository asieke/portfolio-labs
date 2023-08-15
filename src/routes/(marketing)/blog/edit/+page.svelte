<script lang="ts">
	import axios from 'axios';
	import { addToast } from '$lib/stores/toasts';
	import SummaryArticle from '../components/SummaryArticle.svelte';

	import type { Blog } from '$types/blog';

	let blogs: Blog[] = [];
	let submitting = false;

	const sync = async () => {
		submitting = true;
		const { data } = await axios.post('/api/notion/get-blogs', { blogs });
		blogs = data.blogs;
		addToast('Blogs successfully synced/saved to notion', 'success');
	};
</script>

<div class="w-full px-16 py-8">
	<div class="grid w-1/2 grid-cols-2 gap-x-4">
		<button class="submit" disabled={submitting} on:click={sync}>Get Data From Notion & Save</button>
	</div>

	<div class="mt-8">
		{#each blogs as blog}
			<SummaryArticle {blog} />
		{/each}
	</div>
</div>
