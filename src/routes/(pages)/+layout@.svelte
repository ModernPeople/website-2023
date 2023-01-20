<script>
	import { PageTransition } from 'sveltekit-page-transitions'
	
	import MenuIcon from "$icons/menu.svg?component";
	import Logotype from "$icons/logotype.svg?component";
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// global styles
	import '../reset.css';
	import '../global.css';
	
	let sidebar = false;
</script>

<PageTransition>
<div class="container">
	<header>
		<button on:click={()=> sidebar = !sidebar} class="svg-button">
			<MenuIcon />
		</button>
		<Logotype class="logo" width="200" height="auto"></Logotype>
	</header>

	<aside class:sidebar>
		<Navigation on:click={()=> sidebar = false}/>
	</aside>

	<main>
		<slot></slot>
	</main>

	<Footer/>
</div>
</PageTransition>

<style>

	/* Grid */
	.container {
		height: 100%;
		height: -webkit-fill-available;
		display: flex;
		flex-direction: column;
	}

	/* Styles */

	header, main {
		background-color: var(--white);
		padding: 2rem;
	}

	main {
		font-size: 1.75rem;
		height: 100%;
		overflow-y: scroll;
		flex: 1;
	}

	header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}

	aside {
		position: absolute;
		left: -500px;
		transition: all .25s;
		height: 100%;
	}
	aside.sidebar {
		left: 0px
	}

	.svg-button {
		z-index: 1;
		position: absolute;
		left: 2rem;
	}
	.svg-button:hover {
		/* margin: -.5rem; */
		/* padding: .5rem; */
		/* background-color: var(--light-gray); */
		color: var(--black-bean-burgandy);
	}
</style>