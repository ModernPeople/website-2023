<script lang="ts">
	import { goto } from '$app/navigation';
    import { browser } from '$app/environment';

	// import PageTransition from '$lib/components/PageTransition.svelte';
	import { PageTransition } from 'sveltekit-page-transitions'

	import LogotypeColor from "$icons/logotype-color.svg?component";


	if (browser) {
		setTimeout(() => {
			goto('/work');
		}, 1000);
	}
</script>

<!-- <PageTransition> -->
	<div class="container">
		<div class="inner">
			<LogotypeColor style="max-width: max(200px, 50vw)"/>
		</div>
	</div>
<!-- </PageTransition> -->

<style>
	/* vertical & horizontal centering via nested flexboxes without requiring CSS grid */
	.container {
		background-color: var(--black-bean-burgandy);
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.inner {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>