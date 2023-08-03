<script lang="ts">
	//typescript options must be exactly length 2
	export let options: string[];
	export let onChange: (index: number) => void;

	let selected = 0;

	const toggle = () => {
		selected = selected === 0 ? 1 : 0;
		onChange(selected);
	};
</script>

<button class="relative mx-auto flex h-14 w-[230px] flex-row rounded-xl bg-slate-200 py-2 dark:bg-slate-700" on:click={toggle}>
	<div class="z-1 absolute left-[10px] {selected === 1 ? 'translate-x-[110px]' : ''} h-10 w-[100px] rounded-lg bg-indigo-500 transition-all duration-100 ease-in-out" />
	<div class="z-2 absolute left-[10px] {selected === 0 ? 'selected' : ''} flex h-10 w-[100px] items-center justify-center rounded-lg">{options[0]}</div>
	<div class="z-2 absolute left-[120px] {selected === 1 ? 'selected' : ''} flex h-10 w-[100px] items-center justify-center rounded-lg">{options[1]}</div>
</button>

<style>
	.selected {
		@apply text-white;
	}
</style>
