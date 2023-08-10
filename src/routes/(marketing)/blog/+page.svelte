<script lang="ts">
	import SummaryArticle from './components/SummaryArticle.svelte';

	export let data;
	const { blogs } = data;
	console.log(blogs);
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

	{#each blogs as blog}
		<SummaryArticle {blog} />
	{/each}
</div>
