<script lang="ts">
	import type { ProfilesInsert } from '$lib/types';
	import { tos } from '$data/tos';
	export let formData: ProfilesInsert;
</script>

<div>
	<h2 class="mt-6 mb-2">Terms of Service</h2>
	<div class="text-xs h-36 border-[1px] border-gray-300 rounded-md overflow-scroll p-2">
		{@html tos}
	</div>
	<div class="mt-5 text-sm text-gray-600">
		<input
			type="checkbox"
			class="outline-none focus:outline-none focus:ring-0 ml-1"
			bind:checked={formData.accepted_tos}
		/>
		I accept the terms of service
	</div>
</div>

<style lang="postcss">
	/* This is a hack to get the checkbox to be the same size as the text */
</style>
