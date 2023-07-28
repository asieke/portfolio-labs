<script lang="ts">
	import { IconBell } from '$components/svg';
	import { notifications } from '$lib/data/sampleData';
	import { menuNotificationsShowing } from '$lib/stores/menuNotifications';
</script>

<div class="relative" id="menuNotifications">
	<button type="button" on:click={() => menuNotificationsShowing.set(!$menuNotificationsShowing)} class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white">
		<span class="sr-only">View notifications</span>
		<IconBell />
	</button>

	{#if $menuNotificationsShowing}
		<div class="absolute right-0 top-10">
			<div class="w-screen max-w-sm flex-auto rounded-3xl bg-white p-4 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 dark:bg-dark-950 dark:ring-gray-700">
				{#each notifications as { title, description }, i}
					<div class="relative rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-900">
						<a href="/" class="font-semibold text-gray-900 dark:text-gray-100">
							{title}
							<span class="absolute inset-0" />
						</a>
						<p class="mt-1 text-gray-600">{description}</p>
					</div>
				{/each}
			</div>
		</div>
	{/if}
</div>
