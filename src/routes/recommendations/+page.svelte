<script lang="ts">
	import { DataTable, PieChart } from '$components/data';
	import { Container } from '$components/layout';

	import { fakePortfolio } from '$data/sample';
</script>

<div class="grid grid-cols-1 lg:grid-cols-rightcol gap-4">
	<div class="row-span-2">
		<Container>
			<DataTable data={fakePortfolio} />
		</Container>
	</div>
	<div class="space-y-4">
		<Container /><Container>Right Div 2</Container>
	</div>
</div>
