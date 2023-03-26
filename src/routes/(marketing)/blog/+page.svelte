<script lang="ts">
	import { page } from '$app/stores';
	/** @type {import('./$types').PageData} */
	export let data: any;

	// //Get the params from the url

	const { data: posts } = data;

	// const tag = $page.params.tag;
	// extract the value between the ? and the = in the url
	const query = decodeURIComponent($page.url.search.split('=')[1]);
	// replace special url characters
</script>

<div class="max-w-4xl mx-auto p-3">
	<!-- <h1 class="font-extrabold mt-8 tracking-tight text-5xl text-center text-slate-900">
			Portfolio Labs Blog
		</h1>
		<p class="font-light text-slate-700 text-center m-8 pb-8">
			Get a handle on your finances with our expert advice and insights into the world of financial
			services. Discover the latest trends, strategies, and solutions to achieve your financial
			goals and secure your future.
		</p> -->

	{#each posts as post, i}
		<article class="py-0 px-8 bg-white rounded-lg border-gray-200 shadow-2xl mb-8 relative">
			<div class="grid grid-cols-1 md:grid-cols-[1fr,auto] overflow-y-clip h-80">
				<div class="pt-6">
					<span>
						{#each post.tags as tag}
							<a href={`/blog?tag=${tag}`} class="tag-link">{tag}</a>
						{/each}
					</span>
					<div class="text-sm text-gray-400 mt-4">{post.readableDate}</div>
					<h2 class="text-2xl font-bold tracking-tight text-gray-900 mb-4 mt-4 ">
						<a href={`/blog/${post.url}`}>{post.title}</a>
					</h2>

					<p class="mb-5 font-light text-gray-500 dark:text-gray-400 leading-7">
						{post.readableDescription}
					</p>
				</div>
				{#if post.hero_img}
					<div class="p-4 w-[360px] relative">
						<div class="absolute -right-20 top-8">
							<img
								class="h-72 w-[410px] shadow-xl rounded-xl object-cover"
								src={post.hero_img}
								alt={post.title}
							/>
						</div>
					</div>
				{/if}
			</div>
			<div class="h-20 flex justify-between items-center">
				<div class="flex items-center space-x-4">
					<img class="w-7 h-7 rounded-full" src={post.author_img} alt="Jese Leos avatar" />
					<span class="font-medium">{post.author}</span>
				</div>
				<a
					href={`/blog/${post.url}`}
					class="inline-flex items-center font-medium text-primary-600 hover:underline"
				>
					Read more →
				</a>
			</div>
		</article>
	{/each}
</div>

<style>
	.tag-link {
		@apply bg-primary-300 text-white text-xs p-1 px-2 rounded-md mr-2 -ml-1;
	}
	.tag-link:hover {
		@apply bg-primary-400;
	}
</style>
