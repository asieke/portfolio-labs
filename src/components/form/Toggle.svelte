<script lang="ts">
	export let enabled = false;
	export let onEnable = () => {};
	export let onDisable = () => {};

	const toggle = () => {
		enabled = !enabled;
		if (enabled) {
			onEnable();
		} else {
			onDisable();
		}
	};
</script>

<!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
<button
	type="button"
	class="{enabled
		? 'bg-indigo-600'
		: 'bg-gray-200'} relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
	role="switch"
	aria-checked="false"
	on:click={toggle}
>
	<span class="sr-only">Use setting</span>
	<!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
	<span
		aria-hidden="true"
		class="{enabled
			? 'translate-x-5'
			: 'translate-x-0'} pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
	/>
</button>
