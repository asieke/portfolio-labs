<script lang="ts">
	import type { ProfilesInsert } from '$lib/types';
	export let formData: ProfilesInsert;
</script>

<div class="flex flex-col">
	<p>Annual Pre Tax Income</p>
	<input type="text" bind:value={formData.income} />
	<p>Liquid Net Worth</p>
	<input type="text" bind:value={formData.net_worth} />
	<p>Tax Filing Status</p>
	<input type="text" bind:value={formData.tax_filing_status} />
</div>
