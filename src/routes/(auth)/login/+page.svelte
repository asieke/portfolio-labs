<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { invalidateAll } from '$app/navigation';

	export let data;
	const { supabase, session } = data;

	console.log(data);

	let email = 'asieke@gmail.com';
	let state: 'form' | 'loading' | 'submitted' = 'form';

	onMount(async () => {
		await invalidateAll();
		if (session) {
			goto('/dashboard');
		}
	});

	const submit = async () => {
		state = 'loading';
		const { data, error } = await supabase.auth.signInWithOtp({
			email: email,
			options: {
				emailRedirectTo: 'http://localhost:5173/landing'
			}
		});
		state = 'submitted';
	};
</script>

<div class="w-80 sm:w-96 mx-auto">
	<img class="h-12 w-auto" src="/logo.png" alt="Your Company" />

	{#if state === 'form' || state === 'loading'}
		<form on:submit|preventDefault={submit}>
			<h2>Sign in to your account</h2>
			<p class="text-gray-500 mb-8">
				Portfolio Lab uses passwordless login for added security, please enter your email below and
				a magic link will be sent to your email.
			</p>
			<label for="email">Email address</label>
			<input bind:value={email} type="email" autocomplete="off" required />
			{#if state === 'loading'}
				<input disabled type="submit" value="Loading..." class="btn-disabled mt-8 w-full" />
			{:else}
				<input type="submit" value="Login" class="btn-primary mt-8 w-full" />
			{/if}
		</form>
	{:else}
		<h2>Check your Email</h2>
		<p class="text-gray-500 mb-8">
			Please submit another request in 60s if the email does not arrive.
		</p>
	{/if}
</div>

<style lang="postcss">
	input[type='submit']:hover {
		@apply bg-primary-400 cursor-pointer;
	}

	input[type='email'] {
		@apply w-full px-3 py-2 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600;
	}

	label {
		@apply block text-sm font-medium leading-6 text-gray-900 mt-4;
	}

	h2 {
		@apply mt-4 mb-6 text-3xl font-bold tracking-tight text-gray-900;
	}
</style>
