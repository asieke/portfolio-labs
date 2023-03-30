<script lang="ts">
	import type { ProfilesInsert } from '$lib/types';
	export let formData: ProfilesInsert;
</script>

<div class="flex flex-col">
	<p>Website</p>
	<input type="text" bind:value={formData.website} />
</div>
