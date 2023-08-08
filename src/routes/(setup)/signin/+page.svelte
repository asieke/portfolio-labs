<script lang="ts">
	import { PUBLIC_APP_URL } from '$env/static/public';
	const redirectURL = PUBLIC_APP_URL + '/auth/redirect';

	import { checkEmail } from '$lib/utils/validation';
	import { page } from '$app/stores';

	const { supabase } = $page.data;

	let email = { value: 'asieke@gmail.com', error: '', valid: false };

	let sent = false;
	let seconds = 30;

	const handleSubmit = async () => {
		email = checkEmail(email);
		if (email.valid) {
			supabase.auth.signInWithOtp({ email: email.value, options: { emailRedirectTo: redirectURL } });
			sent = true;
			setInterval(() => {
				seconds--;
				if (seconds === 0) {
					sent = false;
					seconds = 30;
				}
			}, 1000);
		}
	};
</script>

<div class="mx-auto grid min-h-screen max-w-xl">
	<div class="ml-8 mr-8 h-full border-l-[1px] border-r-[1px] border-dashed border-slate-500 border-opacity-10 py-8 md:ml-0 md:py-16">
		<div class="-ml-[3px] rounded-md bg-slate-50 p-8 shadow-2xl md:p-12 md:px-16" style="width: calc(100% + 6px)">
			<h3 class="text-xl font-bold leading-8 antialiased">Sign In</h3>
			<form class="mt-6 space-y-6">
				<div>
					<label for="email">Email address <span class="error">{email.error}</span></label>
					{#if sent}
						<p>{email.value}</p>
					{:else}
						<input bind:value={email.value} on:blur={() => (email = checkEmail(email))} type="email" name="email" placeholder="warren.buffet@gmail.com" />
					{/if}
				</div>
				<div class="pt-4">
					{#if sent}
						<p>You should receive an email with your login link. If the email did not arrive please try again in {seconds} seconds.</p>
					{:else}
						<button on:click|preventDefault={handleSubmit} class="submit">Send me a Login Link → </button>
					{/if}
				</div>
			</form>
		</div>
	</div>
</div>

<style lang="postcss">
	p {
		@apply text-slate-500;
	}
</style>
