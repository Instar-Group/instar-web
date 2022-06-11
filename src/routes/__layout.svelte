<script>
	import '../app.css';
	import { isOverlayOpen } from '../stores/OverlayStore';
	import Overlay from '../components/Overlay.svelte';
</script>

{#if $isOverlayOpen}
	<Overlay/>
{/if}

<div >
    <slot/>
</div>
