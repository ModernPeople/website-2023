<script lang="ts">
	// import { PageTransition } from 'sveltekit-page-transitions'
	import { browser } from '$app/environment';

	import MenuIcon from '$icons/menu.svg?component';
	import Logotype from '$icons/logotype.svg?component';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// global styles
	import '../reset.css';
	import '../global.css';

	let sidebar = false;

	let toggle_sidebar = () => (sidebar = !sidebar);
	let close_sidebar = () => (sidebar = false);
	$: if (browser) {
		if (sidebar) {
			document.body.addEventListener('click', close_sidebar, {once: true});
		} else {
			document.body.removeEventListener('click', close_sidebar)
		}
	}
</script>

<div class="container">
	<header>
		<button on:click|stopPropagation={toggle_sidebar} class="svg-button">
			<MenuIcon />
		</button>
		<Logotype width="200" class="logo" />
	</header>

	<aside class:sidebar>
		<Navigation on:click={close_sidebar}/>
	</aside>

	<slot />

	<Footer />
</div>

<style>
	/* Grid */
	.container {
		height: 100vh;
		height: -webkit-fill-available;
		max-height: -webkit-fill-available;
		background-color: var(--bg);

		gap: 0;

		display: grid;
		grid-template-areas:
			'header'
			'main'
			'footer';
		grid-template-rows:
			min-content
			minmax(0, 1fr)
			min-content;
	}

	/* Styles */

	/* main {
		font-size: 1.75rem;
		height: 100%;
		max-height: 100%;
		overflow-y: scroll;
		flex: 1;

		grid-area: main;

		display: flex;
		flex-flow: column;

		padding: 0 2rem;
	} */

	header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;

		color: inherit;
		/* background-color: inherit; */

		/* Grid */
		grid-area: header;
		padding: var(--padding);
	}

	/* use of global is need here because `class` 
	   is not recognized on components… *sigh* */
	header :global(.logo) {
		/* Keep logo from overlapping with `absolute`ly positioned button */
		margin: 0 calc(2.5 * var(--padding));
	}

	aside {
		background-color: var(--international-orange);
		position: absolute;
		left: -100%;
		min-width: 320px;
		transition: left 0.5s;
		height: 100%;
		z-index: 100;
	}
	aside.sidebar {
		left: 0px;
	}

	.svg-button {
		z-index: 200;
		position: absolute;
		padding: calc(var(--padding) / 2);
		left: calc(var(--padding) / 2);
		width: calc(max(var(--padding), 1.5rem) + var(--padding));
		height: auto;
		cursor: pointer;
		color: inherit;
		opacity: 1;
	}
	.svg-button:hover {
		/* margin: -.5rem; */
		/* padding: .5rem; */
		/* background-color: var(--international-orange); */
		/* color: var(--black-bean); */
		opacity: 0.67;
		/* box-shadow: 0px 0px 5px black; */
	}
	/* 
	@media (min-width: 768px) {
		main {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr;
			grid-auto-flow: column;
			gap: var(--padding);
		}
	} */
</style>
