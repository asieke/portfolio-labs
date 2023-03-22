<script lang="ts">
	import { toggleDarkMode } from '$lib/shared/browser';
	import { Gear } from '$svg';
</script>

<div class="relative mt-0.5 mr-2">
	<button
		type="button"
		on:click={toggleDarkMode}
		class="flex-shrink-0 rounded-full p-1 text-cyan-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none"
	>
		<span class="sr-only">View notifications</span>
		<Gear />
	</button>
</div>
