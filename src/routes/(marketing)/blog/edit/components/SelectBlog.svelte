<script lang="ts">
	import type { Blog } from '$types/blog';

	export let blogs: Blog[];
	export let handleSelectBlogClick: (blog: Blog) => void;

	//create a template for a new blog
	const newBlog: Blog = {
		title: 'My New Blog Post',
		date: new Date(),
		description: '',
		author: '',
		hero_img: '',
		md: '',
		author_img: '',
		url: '',
		type: '',
		status: 'draft'
	};
</script>

<div>
	<ul>
		<li>
			<button on:click={() => handleSelectBlogClick(newBlog)}>➕ New Blog</button>
		</li>
		{#each blogs as blog}
			<li>
				<button on:click={() => handleSelectBlogClick(blog)}>{blog.title}</button>
			</li>
		{/each}
	</ul>
</div>

<style lang="postcss">
	ul {
		@apply space-y-3;
	}
	button {
		@apply w-full bg-slate-200 px-2.5 py-2 text-left hover:bg-slate-300;
	}
</style>
