<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { profileStore } from '$lib/stores/profile';
	import type { ProfilesInsert } from '$lib/types';
	import { profilesDefault } from '$lib/defaults';

	import Stepper from './Stepper.svelte';
	import FormProfile from './FormProfile.svelte';
	import FormEmployment from './FormEmployment.svelte';
	import FormFinancial from './FormFinancial.svelte';
	import FormToS from './FormToS.svelte';

	// load the data prop containing supabase
	export let data;
	const { supabase } = data;
	$: session = data.session || null;

	let formData: ProfilesInsert = { ...profilesDefault };
	let loading = true;

	onMount(async () => {
		await invalidateAll();
		console.log($profileStore);
		if (session) {
			formData.id = session.user.id;
			const { data: profiles, error: err } = await supabase
				.from('profiles')
				.select('*')
				.eq('id', session.user.id);

			if (!profiles || profiles.length === 0 || !profiles[0].is_active) {
				if (profiles && profiles[0]) {
					formData = profiles[0];
					loading = false;
				}
			} else {
				goto('/dashboard');
			}
		} else {
			goto('/login');
		}
	});

	let step = 1;
	let complete = [false, false, false];

	let advance = () => {
		if (step === 1) {
			if (formData.full_name && formData.dob && formData.phone && formData.address) {
				complete[0] = true;
				step++;
			}
		} else if (step === 2) {
			if (formData.employment_status && formData.job_title) {
				complete[1] = true;
				step++;
			}
		} else if (step === 3) {
			if (formData.income && formData.net_worth && formData.tax_filing_status) {
				complete[2] = true;
				step++;
			}
		}
	};

	let submit = async () => {
		// TODO - validating data
		formData.is_active = true;

		const { error } = await supabase.from('profiles').upsert(formData);

		if (!error) {
			goto('/dashboard');
		}
	};
</script>

{#if session && !loading}
	<div class="w-80 sm:w-96 mx-auto">
		<img class="h-12 w-auto" src="/logo.png" alt="Your Company" />

		{#if step === 5}
			<h2>Please Complete Your Profile</h2>
			<a href="/dashboard">Go to Dashboard</a>
		{:else}
			<h2>Please Complete Your Profile</h2>
			<Stepper bind:step {complete} />

			{#if step === 1}<FormProfile bind:formData />{/if}
			{#if step === 2}<FormEmployment bind:formData />{/if}
			{#if step === 3}<FormFinancial bind:formData />{/if}
			{#if step === 4}<FormToS bind:formData />{/if}

			{#if step <= 3}
				<button on:click={advance} class="btn-primary w-full mt-4">Next</button>
			{/if}
			{#if step === 4 && formData.accepted_tos}
				<button on:click={submit} class="btn-primary w-full mt-4">Complete Profile</button>
			{/if}
			{#if step === 4 && !formData.accepted_tos}
				<button on:click={submit} disabled class="btn-disabled w-full mt-4">Complete Profile</button
				>
			{/if}
		{/if}
	</div>
{/if}
