<script lang="ts">
	import { PUBLIC_APP_URL } from '$env/static/public';
	let email = 'asieke@gmail.com';
	let state: 'form' | 'loading' | 'submitted' = 'form';

	export let data;
	$: ({ supabase, session } = data);

	const submit = async () => {
		state = 'loading';

		const redirectURL = PUBLIC_APP_URL + '/redir';
		console.log(redirectURL, 'LOGGING IN***********');

		const { data, error } = await supabase.auth.signInWithOtp({
			email: email,
			options: {
				emailRedirectTo: redirectURL
			}
		});

		setTimeout(() => {
			state = 'submitted';
		}, 1000);
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
			<input type="submit" disabled={state === 'loading'} value="Login" />
		</form>
	{:else}
		<h2>Check your Email</h2>
		<p class="text-gray-500 mb-8">
			Please submit another request in 60s if the email does not arrive.
		</p>
	{/if}
</div>

<style lang="postcss">
	input[type='email'] {
		@apply w-full px-3 py-2 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600;
	}

	label {
		@apply block text-sm font-medium leading-6 text-gray-900 mt-4;
	}

	h2 {
		@apply mt-4 mb-6 text-3xl font-bold tracking-tight text-gray-900;
	}

	input[type='submit'] {
		@apply rounded-md mt-8 w-full px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 bg-primary-600 cursor-pointer;
	}

	input[type='submit']:disabled {
		@apply cursor-not-allowed bg-slate-500;
	}
</style>
