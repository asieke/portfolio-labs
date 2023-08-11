<script lang="ts">
	import SummaryArticle from './components/SummaryArticle.svelte';
	import { IconCircleHome } from '$components/svg';
	import { page } from '$app/stores';
	import type { Blog } from '$types/blog';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	export const snapshot = {
		capture: () => {
			return {
				currentPage,
				selected,
				author,
				total
			};
		},
		restore: (value) => {
			if (!value) return;
			currentPage = value.currentPage;
			selected = value.selected;
			author = value.author;
			total = value.total;
			filteredBlogs = filter();
		}
	};

	export let data;
	const { blogs, types } = data;

	let currentPage = 0;
	let per = 5;
	let total = 0;

	let selected = 'All';
	let author: string | null = null;

	const filter = () => {
		let temp: Blog[];
		if (author) {
			temp = blogs.filter((blog) => blog.author === author);
		} else {
			temp = selected === 'All' ? blogs : blogs.filter((blog) => blog.type === selected);
		}
		total = temp.length;
		return temp.filter((_, index) => index >= currentPage * per && index < (currentPage + 1) * per);
	};

	let filteredBlogs = filter();

	onMount(async () => {
		selected = $page.url.searchParams.get('type') || 'All';
		currentPage = parseInt($page.url.searchParams.get('page') || '0');
		author = $page.url.searchParams.get('author') || null;

		// history.replaceState(null, '', '/blog');
		//replace the page in the url bar with blog but don't push to the location history

		filteredBlogs = filter();
	});

	const onPageClick = (p: number) => {
		// goto(author ? `?author=${author}&page=${p}` : `?type=${selected}&page=${p}`);
		currentPage = p;
		filteredBlogs = filter();
	};

	const onTypeClick = (t: string) => {
		// goto(`?type=${t}&page=0`);
		//push selected to the location history so user can click back button
		selected = t;
		currentPage = 0;
		filteredBlogs = filter();
	};

	const onLinkClick = async (l: string) => {
		goto('/blog/' + l + '?ref=true');
	};

	const onAuthorClick = (a: string | null) => {
		// goto(a ? `?author=${a}&page=0` : '?page=0');
		//push selected to the location history so user can click back button
		author = a;
		currentPage = 0;
		filteredBlogs = filter();
	};
</script>

<div class="mx-8 min-h-screen border-l-[1px] border-dotted border-slate-400 pb-64 pt-20 lg:mx-auto lg:max-w-4xl">
	<div class="relative px-8">
		<div class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
			<span class="text-primary-500 dark:text-primary-200">{'[on]'}</span> Portfolio Management.
		</div>
		<a href="/" class="absolute -left-6 top-0 flex h-12 w-12 items-center justify-center hover:text-primary-400"><IconCircleHome class="h-10 w-10" /></a>

		<div class="mt-10 rounded-sm text-xl leading-8 tracking-tight text-slate-500">
			Making sense of all things portfolio management, asset allocation, managing long term risk, and tax advantaged investing.
		</div>
	</div>

	<div class="hidden sm:block">
		<div class="mb-4 mt-8 grid w-full grid-cols-4 flex-row pl-8">
			{#if !author}
				<div class="col-span-3">
					{#each types as type}
						<button on:click={() => onTypeClick(type)} class="{type === selected ? 'selected' : ''} pill hover:text-primary-500">{type}</button>
					{/each}
				</div>
			{:else}
				<div class="col-span-3 space-x-2">
					<span class="text-sm font-semibold">Author:</span>
					<button on:click={() => onAuthorClick(null)} class="pill space-x-2 bg-primary-500 text-white hover:bg-slate-400"><span>{author}</span><span>⛌</span></button>
				</div>
			{/if}
			<div class="flex items-center justify-end space-x-2 text-sm font-semibold">
				{#if currentPage > 0}
					<button class="px-1 hover:text-primary-500" on:click={() => onPageClick(currentPage - 1)}>❮</button>
				{/if}
				<span>Page {currentPage + 1} of {Math.ceil(total / per)}</span>
				{#if currentPage < Math.ceil(total / per) - 1}
					<button class="w-3 hover:text-primary-500" on:click={() => onPageClick(currentPage + 1)}>❯</button>
				{:else}
					<button class="w-3 hover:text-primary-500" disabled />
				{/if}
			</div>
		</div>
	</div>

	{#each filteredBlogs as blog}
		<SummaryArticle {blog} {onTypeClick} {onAuthorClick} {onLinkClick} />
	{/each}
</div>

<style lang="postcss">
	.pill {
		@apply inline-block rounded-full px-3 py-1 text-sm font-semibold;
	}

	.pill.selected {
		@apply bg-primary-500 text-white;
	}

	/* select {
		@apply w-full bg-slate-50;
	} */
</style>
