<script lang="ts">
	import { PUBLIC_APP_URL } from '$env/static/public';
	import { Container } from '$components/layout';
	import { page } from '$app/stores';

	const { supabase } = $page.data;

	let email = 'asieke@gmail.com';
	let state: 'initial' | 'loading' | 'success' = 'initial';
	let errorText = '';
	let timer = 10;

	const handleSubmit = async () => {
		state = 'loading';
		const redirectURL = PUBLIC_APP_URL + '/auth/redirect';

		const { data, error } = await supabase.auth.signInWithOtp({
			email: email,
			options: {
				emailRedirectTo: redirectURL
			}
		});
		if (error || !data) {
			errorText = error?.message || 'An error occurred';
			state = 'initial';
		} else {
			state = 'success';
			//increment timer variable down 1 every second, when it hits 0 set state to initial
			const interval = setInterval(() => {
				timer--;
				if (timer === 0) {
					clearInterval(interval);
					state = 'initial';
				}
			}, 1000);
			errorText = '';
		}
	};
</script>

<div class="w-[50vw] md:w-[400px]">
	<h3 class="text-center">Sign in to your account</h3>

	{#if state === 'initial' || state === 'loading'}
		<div class="mt-5">
			<label for="email" class="block text-sm font-medium leading-6 text-gray-900"
				>Email address
				<span class="text-red-700">{errorText}</span>
			</label>
			<div class="mt-2">
				<input
					bind:value={email}
					id="email"
					name="email"
					type="email"
					autocomplete="email"
					required
					class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				/>
			</div>
		</div>
	{:else if state === 'success'}
		<div class="mt-5 w-full text-center">
			<p>You will receive an email with your login information at</p>
			<p class="font-semibold">{email}</p>
			<p class="">Didn't receive an email? Try again in {timer} seconds</p>
		</div>
	{/if}

	{#if state === 'initial'}
		<button class="submit mt-6 w-full bg-gray-500" on:click={handleSubmit}>Sign In</button>
		<p class="mt-10 text-center text-sm text-gray-500">
			Not a member?
			<a href="/" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
		</p>
	{:else if state === 'loading'}
		<button class="disabled mt-6 w-full bg-gray-500" on:click={handleSubmit}>Sign In</button>
	{/if}
</div>
