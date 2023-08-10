<script lang="ts">
	export let data: {
		title: string;
		description: string;
		link: string;
	};
</script>

<div class="flex flex-col rounded-lg border border-slate-300 bg-white p-6 shadow-lg">
	<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
		<svg class="h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
			<path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
		</svg>
		{data.title}
	</dt>
	<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
		<p class="flex-auto">{data.description}</p>
		<p class="mt-6">
			<a href={data.link} class="text-sm font-semibold leading-6 text-indigo-600">Learn more <span aria-hidden="true">→</span></a>
		</p>
	</dd>
</div>
