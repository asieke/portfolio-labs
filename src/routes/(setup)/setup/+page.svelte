<script lang="ts">
	import { Step1AccountInformation } from '../components';

	const next = () => {
		console.log('next');
	};
</script>

<div class="mx-auto min-h-screen max-w-xl grid-cols-1">
	<div class="ml-8 mr-8 min-h-screen border-l-[1px] border-r-[1px] border-dashed border-slate-500 border-opacity-10 py-8 md:ml-0 md:py-16">
		<div class="-ml-[3px] rounded-lg bg-white p-8 shadow-2xl md:p-12 md:px-16" style="width: calc(100% + 6px)">
			<Step1AccountInformation />
		</div>
	</div>
</div>
