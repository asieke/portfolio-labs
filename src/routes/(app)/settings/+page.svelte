<script lang="ts">
	import { darkMode } from '$lib/stores/darkMode';
	import { Toggle } from '$components/form';
</script>

<h3>Dark Mode</h3>
<Toggle enabled={$darkMode} onEnable={() => darkMode.set(true)} onDisable={() => darkMode.set(false)} />
