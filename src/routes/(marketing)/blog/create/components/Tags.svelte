<!-- Autocomplete.svelte -->
<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import { CheckMark } from '$svg';

	const dispatch = createEventDispatcher();

	let input = '';
	let filteredTags: string[] = [];
	let selectedIndex = -1;
	let showDropdown = false;
	let saveTags: string[] = [];
	export let tags: string[] = [];

	onMount(() => {
		filteredTags = tags.sort();
	});

	const handleFocus = () => {
		selectedIndex = -1;
		showDropdown = true;
	};

	const handleBlur = (e: FocusEvent) => {
		if (
			e.relatedTarget &&
			(e.relatedTarget as HTMLElement).classList.contains('autocomplete-button')
		) {
			return;
		}
		showDropdown = false;
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'ArrowDown') {
			selectedIndex = selectedIndex + 1;
			if (selectedIndex >= filteredTags.length) {
				selectedIndex = 0;
			}
			//if selectedIndex > 5 then scroll the div down 20px
		}
		if (e.key === 'ArrowUp') {
			selectedIndex = selectedIndex - 1;
			if (selectedIndex < 0) {
				selectedIndex = filteredTags.length - 1;
			}
		}
		if (e.key === 'Enter' && selectedIndex === -1) {
			toggleTag(input);
		}
		if (e.key === 'Enter' && selectedIndex !== -1) {
			toggleTag(filteredTags[selectedIndex]);
		}
	};

	const updateFilter = () => {
		filteredTags = tags.filter((tag) => tag.toLowerCase().includes(input.toLowerCase()));
	};

	const toggleTag = (tag: string) => {
		//remove
		if (saveTags.includes(tag)) {
			saveTags = saveTags.filter((t) => t !== tag);
		} else {
			saveTags = [...saveTags, tag];
			if (!tags.includes(tag)) {
				tags = [...tags, tag];
			}
		}
		input = '';
		filteredTags = [
			...tags.sort((a, b) => a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase()))
		];
		dispatch('tagListChange', saveTags);
		if (showDropdown) document.getElementById('autocomplete')?.focus();
	};
</script>

<div class="relative flex flex-row items-center space-x-3">
	<div class="w-1/2">
		<input
			type="text"
			class="border border-gray-300 rounded p-2 w-full"
			id="autocomplete"
			bind:value={input}
			on:input={updateFilter}
			on:keydown={handleKeyDown}
			on:click={handleFocus}
			on:focus={handleFocus}
			on:blur={handleBlur}
		/>
		{#if showDropdown && filteredTags.length > 0}
			<ul
				class="absolute border border-gray-300 bg-white rounded w-1/2 mt-1 z-10 max-h-48 overflow-scroll"
			>
				{#each filteredTags as tag, index}
					<!-- ignore a11y-click-events-have-key-events -->
					<li>
						{#if saveTags.includes(tag)}
							<button
								class="autocomplete-button flex flex-row justify-between p-2 hover:bg-gray-200 cursor-pointer w-full text-left {index ===
								selectedIndex
									? 'bg-primary-200'
									: ''}"
								on:click={() => toggleTag(tag)}
							>
								<span>{tag}</span>
								<span class="mr-2"><CheckMark /></span>
							</button>
						{:else}
							<button
								class="autocomplete-button flex flex-row justify-between p-2 hover:bg-gray-200 cursor-pointer w-full text-left {index ===
								selectedIndex
									? 'bg-primary-200'
									: ''}"
								on:click={() => toggleTag(tag)}
							>
								<span>{tag}</span>
							</button>
						{/if}
					</li>
				{/each}
			</ul>
		{/if}
	</div>
	<div class="tags">
		{#each saveTags as tag, i}
			<button class="autocomplete-button" on:click={() => toggleTag(tag)}>{tag}</button>
		{/each}
	</div>
</div>

<style>
	.tags {
		@apply w-1/2 flex flex-row flex-wrap items-center -mt-2;
	}

	.tags button {
		@apply ml-1 mt-1 rounded-md bg-primary-200 px-2 py-1 text-xs h-6 shadow-sm text-white whitespace-nowrap;
	}
</style>
