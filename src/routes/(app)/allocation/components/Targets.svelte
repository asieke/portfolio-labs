<script lang="ts">
	export let targets;

	console.log(targets);
</script>

<table>
	{#each targets as row}
		<tr>
			<td>{row.name}</td>
		</tr>
	{/each}
</table>
