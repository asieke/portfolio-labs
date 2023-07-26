<script lang="ts">
	import type { Position } from '$types/positions';
	import { KeyValueTable } from '$components/chart';

	export let position: Position;

	const data = [
		{ name: 'Symbol', value: position.symbol, format: 'string', colorText: false },
		{ name: 'Name', value: position.name, format: 'string', colorText: false },
		{ name: 'Quantity', value: position.quantity, format: 'number', colorText: false },
		{ name: 'Price', value: position.price, format: 'currency', colorText: false },
		{ name: 'Market Value', value: position.market_value, format: 'currency', colorText: false },
		{ name: 'Cost Basis', value: position.cost_basis, format: 'currency', colorText: false },
		{ name: 'Gain Loss (Total)', value: position.market_value - position.cost_basis, format: 'currency', colorText: true },
		{ name: 'Gain Loss (Yesterday)', value: position.market_value - position.market_value_1d, format: 'currency', colorText: true },
		{ name: 'Gain Loss (Last 7)', value: position.market_value - position.market_value_7d, format: 'currency', colorText: true }
	];
</script>

<KeyValueTable {data} />
