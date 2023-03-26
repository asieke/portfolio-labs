<script lang="ts">
	import ImageUpload from './components/ImageUpload.svelte';
	import Tags from './components/Tags.svelte';
	import type { BlogPost } from './form';
	import { createBlogPost } from './form';

	export let data: any;

	let formData: BlogPost = {
		title: 'My AWesome blog',
		description: 'Test',
		markdown: '### Hello World',
		url: 'my-awesome',
		heroImage: '',
		author: 'Alex Sieke',
		authorImage: '',
		tags: []
	};

	const { tags } = data;
</script>

<div class="max-w-4xl mx-auto p-3">
	<div class="p-8 bg-white rounded-lg border-gray-200 shadow-2xl mb-8">
		<div class="space-y-12">
			<div class="border-b border-gray-900/10 pb-12 space-y-6">
				<h2 class="text-2xl font-semibold leading-7 text-gray-900">Create new Blog Post</h2>

				<!---------------------
          Blog Post Title
        --------------------->
				<div class="">
					<label for="title" class="label-text">Blog Post Title</label>
					<input name="title" type="text" class="input-text" bind:value={formData.title} />
				</div>

				<!---------------------
          Blog Post URL
        --------------------->
				<div class="">
					<label for="url" class="label-text">URL</label>
					<div
						class="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
					>
						<span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm"
							>portfoliolabs.com/blog/</span
						>
						<input
							bind:value={formData.url}
							type="text"
							name="username"
							id="username"
							class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
							placeholder="my-cool-blog"
						/>
					</div>
				</div>

				<!---------------------
          Blog Post Description
        --------------------->
				<div class="col-span-full">
					<label for="about" class="block text-sm font-medium leading-6 text-gray-900"
						>Description</label
					>
					<textarea
						bind:value={formData.description}
						id="about"
						name="about"
						rows="3"
						class="input-textarea"
					/>
				</div>

				<!---------------------
          Image Uploader
        --------------------->
				<ImageUpload />

				<!---------------------
          Markdown
        --------------------->
				<div class="col-span-full">
					<label for="about" class="block text-sm font-medium leading-6 text-gray-900"
						>Blog Post Markdown</label
					>
					<div class="mt-2">
						<textarea
							bind:value={formData.markdown}
							id="about"
							name="about"
							rows="12"
							class="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<!---------------------
          Blog Post Hero Image
        --------------------->
				<div class="">
					<label for="hero-image" class="label-text">Hero Image</label>
					<input name="hero-image" type="text" class="input-text" bind:value={formData.heroImage} />
				</div>

				<!---------------------
          Blog Post Author
        --------------------->
				<div class="w-full flex flex-row space-x-3">
					<div class="w-1/2">
						<label for="author" class="label-text">Blog Post Author</label>
						<input name="author" type="text" class="input-text" bind:value={formData.author} />
					</div>
					<div class="w-1/2">
						<label for="author-image" class="label-text">Author Image</label>
						<input
							name="author-image"
							type="text"
							class="input-text"
							bind:value={formData.authorImage}
						/>
					</div>
				</div>

				<!---------------------
          Tags
        --------------------->
				<div class="">
					<label for="first-name" class="block text-sm font-medium leading-6 text-gray-900"
						>Tags</label
					>
					<Tags {tags} on:tagListChange={(e) => (formData.tags = e.detail)} />
				</div>
			</div>
		</div>

		<div class="mt-6 flex items-center justify-end gap-x-6">
			<button
				type="submit"
				on:click={() => {
					console.log(formData);
					createBlogPost(formData);
				}}
				class="rounded-md bg-indigo-600 w-full py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>Save</button
			>
		</div>
	</div>
</div>

<style lang="postcss">
	.input-text {
		@apply block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6;
	}
	.label-text {
		@apply block text-sm font-medium leading-6 text-gray-900;
	}
	.input-textarea {
		@apply mt-2 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6;
	}
</style>
