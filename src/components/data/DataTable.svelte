<script lang="ts">
	import type { DataType } from '$data/types';
	import { getDataTotals } from '$lib/dataTransformations';
	import { format } from '$lib/formatters';
	export let data: DataType;
	export let showTotal = true;
	const total = getDataTotals(data);
</script>

<div class="data-table px-4 sm:px-6 lg:px-8">
	<div class="sm:flex sm:items-center">
		<div class="sm:flex-auto">
			<h1 class="text-base font-semibold leading-6  ">Users</h1>
			<p class="mt-2 text-sm">
				A list of all the users in your account including their name, title, email and role.
			</p>
		</div>
		<div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
			<button
				type="button"
				class="block rounded-md  py-2 px-3 text-center text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  "
				>Add user</button
			>
		</div>
	</div>
	<div class="mt-8 flow-root">
		<div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
				<table class="min-w-full space-x-3">
					<thead>
						<tr>
							{#each data.headers as header}
								<th scope="col" class="py-3.5 text-left text-sm font-semibold sm:pl-0">{header}</th>
							{/each}
						</tr>
					</thead>
					<tbody class="divide-y">
						{#each data.data as row}
							<tr>
								{#each row as value, i}
									<td class="whitespace-nowrap py-4 text-sm">{format(value, data.formats[i])}</td>
								{/each}
							</tr>
						{/each}
						{#if showTotal}
							<tr class="">
								{#each total as value, i}
									<td
										class="border-t-slate-300 border-dashed border-t-2 whitespace-nowrap py-4 text-sm"
										>{format(value, data.formats[i])}</td
									>
								{/each}
							</tr>
						{/if}
						<!-- More people... -->
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
