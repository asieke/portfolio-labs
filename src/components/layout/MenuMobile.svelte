<script lang="ts">
	import { LinksMain, LinksProfile } from '$components/layout';
	import { Bars, Xmark, Bell } from '$svg';
	import { mobileMenuShowing } from '$lib/stores/mobileMenu';
</script>

<div id="mobile-menu" class="">
	<!-- Mobile menu button -->
	<button
		type="button"
		on:click={() => mobileMenuShowing.set(!$mobileMenuShowing)}
		class="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-cyan-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none"
		aria-expanded="false"
	>
		<Bars />
		<!-- Menu open: "hidden", Menu closed: "block" -->
	</button>
</div>

{#if $mobileMenuShowing}
	<div class="">
		<div class="fixed inset-0 z-20" aria-hidden="true" />
		<div
			class="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition"
		>
			<div class="dropdown divide-y divide-gray-200 rounded-lg shadow-lg">
				<div class="pt-3 pb-2">
					<div class="flex items-center justify-between px-4">
						<div>
							<img
								class="h-8 w-auto"
								src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=600"
								alt="Your Company"
							/>
						</div>
						<div class="-mr-2">
							<button
								type="button"
								on:click={() => mobileMenuShowing.set(false)}
								class="inline-flex items-center justify-center rounded-md bg-white dark:bg-gray-700 p-2"
							>
								<span class="sr-only">Close menu</span>
								<Xmark />
							</button>
						</div>
					</div>
					<div class="mt-3 space-y-1 px-2">
						<LinksMain view="mobile" callback={() => mobileMenuShowing.set(false)} />
					</div>
				</div>
				<div class="pt-4 pb-2">
					<div class="flex items-center px-5">
						<div class="flex-shrink-0">
							<img
								class="h-10 w-10 rounded-full"
								src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt=""
							/>
						</div>
						<div class="ml-3 min-w-0 flex-1">
							<div class="truncate text-base font-medium text-gray-800 dark:text-gray-200">
								Chelsea Hagon
							</div>
							<div class="truncate text-sm font-medium text-gray-500 dark:text-gray-400">
								chelsea.hagon@example.com
							</div>
						</div>
						<button
							type="button"
							class="ml-auto flex-shrink-0 rounded-full bg-white dark:bg-gray-700 p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
						>
							<span class="sr-only">View notifications</span>
							<Bell />
						</button>
					</div>
					<div class="mt-3 space-y-1 px-2">
						<LinksProfile callback={() => mobileMenuShowing.set(false)} view="mobile" />
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
