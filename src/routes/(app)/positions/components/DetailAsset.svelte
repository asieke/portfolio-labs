<script lang="ts">
	import type { Asset } from '$types/assets';
	import { KeyValueTable } from '$components/chart';

	export let asset: Asset;

	const data = [
		{ name: 'Name', value: asset.name, format: 'string', colorText: false },
		{ name: 'Symbol', value: asset.symbol, format: 'string', colorText: false },
		{ name: 'Country', value: asset.country, format: 'string', colorText: false },
		{ name: 'Description', value: asset.description, format: 'string', colorText: false },
		{ name: 'Security Type', value: asset.security_type, format: 'string', colorText: false },
		{ name: 'Sector', value: asset.sector, format: 'string', colorText: false },
		{ name: 'Industry', value: asset.industry, format: 'string', colorText: false },
		{ name: 'Cusip', value: asset.cusip, format: 'string', colorText: false },
		{ name: 'Primary Asset Class', value: asset.primary_asset_class, format: 'string', colorText: false }
	];
</script>

<KeyValueTable {data} style={['w-1/4 text-left', 'w-3/4 text-left']} />
