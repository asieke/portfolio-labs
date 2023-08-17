<script lang="ts">
	import { onMount } from 'svelte';
	import { formatPercent } from '$lib/utils/format';

	export let values: { name: string; value: number; color: string }[];
	export let onDragHandler: (values: { name: string; value: number; color: string }[]) => void;

	let dragging = false;
	let dragIndex = -1;

	const updateThresholds = () => {
		thresholds.length = 0;
		for (let i = 0; i < values.length - 1; i++) {
			thresholds.push((thresholds[i - 1] || 0) + values[i].value);
		}
	};

	let thresholds: number[] = [];
	updateThresholds();

	let slider: HTMLDivElement;

	const mouseMove = (e: MouseEvent) => {
		const rect = slider.getBoundingClientRect();
		const pos = (100 * (e.clientX - rect.x)) / rect.width;
		if (thresholds.some((t) => Math.abs(pos - t) < 2)) {
			slider.style.cursor = 'col-resize';
		} else {
			slider.style.cursor = 'default';
		}

		if (dragging) {
			const change = pos - thresholds[dragIndex];
			if (values[dragIndex].value + change >= 2 && values[dragIndex + 1].value - change >= 2) {
				values[dragIndex].value += change;
				values[dragIndex + 1].value -= change;
				updateThresholds();
			}
		}
	};

	const mouseDown = (e: MouseEvent) => {
		const rect = slider.getBoundingClientRect();
		const pos = (100 * (e.clientX - rect.x)) / rect.width;
		dragging = thresholds.some((t, i) => {
			if (Math.abs(pos - t) < 2) {
				dragIndex = i;
				return true;
			}
			return false;
		});
	};

	const mouseUp = () => {
		dragging = false;
		dragIndex = -1;
		onDragHandler(values);
	};

	onMount(() => {
		slider.addEventListener('mouseenter', () => {
			slider.addEventListener('mousemove', mouseMove);
			slider.addEventListener('mousedown', mouseDown);
			window.addEventListener('mouseup', mouseUp);
		});

		slider.addEventListener('mouseleave', () => {
			slider.removeEventListener('mousemove', mouseMove);
			slider.removeEventListener('mousedown', mouseDown);
			window.removeEventListener('mouseup', mouseUp);
			dragging = false; // Ensure that dragging stops when leaving the div
			dragIndex = -1;
		});
	});
</script>

{#if values}
	<div class="noselect flex w-full flex-row items-center" bind:this={slider}>
		{#each values as value}
			<div class="h-full px-1 py-2 text-xs text-white" style="background-color: {value.color}; width: {value.value}%">{formatPercent(value.value / 100, 0)}</div>
		{/each}
	</div>
{/if}

<style lang="postcss">
	.noselect {
		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Safari */
		-khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Old versions of Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
		user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */
	}
</style>
