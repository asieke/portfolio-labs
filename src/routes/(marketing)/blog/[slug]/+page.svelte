<script lang="ts">
	import '$styles/markdown.css';
	import Container from '../../components/Container.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;

	const date = new Date(data.date);
	const readableDate = date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		timeZone: 'UTC'
	});

	const readLength = Math.ceil(data.md.split(' ').length / 130);

	console.log(data);
</script>

<div class="max-w-4xl mx-auto p-3">
	<article
		class="py-0 px-12 bg-white rounded-lg border-gray-200 shadow-2xl mb-16 pb-10 pt-10 relative"
	>
		<div class="flex flex-row justify-between">
			<div class="flex flex-row">
				<img class="profile" src={data.author_img} alt={data.author} />
				<div class="ml-2">
					<p class="h-6">{data.author}</p>
					<p class="h-4 text-slate-400 text-sm ">{readableDate} · {readLength} minute read</p>
				</div>
			</div>
			<div>
				<a
					href={`/blog`}
					class="inline-flex items-center font-medium text-primary-600 hover:underline"
				>
					← All Posts
				</a>
			</div>
		</div>
		<h1 class="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl mt-5 mb-4">
			{data.title}
		</h1>
		<div class="md">
			{@html data.html}
		</div>
	</article>
</div>

<style>
	img.profile {
		@apply h-9 w-9 m-1 p-0.5 rounded-full shadow-md object-cover ring-2 ring-primary-500;
	}
</style>
