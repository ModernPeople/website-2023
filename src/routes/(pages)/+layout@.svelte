<script>
	// import { PageTransition } from 'sveltekit-page-transitions'
	
	import MenuIcon from "$icons/menu.svg?component";
	import Logotype from "$icons/logotype.svg?component";
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// global styles
	import '../reset.css';
	import '../global.css';
	
	let sidebar = false;
</script>

<!-- <PageTransition> -->
<div class="container">
	<header>
		<button on:click={()=> sidebar = !sidebar} class="svg-button">
			<MenuIcon />
		</button>
		<Logotype width="200" class="logo"></Logotype>
	</header>

	<aside class:sidebar>
		<Navigation on:click={()=> sidebar = false}/>
	</aside>

	<slot></slot>

	<Footer/>
</div>
<!-- </PageTransition> -->

<style>

	/* Grid */
	.container {
		height: 100vh;
		height: -webkit-fill-available;
		max-height: -webkit-fill-available;
		background-color: var(--white);

		gap: 0;

		display: grid;
		grid-template-areas: 
			"header"
			"main"
			"footer";
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

		background-color: var(--white);

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
		left: -500px;
		transition: all .25s;
		height: 100%;
		z-index: 100;
	}
	aside.sidebar {
		left: 0px
	}

	.svg-button {
		z-index: 200;
		position: absolute;
		left: var(--padding);
		width: max(var(--padding), 1.5rem);
		height: auto;
	}
	.svg-button:hover {
		/* margin: -.5rem; */
		/* padding: .5rem; */
		/* background-color: var(--light-gray); */
		color: var(--black-bean-burgandy);
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