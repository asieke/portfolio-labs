<!-- CoverPhoto.svelte -->
<script lang="ts">
	import { supabase } from '$lib/supabaseClient';
	import { fade } from 'svelte/transition';
	import type { ImageFile } from '../form';

	let uploadContainer: HTMLElement;
	let showTempFile = false;

	let file: File | null = null;

	let files: ImageFile[] = [];

	//create an interface for files

	function onDragOver(event: DragEvent): void {
		console.log('DRAGGING');
		event.preventDefault();
		uploadContainer.style.border = '2px dashed #60A5FA';
	}

	function onDragLeave(event: MouseEvent): void {
		console.log('LEAVING');
		uploadContainer.style.border = '2px dashed #ddd';
	}

	async function onDrop(event: DragEvent): Promise<void> {
		console.log('DROPPPING');
		uploadContainer.style.border = '2px dashed #ddd';
		event.preventDefault();
		if (event.dataTransfer) {
			file = event.dataTransfer.files[0];
			await handleFileUpload(event, file);
		}
	}

	async function handleFileUpload(event: Event, file?: File | null): Promise<void> {
		showTempFile = true;
		const input = event.target as HTMLInputElement;

		let fileToBeUploaded = file || (input.files && input.files[0] ? input.files[0] : null);

		if (fileToBeUploaded) {
			// Replace 'your-bucket-name' with your actual bucket name
			const bucketName = 'portfolio-labs';

			// Generate a unique file name based on the current timestamp and the original file name
			const fileName = `${Date.now()}-${fileToBeUploaded.name}`;

			console.log(fileName);

			// Upload the file to the specified bucket
			const { data, error } = await supabase.storage
				.from(bucketName)
				.upload(fileName, fileToBeUploaded);

			if (error) {
				console.error('Error uploading file:', error);
			} else {
				console.log('File uploaded successfully', data);
				const { data: urlData } = supabase.storage.from(bucketName).getPublicUrl(fileName);

				if (urlData && urlData.publicUrl) {
					showTempFile = false;
					files = [...files, { url: urlData.publicUrl, imgClass: '', showCopy: false }];
				}
			}
		}
	}

	const copyPasta = async (i: number) => {
		files[i].imgClass = '';
		files[i].showCopy = true;
		setTimeout(() => {
			files[i].showCopy = false;
		}, 400);
		const text = `<img class='right' alt='funny' src='${files[i].url}'>`;
		await navigator.clipboard.writeText(text);
	};
</script>

<div class="col-span-full">
	<label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900"
		>Upload Blog Images</label
	>
	<div
		class="upload-container"
		bind:this={uploadContainer}
		on:dragover={onDragOver}
		on:dragleave={onDragLeave}
		on:drop={onDrop}
	>
		<div class="text-center">
			<svg
				class="mx-auto h-12 w-12 text-gray-300"
				viewBox="0 0 24 24"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
					clip-rule="evenodd"
				/>
			</svg>
			<div class="mt-4 flex text-sm leading-6 text-gray-600">
				<label
					for="file-upload"
					class={`relative cursor-pointer rounded-md font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500`}
				>
					<span>Upload a file</span>
					<input
						id="file-upload"
						name="file-upload"
						type="file"
						class="sr-only"
						on:change={handleFileUpload}
					/>
				</label>
				<p class="pl-1">or drag and drop</p>
			</div>
			<p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
		</div>
	</div>
	<div class="w-full flex flex-row flex-wrap space-x-3 mt-4">
		{#each files as f, i}
			<div style="h-16">
				<button
					class="relative"
					on:click={() => copyPasta(i)}
					on:mousedown={() => {
						files[i].imgClass = 'clicked';
						files[i].showCopy = true;
					}}
				>
					<img
						src={f.url}
						alt=""
						class={`${f.imgClass} h-24 w-24 rounded-md shadow-xl ring-neutral-100 ring-2`}
					/>
					{#if f.showCopy}
						<div class={`copylabel`} out:fade={{ duration: 100 }}>
							<div class="m-2 bg-white rounded ">Copied</div>
						</div>
					{/if}
				</button>
			</div>
		{/each}
		{#if showTempFile}
			<div
				class="h-24 w-24 flex items-center justify-center rounded-md shadow-xl ring-neutral-100 ring-2 text-slate-500 tracking-tight"
			>
				Loading
			</div>
		{/if}
	</div>
</div>

<style>
	.upload-container {
		@apply mt-2 flex justify-center rounded-lg px-6 py-10;
		border: 2px dashed #ddd;
		transition: all 0.2s ease-in-out;
	}

	img:hover {
		@apply opacity-80;
	}

	div.copylabel {
		@apply absolute w-full top-8 transition-all duration-200 ease-in-out;
	}

	img.clicked {
		transform: scale(0.95);
	}
</style>
