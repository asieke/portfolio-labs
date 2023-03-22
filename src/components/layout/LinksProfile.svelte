<script lang="ts">
	export let callback: () => void;
	export let view = 'mobile';
</script>

<a class={view} href="/profile" on:click|stopPropagation={callback}>Your Profile</a>
<a class={view} href="/settings" on:click|stopPropagation={callback}>Settings</a>
<a class={view} href="/signout" on:click|stopPropagation={callback}>Sign out</a>

<style lang="postcss">
	a.desktop {
		@apply block px-4 py-2 text-sm;
	}

	a.mobile {
		@apply block rounded-md px-3 py-2 text-base font-medium;
	}
</style>
