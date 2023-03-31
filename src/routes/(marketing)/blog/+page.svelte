<script lang="ts">
	import { page } from '$app/stores';
	/** @type {import('./$types').PageData} */
	export let data: any;

	// //Get the params from the url

	const { data: posts } = data;

	console.log(posts);

	// const tag = $page.params.tag;
	// extract the value between the ? and the = in the url
	const query = decodeURIComponent($page.url.search.split('=')[1]);
	// replace special url characters
</script>

<div class="max-w-4xl mx-auto p-3 mt-24">
	{#each posts as post, i}
		<article>
			<div class="grid grid-cols-1 md:grid-cols-2 space-y-4 md:space-y-0">
				<span>
					{#each post.tags as tag}
						<a href={`/blog?tag=${tag}`} class="tag-link">{tag}</a>
					{/each}
				</span>
				<span class="text-left md:text-right">{post.readableDate}</span>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-[1fr_240px] mt-4 sm:mt-8 overflow-y-clip">
				<div class="content pr-8 text-justify">
					<h2><a href={`/blog/${post.url}`}>{post.title}</a></h2>
					<p>{post.readableDescription}</p>
				</div>
				<div class="lg:-mr-[60px] md:-mr-[40px] hidden md:block">
					<img src={post.hero_img} alt={post.description} class="hero" />
				</div>
			</div>
			<div class="grid grid-cols-2 mt-6">
				<div class="flex items-center space-x-2">
					<img class="author-image" src={post.author_img} alt="Jese Leos avatar" />
					<span class="font-medium">{post.author}</span>
				</div>
				<div class="flex items-center justify-end">
					<a
						href={`/blog/${post.url}`}
						class="inline-flex items-center text-right font-medium text-primary-600 hover:underline"
					>
						Read more →
					</a>
				</div>
			</div>
		</article>

		<!-- <article class="py-0 px-8 bg-white rounded-lg border-gray-200 shadow-2xl mb-8 relative">
			<div class="grid grid-cols-1 md:grid-cols-[1fr,auto] overflow-y-clip h-80">
				<div class="pt-6">
					<span class="absolute top-8 right- text-gray-400">{post.readableDate}</span>
					<div class="text-sm text-gray-400 mt-4">
						{#each post.tags as tag}
							<a href={`/blog?tag=${tag}`} class="tag-link">{tag}</a>
						{/each}
					</div>
					<h2 class="text-2xl font-bold tracking-tight text-gray-900 mb-4 mt-4 ">
						<a href={`/blog/${post.url}`}>{post.title}</a>
					</h2>

					<p class="mb-5 font-light text-gray-500 dark:text-gray-400 leading-7">
						{post.readableDescription}
					</p>
				</div>
				{#if post.hero_img}
					<div class="p-4 w-[360px] relative">
						<div class="absolute -right-20 top-20">
							<img
								class="h-56 w-[410px] shadow-xl rounded-xl object-cover"
								src={post.hero_img}
								alt={post.title}
							/>
						</div>
					</div>
				{/if}
			</div>
			<div class="h-20 flex justify-between items-center">
				<div class="flex items-center space-x-2">
					<img class="author-image" src={post.author_img} alt="Jese Leos avatar" />
					<span class="font-medium">{post.author}</span>
				</div>
				<a
					href={`/blog/${post.url}`}
					class="inline-flex items-center font-medium text-primary-600 hover:underline"
				>
					Read more →
				</a>
			</div>
		</article> -->
	{/each}
</div>

<style lang="postcss">
	article {
		@apply p-8 bg-white rounded-lg border-gray-200 shadow-2xl mb-8;
	}

	span {
		@apply text-slate-500;
	}

	img.hero {
		@apply h-56 w-full object-cover rounded-xl shadow-lg;
	}

	.content h2 {
		@apply text-xl font-bold tracking-tight text-slate-900;
	}

	.content p {
		@apply text-slate-500 mt-4;
	}

	.tag-link {
		@apply bg-primary-300 text-white text-xs p-1 px-2 rounded-md mr-2 -ml-1;
	}
	.tag-link:hover {
		@apply bg-primary-400;
	}

	.author-image {
		@apply w-8 h-8 m-1 p-0.5 rounded-full shadow-md object-cover ring-2 ring-primary-500;
	}
</style>
