<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { IconArrowLeftHeavy } from '$components/svg';
	export let data;
	const { blog } = data;
	const date = new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

	const goToPrevious = () => {
		history.back();
	};
</script>

<div class="mx-8 min-h-screen border-l-[1px] border-dotted border-slate-400 pb-64 pt-20 lg:mx-auto lg:max-w-4xl">
	<div class="relative px-8">
		<div class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
			<span class="text-primary-500 dark:text-primary-200">{'[on] '}</span>{blog.title}.
		</div>
		<button on:click={goToPrevious} class="absolute -left-6 top-0 flex h-12 w-12 items-center justify-center hover:text-primary-400"><IconArrowLeftHeavy class="h-10 w-10" /></button>
	</div>

	<div class="mb-0 mt-6 w-full pl-8 text-right">{date}</div>

	<div class="-ml-8 -mr-8 mb-16 rounded-none bg-white px-8 shadow-lg dark:bg-slate-800 lg:rounded-xl">
		<div class="-ml-[1px] border-l-[1px] border-dotted border-slate-400 px-8">
			<div class="-ml-8 -mr-8 mt-2 bg-white py-8 dark:bg-slate-800">
				<!-- Author Description -->
				<div class="flex flex-row items-center pl-10 pt-3">
					<img src={blog.author_img} alt="" class="h-10 w-10 rounded-full" />
					<div class="ml-3 flex flex-col">
						<span class="font-semibold">{blog.author}</span>
						<span class="text-sm text-slate-500 dark:text-slate-400">CEO / Co-Founder</span>
					</div>
				</div>

				<!-- Blog Post -->
				<div class="md px-8 pt-6 lg:px-12">
					{@html data.html}
				</div>
			</div>
		</div>
	</div>
</div>
