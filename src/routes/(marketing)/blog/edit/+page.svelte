<script lang="ts">
	import { Container } from '$components/layout';
	import type { Blog } from '$types/blog';
	import { SelectBlog } from './components';
	import { addToast } from '$lib/stores/toasts';
	import { page } from '$app/stores';
	import { marked } from 'marked';

	const { supabase } = $page.data;

	export let data;
	const { blogs: initialBlogs } = data;
	console.log(data);

	let selected: Blog | null = null;
	let blogs: Blog[] = [...initialBlogs];

	const saveBlog = async (blog: Blog | null) => {
		if (!blog) {
			addToast('Please select a blog before saving', 'info');
			return null;
		}
		if (blog?.id) {
			//editing an existing blog
			const { error } = await supabase.from('blog').update(selected).match({ id: blog.id });
			if (error) {
				addToast('There was an error saving, please try again', 'error');
			} else {
				addToast('Blog updated successfully', 'success');
				return blog;
			}
		} else {
			const { data, error } = await supabase.from('blog').insert(blog).select('*');
			if (error || !data || data.length === 0) {
				addToast('There was an error saving, please try again', 'error');
			} else {
				addToast('Blog created successfully', 'success');
				return (selected = data[0] as Blog);
			}
		}
	};

	const handleSelectBlogClick = (blog: Blog) => {
		selected = blog;
	};

	const handleBackClick = async () => {
		//show a model with Ok or cancel
		confirm('Are you sure you want to go back?');
	};
</script>

<div class="grid w-full grid-cols-5 gap-x-8 gap-y-4 p-16">
	<div class="col-span-5 flex flex-row items-center justify-between bg-blue-500 px-4 align-middle">
		<span>
			<button on:click={() => handleBackClick()}>All Blogs</button> ›
			{#if selected}
				{selected.title}
			{/if}
		</span>
		<button on:click={() => saveBlog(selected)} class="bg-green-500 p-2 px-3 text-white hover:bg-green-600">Save</button>
	</div>
	<div class="col-span-2">
		<Container>
			{#if !selected}
				<SelectBlog {blogs} {handleSelectBlogClick} />
			{:else}
				How are you
			{/if}
		</Container>
	</div>
	<div class="col-span-3">
		<Container>
			{#if !selected}
				<h3>Select a Blog to Edit</h3>
			{:else}
				<h3>Editing {selected.title}</h3>
				<div>{@html marked(selected.md)}</div>
			{/if}
		</Container>
	</div>
</div>
