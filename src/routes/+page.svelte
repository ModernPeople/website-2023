<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { fade, draw } from 'svelte/transition';

	import { options } from '../stores';

	// import PageTransition from '$lib/components/PageTransition.svelte';
	// import { PageTransition } from 'sveltekit-page-transitions'

	import LogotypeColor from '$icons/logotype-color.svg?component';

	const show_splashscreen_for_ms = $options.show_splashscreen_for_ms;
	onMount(() => setTimeout(() => goto(`${base}/work`), show_splashscreen_for_ms));
</script>

<div class="container" out:fade={{ duration: show_splashscreen_for_ms }}>
	<LogotypeColor style="max-width: max(200px, 50vw);" />
</div>

<style>
	.container {
		/* work around a Chrome rendering issue where part of the image is drawn in an adjusted manner, and a part isn't */
		--black-bean: rgb(68, 0, 0) !important;

		position: fixed;
		display: grid;
		width: 100%;
		height: 100%;
		align-content: center;
		justify-items: center;
		background-color: var(--black-bean);
		z-index: 4;
		cursor: default;
	}
</style>
