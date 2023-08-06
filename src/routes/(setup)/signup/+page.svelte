<script lang="ts">
	import axios from 'axios';
	import { Logo } from '$components/brand';
	import { ValueProp } from '../components';
	import { checkEmail, checkFullName } from '$lib/utils/validation';

	let email = { value: 'asieke@gmail.com', error: '', valid: false };
	let name = { value: 'Alex Sieke', error: '', valid: false };

	const handleSubmit = async () => {
		email = checkEmail(email);
		name = checkFullName(name);
		if (email.valid && name.valid) {
			let { data } = await axios.post('/api/auth', { email: email.value, name: name.value });
			console.log('submit', data);
		} else {
			console.log('error');
		}
	};
</script>

<div class="mx-auto grid min-h-screen max-w-6xl grid-cols-1 md:grid-cols-2">
	<div class="hidden py-24 pl-12 pr-20 md:block">
		<ValueProp />
	</div>
	<div class="">
		<div class="ml-8 mr-8 h-full border-l-[1px] border-r-[1px] border-dashed border-slate-500 border-opacity-10 py-8 md:ml-0 md:py-16">
			<div class="block md:hidden">
				<div class="pb-4">
					<div class="flex flex-row space-x-1 text-xl font-bold leading-8 tracking-tighter"><Logo class="h-6 w-6 pt-2" /><span>Portfolio Labs</span></div>
				</div>
			</div>
			<div class="-ml-[3px] min-h-[400px] rounded-md bg-slate-50 p-8 shadow-2xl md:p-12 md:px-16" style="width: calc(100% + 6px)">
				<h3 class="text-xl font-bold leading-8 antialiased">Create an Account</h3>
				<form class="mt-6 space-y-6">
					<div>
						<label for="email">Email address <span class="error">{email.error}</span></label>
						<input bind:value={email.value} on:blur={() => (email = checkEmail(email))} type="email" name="email" placeholder="warren.buffet@gmail.com" />
					</div>
					<div>
						<label for="name">Full Name <span class="error">{name.error}</span></label>
						<input bind:value={name.value} on:blur={() => (name = checkFullName(name))} type="text" name="name" placeholder="Warren Buffet" />
					</div>
					<div class="pt-4">
						<button on:click|preventDefault={handleSubmit} class="submit">Get Started</button>
					</div>

					<div class="w-full pt-4 text-center">
						<p class="text-sm text-slate-500">Have an account? <a href="/signin">Sign in</a></p>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
