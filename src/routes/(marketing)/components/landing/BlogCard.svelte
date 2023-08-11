<script lang="ts">
	import type { Blog } from '$types/blog';
	import { getDisplayDate } from '$lib/utils/dates';

	export let blog: Blog;
</script>

<article class="flex flex-col items-start justify-between rounded-md bg-white p-6 shadow-xl">
	<div class="flex w-full items-center justify-between text-xs">
		<span class="text-gray-500">{getDisplayDate(blog.date)}</span>
		<a href="/blog?type={blog.type}" class="whitespace-nowrap rounded-full bg-primary-500 px-2 py-1.5 font-medium text-white hover:bg-primary-600">{blog.type}</a>
	</div>
	<div class="group relative">
		<h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
			<a href="/blog/{blog.url}">
				<span class="absolute inset-0" />
				{blog.title}
			</a>
		</h3>
		<p class="mt-5 line-clamp-4 text-sm leading-6 text-gray-600">
			{blog.description}
		</p>
	</div>
	<a href="/blog?author={blog.author}" class="relative mt-8 flex items-center gap-x-4">
		<img src={blog.author_img} alt="" class="h-10 w-10 rounded-full bg-gray-50" />
		<div class="text-sm leading-6">
			<p class="font-semibold text-gray-900">
				{blog.author}
			</p>
			<p class="text-gray-600">Co-Founder / CTO</p>
		</div>
	</a>
</article>
