<script lang="ts">
	import axios from 'axios';
	import { openPlaidLink } from '$lib/clients/plaid';
	import type { Plaid } from 'plaid-link';

	import { addInstitution } from '$models/plaid';

	export let data;
	const { supabase, session } = data;
	let { institutions } = data;

	console.log(data);

	const connect = async () => {
		const res = await axios.post('/api/plaid/create_link_token');
		const link_token = res.data.link_token;
		console.log('0. Link Token', link_token);
		openPlaidLink(link_token, onSuccess);
	};

	const onSuccess = async (public_token: string, metadata: Plaid.OnSuccessMetaData) => {
		const { institution } = metadata;
		const res = await axios.post('/api/plaid/exchange_public_token', { public_token });

		const { access_token } = res.data;

		const intitutionData = {
			user_id: session?.user?.id || ('' as string),
			institution_id: institution?.institution_id || ('' as string),
			institution_name: institution?.name || ('' as string),
			access_token: access_token as string
		};

		institutions = await addInstitution(supabase, intitutionData);
	};

	const getHoldings = async (access_token: string) => {
		const res = await axios.post('/api/plaid/get_holdings', { access_token });
		console.log('Holdings', res.data);
	};
</script>

<h3>Connect your Financial Accounts via Plaid</h3>

<table class="mt-5 w-full rounded-md bg-slate-100 shadow-md">
	{#each institutions as institution}
		<tr>
			<td>{institution.institution_name}</td>
			<td>{institution.institution_id}</td>
			<td><button class="submit" on:click={() => getHoldings(institution.access_token)}>Get Holdings</button></td>
		</tr>
	{/each}
</table>

<div class="mt-5 flex flex-row space-x-5 bg-slate-300 p-4">
	<button id="link-button" class="submit" on:click={connect}>Link a new Account</button>
</div>

<style lang="postcss">
	td {
		@apply p-4;
	}
	tr:not(:last-child) {
		@apply border-b-[1px] border-b-slate-200;
	}
</style>
