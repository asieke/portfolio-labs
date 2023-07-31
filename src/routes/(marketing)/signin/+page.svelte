<script lang="ts">
	import { PUBLIC_APP_URL } from '$env/static/public';

	import { Logo } from '$components/brand';
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

		if (email.length < 3) {
			errorText = 'Please enter a valid email address';
			state = 'initial';
			return;
		}

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

<div class="min-h-screen min-w-full bg-slate-800 pt-20">
	<Container layout="tight">
		<div class="w-[50vw] md:w-[400px]">
			<div class="flex w-full flex-col items-center justify-center">
				<Logo class="mb-3 h-8 w-8" />
				<h3 class="text-center font-semibold text-slate-700 dark:text-slate-300">Sign in to your account</h3>
			</div>

			{#if state === 'initial' || state === 'loading'}
				<form>
					<div class="mt-5">
						<label for="email" class="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
							>Email address
							<span class="text-red-700">{errorText}</span>
						</label>
						<div class="mt-2">
							<input
								bind:value={email}
								id="email"
								name="email"
								type="email"
								autocomplete="off"
								required
								class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
				</form>
			{:else if state === 'success'}
				<div class="mt-5 w-full space-y-4 text-center text-slate-700 dark:text-slate-300">
					<p>You will receive an email with your login information at</p>
					<p class="font-semibold">{email}</p>
					<p class="">Didn't receive an email? Try again in {timer} seconds</p>
				</div>
			{/if}

			{#if state === 'initial'}
				<button class="submit mt-6 w-full" on:click={handleSubmit}>Sign In</button>
				<p class="mt-10 text-center text-sm text-gray-500">
					Not a member?
					<a href="/" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
				</p>
			{:else if state === 'loading'}
				<button class="disabled mt-6 w-full" on:click={handleSubmit}>Sign In</button>
			{/if}
		</div>
	</Container>
</div>

<style lang="postcss">
	button.submit {
		@apply rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600;
	}

	button.disabled {
		@apply cursor-not-allowed rounded-md bg-gray-300 px-3 py-2 text-sm font-semibold text-gray-600 shadow-sm;
	}

	input {
		@apply block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6;
		@apply text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 dark:bg-slate-800 dark:text-gray-100 dark:ring-gray-700;
	}
</style>
