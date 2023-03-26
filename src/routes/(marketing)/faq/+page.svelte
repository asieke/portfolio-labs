<script lang="ts">
	import { Container } from '../components';
	import Item from './Item.svelte';
	import { fakeQuestions } from '$data/sample';
</script>

<Container>
	<div class="max-w-3xl mx-auto">
		<h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">
			Frequently asked questions
		</h2>
		<dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
			{#each fakeQuestions as question}
				<Item question={question.question} answer={question.answer} />
			{/each}
		</dl>
	</div>
</Container>
