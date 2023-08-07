<!--
 @component Lapsed
 A component that lets the user know their subscription is no longer active
 @param {function} next - A function that is called when the user clicks the continue button
-->

<script lang="ts">
	export let next: () => void;
</script>

<div class="mx-auto min-h-screen max-w-xl grid-cols-1">
	<div class="ml-8 mr-8 min-h-screen border-l-[1px] border-r-[1px] border-dashed border-slate-500 border-opacity-10 py-8 md:py-16">
		<div class="-ml-[3px] rounded-lg bg-white shadow-2xl" style="width: calc(100% + 6px)">
			<div class="flex flex-col md:flex-row">
				<div class="w-full space-y-8 rounded-lg bg-white p-8 md:p-12 md:px-12">
					<div>
						<h4 class="text-slate-600">Portfolio Labs</h4>
						<h3 class="text-2xl font-bold text-slate-800">Reactivate Your Account</h3>
						<p class="mt-4 text-slate-500">You do not currently have an active subscription. Please selected a plan to continue using Portfolio Labs.</p>
						<p class="mt-2 text-slate-500">If you do not want to re-subscribe, you may download all of your Portfolio Labs Data.</p>
					</div>
					<div class="flex flex-col space-y-4 pt-4">
						<button class="submit" on:click|preventDefault={next}>Re-active my Subscription</button>
						<button class="text-sm text-slate-500 hover:text-slate-600">No thanks, just download my data</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
