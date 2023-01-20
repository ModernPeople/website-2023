<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import './reset.css';
	import './global.css';
	import './brand-colors.css';

	import { PageTransitionController, fade } from 'sveltekit-page-transitions'
</script>

<PageTransitionController transition={fade}> 
	<slot></slot>
</PageTransitionController>