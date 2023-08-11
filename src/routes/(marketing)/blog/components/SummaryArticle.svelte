<script lang="ts">
	import type { Blog } from '$types/blog';
	import { getDisplayDate } from '$lib/utils/dates';

	export let blog: Blog;
	export let onTypeClick = (t: string) => {};
	export let onAuthorClick = (a: string) => {};
</script>

<div class="-ml-8 -mr-8 mb-16 rounded-none bg-white px-8 shadow-lg dark:bg-slate-800 lg:rounded-xl">
	<div class="-ml-[1px] border-l-[1px] border-dotted border-slate-400 px-8">
		<div class="-ml-8 -mr-8 grid grid-cols-2 bg-white py-8 dark:bg-slate-800 lg:grid-cols-4">
			<!-- Blog Type -->
			<div class="order-1 lg:order-1 lg:col-span-3">
				<div class="-ml-[2px] border-l-[3px] border-primary-500 pl-8 dark:border-primary-200">
					<button on:click={() => onTypeClick(blog.type)} class="cursor-pointer font-semibold tracking-tight text-primary-500 dark:text-primary-200">{blog.type}</button>
				</div>
			</div>
			<!-- Blog Date -->
			<div class="order-2 text-right lg:order-2 lg:col-span-1 lg:pl-0 lg:text-left">
				<p class="font-semibold tracking-tight text-slate-500 dark:text-slate-300">{getDisplayDate(blog.date)}</p>
			</div>
			<!-- Blog Description -->
			<div class="order-4 col-span-2 px-8 pt-5 lg:order-3 lg:col-span-3">
				<h1 class="mb-3"><a href="/blog/{blog.url}">{blog.title}</a></h1>
				<p class="text-lg leading-7 text-slate-500 dark:text-slate-300">
					{blog.description}
				</p>
				<a class="mt-4 block cursor-pointer text-primary-500 hover:font-bold" href="/blog/{blog.url}">Read More →</a>
			</div>
			<!-- Author Description -->
			<div class="order-3 col-span-2 pl-8 lg:order-4 lg:col-span-1 lg:pl-0">
				<button class="mt-4 flex flex-row items-center" on:click={() => onAuthorClick(blog.author)}>
					<img src={blog.author_img} alt="" class="h-10 w-10 rounded-full" />
					<div class="flex flex-col pl-2.5 text-left">
						<span class="text-sm font-semibold">{blog.author}</span>
						<span class="text-sm text-slate-500 dark:text-slate-400">CEO / Co-Founder</span>
					</div>
				</button>
			</div>
		</div>
	</div>
</div>
