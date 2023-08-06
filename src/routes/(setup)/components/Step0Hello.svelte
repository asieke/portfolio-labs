<script lang="ts">
	export let next: () => void;
</script>

<div class="mx-auto min-h-screen max-w-xl grid-cols-1">
	<div class="ml-8 mr-8 min-h-screen border-l-[1px] border-r-[1px] border-dashed border-slate-500 border-opacity-10 py-8 md:ml-0 md:py-16">
		<div class="-ml-[3px] rounded-lg bg-white p-8 shadow-2xl md:p-12 md:px-16" style="width: calc(100% + 6px)">
			<div class="space-y-4">
				<h3 class="text-xl font-bold leading-8 antialiased">Lets get started!</h3>
				<p class="pb-4 leading-6 tracking-tight text-slate-500">
					Thanks for signing up for Portfolio Labs. We need to collect some basic information about you in order to personalize your financial plan.
				</p>
				<button class="submit" on:click={next}>Lets Go → </button>
			</div>
		</div>
	</div>
</div>
