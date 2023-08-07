<script lang="ts">
	import { Step1AccountInformation } from '../components';
	import { Step2FinancialInformation } from '../components';
	import { Subscription } from '../components';
	import Step0Hello from '../components/Step0Hello.svelte';

	export let data;

	let step = 0;
	$: console.log('Step changed to: ', step);

	const { profile } = data;

	const next = () => {
		step = step + 1;
		console.log('READY FOR NEXT STEP', profile);
	};

	const prev = () => {
		step = step - 1;
	};
</script>

{#if step === 0}
	<Step0Hello {next} />
{:else if step === 1}
	<Step1AccountInformation {profile} {next} />
{:else if step === 2}
	<Step2FinancialInformation {profile} {prev} {next} />
{/if}
<div style="display:{step === 3 ? 'block' : 'none'}">
	<Subscription {prev} />
</div>
