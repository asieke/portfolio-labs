<script lang="ts">
	import { PUBLIC_APP_URL } from '$env/static/public';
	import { page } from '$app/stores';
	const redirectURL = PUBLIC_APP_URL + '/auth/redirect';
	const { supabase } = $page.data;

	let email: string = 'asieke@gmail.com';

	let state: 'initial' | 'loading' | 'success' = 'initial';
	let errorText = '';

	const onKeyPress = (event: KeyboardEvent) => {
		errorText = '';
		if (event.key === 'Enter') {
			onSubmit();
		}
	};

	const onSubmit = async () => {
		if (email.length < 6) {
			errorText = 'Please enter a valid email address';
			return;
		}
		state = 'loading';

		const { data, error } = await supabase.auth.signInWithOtp({
			email: email,
			options: {
				emailRedirectTo: redirectURL
			}
		});

		if (error || !data) {
			errorText = error?.message || 'An error occurred';
			state = 'initial';
			return;
		}

		state = 'success';

		setTimeout(() => {
			state = 'initial';
		}, 15000);
	};
</script>

<div class="mx-auto mt-10 h-8 w-3/4">
	{#if state === 'initial'}
		<div class="flex flex-row items-center justify-center gap-x-6">
			<input on:keydown={onKeyPress} bind:value={email} name="email" type="email" class="" placeholder="email@example.com" />
			<button on:click={onSubmit} class="enabled">Get Started</button>
		</div>
		<div class="w-full pl-4 pt-1 text-left text-sm text-red-500">
			{errorText}
		</div>
	{:else if state === 'loading'}
		<div class="flex flex-row items-center justify-center gap-x-6">
			<input value={email} />
			<button class="disabled">Get Started</button>
		</div>
	{:else if state === 'success'}
		<div class="mt-5 w-full space-y-4 text-center text-slate-300">
			<p>You will receive an email with your login information at</p>
			<p class="font-semibold">{email}</p>
		</div>
	{/if}
</div>

<style lang="postcss">
	input {
		@apply w-2/3 rounded-xl bg-slate-200;
	}

	button {
		@apply w-1/3 rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400;
	}

	button.enabled {
		@apply bg-indigo-500 hover:bg-indigo-400;
	}

	button.disabled {
		@apply bg-slate-600;
	}
</style>
