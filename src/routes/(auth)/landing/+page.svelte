<script lang="ts">
	import { goto } from '$app/navigation';
	import { redirect } from '@sveltejs/kit';

	import { onMount } from 'svelte';
	import type { ProfilesInsert, ProfilesRow } from '$lib/types';

	import { page } from '$app/stores';

	import Stepper from './Stepper.svelte';
	import FormProfile from './FormProfile.svelte';
	import FormPlan from './FormPlan.svelte';
	import FormPayment from './FormPayment.svelte';
	import FormToS from './FormToS.svelte';

	const { supabase, session } = $page.data;
	export let data;
	console.log(data);

	if (!session) {
		console.log('THERE IS NO SESSION');
		redirect(303, '/');
	}

	let formData: ProfilesInsert = {
		id: '',
		accepted_tos: false,
		avatar_url: '',
		dob: '',
		full_name: '',
		is_active: false,
		phone: '',
		username: '',
		website: ''
	};

	onMount(async () => {
		if (session) {
			const id = session?.user?.id;
			const { data: profiles, error } = await supabase.from('profiles').select('*').eq('id', id);
			if (profiles && profiles.length > 0) {
				formData = profiles[0] as ProfilesInsert;
			} else {
				formData.id = id;
			}
			if (error) {
				goto('/');
			}
			console.log(formData);
			if (formData && formData.is_active) {
				goto('/dashboard');
			}
		}
		console.log(formData);
	});

	let step = 1;
	let complete = [false, false, false];

	let advance = () => {
		if (step === 1) {
			if (formData.full_name && formData.dob && formData.phone) {
				complete[0] = true;
				step++;
			}
		} else if (step === 2) {
			if (formData.avatar_url) {
				complete[1] = true;
				step++;
			}
		} else if (step === 3) {
			if (formData.website) {
				complete[2] = true;
				step++;
			}
		}
	};

	let submit = async () => {
		console.log(formData);
		let { error } = await supabase.from('profiles').upsert(formData);
		if (error) {
			console.log(error);
		} else {
			step = 5;
		}
	};
</script>

<div class="grid grid-cols-1 md:grid-cols-[58%_42%] lg:grid-cols-2 h-full overflow-hidden">
	<div class="pt-[15%] sm:pt-[25%] bg-white z-20 p-8 sm:pl-16">
		<div class="w-80 sm:w-96 mx-auto">
			<img class="h-12 w-auto" src="/logo.png" alt="Your Company" />

			{#if step === 5}
				<h2>Please Complete Your Profile</h2>
				<a href="/dashboard">Go to Dashboard</a>
			{:else}
				<h2>Please Complete Your Profile</h2>
				<Stepper bind:step {complete} />

				{#if step === 1}<FormProfile bind:formData />{/if}
				{#if step === 2}<FormPlan bind:formData />{/if}
				{#if step === 3}<FormPayment bind:formData />{/if}
				{#if step === 4}<FormToS bind:formData />{/if}

				{#if step <= 3}
					<button on:click={advance} class="btn-primary w-full mt-4">Next</button>
				{/if}
				{#if step === 4 && formData.accepted_tos}
					<button on:click={submit} class="btn-primary w-full mt-4">Complete Profile</button>
				{/if}
				{#if step === 4 && !formData.accepted_tos}
					<button on:click={submit} disabled class="btn-disabled w-full mt-4"
						>Complete Profile</button
					>
				{/if}
			{/if}
		</div>
	</div>
	<div class="hidden md:block relative">
		<img class="object-cover h-full" src="/images/errorbg.png" alt="" />
		<div class="pane" />
	</div>
</div>

<style>
	.pane {
		@apply bg-white absolute w-36 -bottom-24 -top-24 -left-20;
		transform: rotate(8deg);
	}

	h2 {
		@apply mt-4 mb-6 text-3xl font-bold tracking-tight text-gray-900;
	}
</style>
