<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fade, draw } from 'svelte/transition';

	// import PageTransition from '$lib/components/PageTransition.svelte';
	// import { PageTransition } from 'sveltekit-page-transitions'

	import LogotypeColor from '$icons/logotype-color.svg?component';

	onMount(() => {
		setTimeout(() => goto('/work'), 500);
	});
</script>

<div class="container" out:fade={{duration: 500}}>
	<LogotypeColor style="max-width: max(200px, 50vw);" />
</div>

<style>
	.container {
		position: fixed;
		display: grid;
		width: 100%;
		height: 100%;
		align-content: center;
		background-color: var(--black-bean-burgandy);
		z-index: 4;
		cursor: auto;
	}
	.container > :global(*) {
		justify-self: center;
	}
</style>
