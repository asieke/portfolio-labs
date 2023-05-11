<script lang="ts">
	import type { ProfilesInsert } from '$lib/types';
	export let formData: ProfilesInsert;
</script>

<div class="flex flex-col">
	<p>Employment Status</p>
	<input type="text" bind:value={formData.employment_status} />
	<p>Job Titles</p>
	<input type="text" bind:value={formData.job_title} />
</div>
