<script lang="ts">
	import type { ProfilesInsert } from '$lib/types';
	export let formData: ProfilesInsert;
</script>

<div class="flex flex-col">
	<p>Full Name</p>
	<input type="text" bind:value={formData.full_name} />

	<p>Date of Birth</p>
	<input type="date" bind:value={formData.dob} />

	<p>username</p>
	<input type="text" minlength="3" bind:value={formData.username} />

	<p>Phone</p>
	<input type="text" bind:value={formData.phone} />
</div>
