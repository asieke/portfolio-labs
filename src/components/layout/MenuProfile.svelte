<script lang="ts">
	import { LinksProfile } from '$components/layout';
	import { profileMenuShowing } from '$lib/stores/profileMenu';
</script>

<div id="profile-menu" class="relative">
	<div>
		<button
			type="button"
			on:click={() => profileMenuShowing.set(!$profileMenuShowing)}
			class="flex rounded-full bg-white text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100"
			id="user-menu-button"
			aria-expanded="false"
			aria-haspopup="true"
		>
			<img
				class="h-8 w-8 rounded-full"
				src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
				alt=""
			/>
		</button>
	</div>

	{#if $profileMenuShowing}
		<div
			class="dropdown absolute -right-2 z-10 mt-2 w-48 origin-top-right rounded-md py-1 shadow-lg focus:outline-none"
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="user-menu-button"
			tabindex="-1"
		>
			<!-- Active: "bg-gray-100", Not Active: "" -->
			<LinksProfile callback={() => profileMenuShowing.set(false)} view="desktop" />
		</div>
	{/if}
</div>
