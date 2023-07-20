<script lang="ts">
	import { Container } from '$components/layout';
	import { darkMode } from '$lib/stores/darkMode';

	import { Toggle } from '$components/form';

	export let data;

	console.log(data);
</script>

<Container layout="even">
	<div slot="left">
		<h1>H1 Header</h1>
		<h2>H2 Header</h2>
		<h3>H3 Header</h3>
		<h4>H4 Header</h4>
		<h5>H5 Header</h5>
		<h6>H6 Header</h6>

		<p>
			This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
			ex ea commodo consequat.
		</p>

		<ul>
			<li>Unordered List Item 1</li>
			<li>Unordered List Item 2</li>
			<li>Unordered List Item 3</li>
		</ul>

		<ol>
			<li>Ordered List Item 1</li>
			<li>Ordered List Item 2</li>
			<li>Ordered List Item 3</li>
		</ol>
	</div>

	<div slot="right">
		<h3>Sidebar</h3>
		<table>
			<tr>
				<th>Header 1</th>
				<th>Header 2</th>
				<th>Header 3</th>
			</tr>
			<tr>
				<td>Row 1 Data 1</td>
				<td>Row 1 Data 2</td>
				<td>Row 1 Data 3</td>
			</tr>
			<tr>
				<td>Row 2 Data 1</td>
				<td>Row 2 Data 2</td>
				<td>Row 2 Data 3</td>
			</tr>
		</table>

		<h3>Dark Mode</h3>
		<Toggle enabled={$darkMode} onEnable={() => darkMode.set(true)} onDisable={() => darkMode.set(false)} />
	</div>
</Container>
