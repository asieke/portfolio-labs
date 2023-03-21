<script lang="ts">
	export let view = 'desktop';
	export let callback = () => {};
</script>

<a class={view} on:click|stopPropagation={callback} href="/">Home</a>
<a class={view} on:click|stopPropagation={callback} href="/dashboard">Dashboard</a>
<a class={view} on:click|stopPropagation={callback} href="/taxes">Taxes</a>
<a class={view} on:click|stopPropagation={callback} href="/recommendations">Recommendations</a>

<style lang="postcss">
	a.mobile {
		@apply block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800;
	}
	a.desktop {
		@apply text-white rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10;
	}
</style>
