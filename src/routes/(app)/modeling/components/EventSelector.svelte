<script lang="ts">
	const emojis = ['👶', '🎓', '💼', '💍', '🎩', '🏡', '👨‍👩‍👧', '🌴', '🎉', '💸'];
	//create an array with numbers 1-40
	const numbers = Array.from(Array(40).keys()).map((x) => x + 1);

	export let onEventChangeHandler: (rows: { event: string; when: number; amount: number }[]) => void;

	let rows: { event: string; when: number; amount: number }[] = [
		{ event: '💸', when: 7, amount: 1000000 },
		{ event: '🏡', when: 3, amount: -500000 }
	];

	const addRow = () => {
		rows = [...rows, { event: '', when: 0, amount: 0 }];
	};

	const removeRow = (index: number) => {
		rows = rows.filter((_, i) => i !== index);
	};

	$: {
		onEventChangeHandler(rows);
	}
</script>

{#each rows as row, i}
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="mb-2 flex w-full flex-row space-x-2">
		<div>
			<select name="event" bind:value={row.event}>
				{#each emojis as emoji}
					<option value={emoji}>{emoji}</option>
				{/each}
			</select>
		</div>
		<div>
			<select name="when" class="w-24" bind:value={row.when}>
				{#each numbers as number}
					<option value={number}>{number} years</option>{/each}
			</select>
		</div>
		<div class="relative">
			<input type="number" name="amount" class="form-control" bind:value={row.amount} />
			<button on:click|preventDefault={() => removeRow(i)} class="absolute -right-8 top-0 p-2.5 text-xl text-red-500 opacity-0 hover:opacity-100">✖</button>
		</div>
	</div>
{/each}
<button on:click|preventDefault={addRow} class="h-8 w-full bg-slate-100 text-xs hover:border-[1px] hover:border-dashed hover:border-slate-400 hover:bg-slate-200 dark:bg-slate-800">Add an Event</button
>
