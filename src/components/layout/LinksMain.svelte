<script lang="ts">
	export let view = 'desktop';
	export let callback = () => {};
</script>

<a class={view} on:click|stopPropagation={callback} href="/home">Dashboard</a>
<a class={view} on:click|stopPropagation={callback} href="/accounts">Accounts</a>
<a class={view} on:click|stopPropagation={callback} href="/positions">Positions</a>
<a class={view} on:click|stopPropagation={callback} href="/performance">Performance</a>
<a class={view} on:click|stopPropagation={callback} href="/allocation">Allocation</a>

<style lang="postcss">
	a.mobile {
		@apply block rounded-md px-3 py-2 text-base font-medium;
	}
	a.desktop {
		@apply rounded-md px-3 py-2 text-sm font-medium;
	}
</style>
