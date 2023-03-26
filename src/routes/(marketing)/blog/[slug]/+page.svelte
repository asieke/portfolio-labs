<script lang="ts">
	import '$styles/markdown.css';
	import Container from '../../components/Container.svelte';

	import { page } from '$app/stores';
	/** @type {import('./$types').PageData} */
	export let data: any;

	const date = new Date(data.date);
	const readableDate = date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		timeZone: 'UTC'
	});

	console.log(data);
</script>

<div class="max-w-4xl mx-auto p-3">
	<article
		class="py-0 px-8 bg-white rounded-lg border-gray-200 shadow-2xl mb-16 pb-10 pt-10 relative"
	>
		<time datetime={data.date} class="text-slate-500 font-light">{readableDate}</time>
		<h1 class="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl mt-2 mb-4">
			{data.title}
		</h1>
		<div class="md p-4">
			{@html data.html}
		</div>
	</article>
</div>
