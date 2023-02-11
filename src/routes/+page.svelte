<script lang="ts">
	import { goto } from '$app/navigation';
    import { browser } from '$app/environment';
	import { fade } from 'svelte/transition';

	// import PageTransition from '$lib/components/PageTransition.svelte';
	// import { PageTransition } from 'sveltekit-page-transitions'

	import LogotypeColor from "$icons/logotype-color.svg?component";

	if (browser) {
		setTimeout(() => {
			goto('/work');
		}, 500);
	}
</script>


<div class="container" transition:fade>
	<LogotypeColor style="max-width: max(200px, 50vw);"/>
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