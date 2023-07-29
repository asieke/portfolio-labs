<script lang="ts">
	export let data;
	const { profile, supabase } = data;
	import { IconSpinner } from '$components/svg';
	import { addToast } from '$lib/stores/toasts';
	import { updateProfile } from '$models/profile';

	let loading = false;
	let targets = profile?.allocation_targets || [];
	let error = '';

	const validate = () => {
		if (targets.reduce((a, b) => a + b.total, 0) !== 100) return false;
		for (const row of targets) {
			if (row.breakdown.reduce((a, b) => a + b.total, 0) !== 100) return false;
		}
		return true;
	};

	const handleClick = async () => {
		loading = true;

		if (validate() === false) {
			error = 'Allocation targets must sum to 100%';
			loading = false;
			return;
		}

		error = '';

		if (profile) {
			profile.allocation_targets = targets;
			await updateProfile(supabase, profile);
			loading = false;
			addToast('Profile saved', 'success');
		} else {
			addToast('There was an issue saving your profile', 'error');
		}
	};
</script>

<h3>Set Asset Allocation Targets</h3>
<p>
	To set up asset allocation, distribute your investments among various asset classes (like equities, fixed income), so they total 100%. Within each class, further allocate to sub-categories (like US
	equities, emerging markets), which should also sum up to 100% of their parent class.
</p>
<div class="h-5 text-red-600">{error}</div>
<form class="mb-8">
	<table>
		{#each targets as row, i}
			<tr>
				<td class="text-right font-bold">
					<div>&nbsp;</div>
					<span>{row.name}</span></td
				>
				<td class="total text-center">
					<div>Total</div>
					<input type="number" bind:value={targets[i].total} />
				</td>
				{#each row.breakdown as breakdown, j}
					<td class="text-center">
						<div>{breakdown.name}</div>
						<input type="number" bind:value={targets[i].breakdown[j].total} />
					</td>
				{/each}
				<td class="text-left">
					<div>&nbsp;</div>
					<div class={row.breakdown.reduce((a, b) => a + b.total, 0) === 100 ? 'text-green-600' : 'text-red-600'}>{row.breakdown.reduce((a, b) => a + b.total, 0)}</div>
				</td>
			</tr>
		{/each}
		<tr>
			<td>&nbsp;</td>
			<td class="total text-center"><div class={targets.reduce((a, b) => a + b.total, 0) === 100 ? 'text-green-600' : 'text-red-600'}>{targets.reduce((a, b) => a + b.total, 0)}</div></td>
		</tr>
	</table>
</form>
{#if loading}
	<button class="submit" disabled>Save Target Allocation <IconSpinner class="h-5 w-5" /></button>
{:else}
	<button class="submit" on:click|preventDefault={handleClick}>Save Target Allocation</button>
{/if}

<style lang="postcss">
	.total {
		@apply bg-primary-400 font-semibold text-white dark:bg-primary-600;
	}

	input {
		@apply text-center;
	}

	table {
		@apply w-full rounded-lg bg-slate-100 text-xs shadow-lg dark:bg-slate-900;
	}

	td {
		@apply m-0 w-[14%] px-4 py-2;
	}
</style>
