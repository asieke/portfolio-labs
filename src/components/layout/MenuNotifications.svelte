<script lang="ts">
	import { Bell } from '$svg';
	import { timeAgo } from '$lib/shared/formatters';
	import { notificationMenuShowing } from '$lib/stores/notificationMenu';
	import { fakeNotifications } from '$data/sample';
</script>

<div id="notification-menu" class="relative mt-0.5 mr-1">
	<button
		type="button"
		on:click={() => notificationMenuShowing.set(!$notificationMenuShowing)}
		class="flex-shrink-0 rounded-full p-1 text-cyan-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none"
	>
		<Bell />
	</button>

	{#if $notificationMenuShowing}
		<div
			class="dropdown absolute -right-4 mt-3 z-10 w-96 px-6 origin-top-right rounded-md py-1 shadow-lg ring-opacity-5 focus:outline-none"
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="user-menu-button"
			tabindex="-1"
		>
			<!-- Active: "bg-gray-100", Not Active: "" -->

			<div>
				<ul class="divide-y divide-gray-200">
					{#each fakeNotifications as notification}
						<li class="py-4">
							<div class="flex space-x-3">
								<div class="flex-1 space-y-1">
									<div class="flex items-center justify-between">
										<h3 class="text-sm font-medium">{notification.title}</h3>
										<p class="text-sm">{timeAgo(notification.time)}</p>
									</div>
									<p class="text-xs text-gray-500">
										{notification.description}
									</p>
								</div>
							</div>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	{/if}
</div>
