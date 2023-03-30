<script lang="ts">
	import { handleLogin } from '$lib/supabaseClient';

	let email = '';
	let submitted = false;

	let timer = 5;

	const submitEmail = async () => {
		//send magic link to email
		await handleLogin(email);

		submitted = true;

		//set a timer for 30 seconds and clear the interval when timer = 0
		const interval = setInterval(() => {
			timer--;
			if (timer === 0) {
				clearInterval(interval);
			}
		}, 1000);
	};

	const reset = () => {
		submitted = false;
		email = '';
		timer = 30;
	};
</script>

<div class="grid grid-cols-1 md:grid-cols-[58%_42%] lg:grid-cols-2 h-full overflow-hidden">
	<div class="pt-[25%] bg-white z-20 p-8 sm:pl-16">
		<div class="w-80 sm:w-96 mx-auto">
			<img class="h-12 w-auto" src="/logo.png" alt="Your Company" />
			{#if submitted}
				<h2>Please Check Your Email</h2>
				<p class="text-gray-500 mb-8">
					Magic Link sent to {email}. Please wait 30s for the email to arrive.
				</p>
				{#if timer > 0}
					<p class="m4-4 leadering-7">
						Please wait {timer} seconds to try again
					</p>{/if}
				{#if timer === 0}
					<button on:click={reset} class="mt-4 text-sm text-primary-600">← Try Again</button>
				{/if}
			{:else}
				<form on:submit|preventDefault={submitEmail}>
					<h2>Sign in to your account</h2>
					<p class="text-gray-500 mb-8">
						Portfolio Lab uses passwordless login for added security, please enter your email below
						and a magic link will be sent to your email.
					</p>
					<label for="email" class="block text-sm font-medium leading-6 text-gray-900"
						>Email address</label
					>

					<input
						bind:value={email}
						id="email"
						name="email"
						type="email"
						autocomplete="off"
						required
						class="w-full px-3 py-2 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
					/>

					<input
						type="submit"
						value="Send Login Link"
						class="w-full mt-6 bg-primary-300 text-white rounded-md py-2"
					/>
				</form>
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

	input[type='submit']:hover {
		@apply bg-primary-400 cursor-pointer;
	}

	h2 {
		@apply mt-4 mb-6 text-3xl font-bold tracking-tight text-gray-900;
	}
</style>
