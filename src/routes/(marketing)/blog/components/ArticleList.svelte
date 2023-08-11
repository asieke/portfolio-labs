<script lang="ts">
	import SummaryArticle from './SummaryArticle.svelte';
	import type { Blog } from '$types/blog';

	let page = 0;
	let per = 2;
	let total = 0;

	const filter = () => {
		const temp = selected === 'All' ? blogs : blogs.filter((blog) => blog.type === selected);
		total = temp.length;
		return temp.filter((_, index) => index >= page * per && index < (page + 1) * per);
	};

	export let types: string[];
	export let blogs: Blog[];
	export let selected: string;

	$: filteredBlogs = filter();
	$: console.log(filteredBlogs);

	const onPageClick = (p: number) => {
		page = p;
		filteredBlogs = filter();
	};
</script>

<div class="mx-8 min-h-screen border-l-[1px] border-dotted border-slate-400 pb-64 pt-20 lg:mx-auto lg:max-w-4xl">
	<div class="px-8">
		<div class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
			<span class="text-primary-500 dark:text-primary-200">{'[on]'}</span> Portfolio Management.
		</div>
		<div class="mt-10 rounded-sm text-xl leading-8 tracking-tight text-slate-500">
			Making sense of all things portfolio management, asset allocation, managing long term risk, and tax advantaged investing.
		</div>
	</div>

	<div class="hidden sm:block">
		<div class="mb-4 mt-8 grid w-full grid-cols-4 flex-row pl-8">
			<div class="col-span-3">
				{#each types as type}
					<a class="{type === 'All' ? 'selected' : ''} pill" href="/blog/{type}">{type}</a>
				{/each}
			</div>
			<div class="flex items-center justify-end space-x-2 text-sm font-semibold">
				{#if page > 0}
					<button class="px-1" on:click={() => onPageClick(page - 1)}>❮</button>
				{/if}
				<span>Page {page + 1} of {Math.ceil(total / per)}</span>
				{#if page < Math.ceil(total / per) - 1}
					<button class="w-3" on:click={() => onPageClick(page + 1)}>❯</button>
				{:else}
					<button class="w-3" disabled />
				{/if}
			</div>
		</div>
	</div>

	{#each filteredBlogs as blog}
		<SummaryArticle {blog} />
	{/each}
</div>

<style lang="postcss">
	.pill {
		@apply inline-block rounded-full px-3 py-1 text-sm font-semibold text-slate-600 hover:text-primary-500;
	}

	.pill.selected {
		@apply bg-primary-500 text-white;
	}

	/* select {
		@apply w-full bg-slate-50;
	} */
</style>
