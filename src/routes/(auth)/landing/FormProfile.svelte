<script lang="ts">
	import { MapboxSearch, SearchSession } from '@mapbox/search-js-core';

	const search = new MapboxSearch({
		accessToken:
			'pk.eyJ1IjoiYXNpZWtlIiwiYSI6ImNsZndweDJqYTBlc3UzcnJ5ajF2cnl6bGQifQ.75-tAbs2JyLMcEZ9YIWJRA'
	});

	const mapboxSession = new SearchSession(search);

	console.log(search, mapboxSession);

	import type { ProfilesInsert } from '$lib/types';
	export let formData: ProfilesInsert;
</script>

<div class="flex flex-col">
	<p>Full Name</p>
	<input type="text" bind:value={formData.full_name} />

	<p>Date of Birth</p>
	<input type="date" bind:value={formData.dob} />

	<p>Phone</p>
	<input type="text" bind:value={formData.phone} />
</div>
