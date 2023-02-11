<script>
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { flip } from 'svelte/animate';
	import { crossfade, fade } from 'svelte/transition';
	import { textfit } from 'svelte-textfit';
	import { work_index } from '../../../stores';
	const [send, receive] = crossfade({ duration: 500 });

	import Circle from '$icons/circle.svg?component';

	import HbomaxPreview from './(projects)/hbomax/Preview.svelte';
	import CFRUPreview from './(projects)/cfru/Preview.svelte';
	import SiriusXMPreview from './(projects)/siriusxm/Preview.svelte';
	import PhantogramPreview from './(projects)/phantogram/Preview.svelte';
	import { onMount, afterUpdate, beforeUpdate } from 'svelte';

	let projects = [
		{ slug: 'siriusxm', name: 'SiriusXM', preview: SiriusXMPreview },
		{ slug: 'hbomax', name: 'HBO MAX', preview: HbomaxPreview },
		{ slug: 'vice', name: 'Vice', preview: null },
		{ slug: 'kblinka', name: 'Kblinka', preview: null },
		{ slug: 'nytimes', name: 'New York Times', preview: null },
		{ slug: 'smashfly-x', name: 'Smashfly X', preview: null },
		{ slug: 'ted', name: 'TED', preview: null },
		{ slug: 'ici', name: 'ICI', preview: null },
		{ slug: 'participants', name: 'Participants', preview: null },
		{ slug: 'phantogram', name: 'Phantogram', preview: PhantogramPreview },
		{ slug: 'tinashe', name: 'Tinashe', preview: null },
		{ slug: 'grace-mitchell', name: 'Grace Mitchell', preview: null },
		{ slug: 'bright-and-guilty', name: 'Bright & Guilty', preview: null },
		{ slug: 'raw-paper-records', name: 'Raw Paper Records', preview: null },
		{ slug: 'tcmb', name: 'TCMB', preview: null },
		{ slug: 'portalheads', name: 'Portalheads', preview: null },
		{ slug: 'animist', name: 'Animist', preview: null },
		{ slug: 'sierra-club', name: 'Sierra Club', preview: null },
		{ slug: 'doit', name: 'Do It', preview: null },
		{ slug: 'ted-ed', name: 'TED Ed', preview: null }
	];

	/* Cycling animation */
	let intervalID = null;

	onMount(start_cycling)

	function start_cycling() {
		intervalID = setInterval(next, 3000);
	}

	function prev() {
		if ($work_index <= 0) {
			$work_index = projects.length - 1;
		} else {
			$work_index = ($work_index - 1) % projects.length;
		}
	}

	function next() {
		// debugger;
		$work_index = ($work_index + 1) % projects.length;
	}

	function mouseenter(index) {
		clearInterval(intervalID);
		$work_index = index;
	}
	function mouseleave(_) {
		start_cycling();
	}

	let container_tag = null;
	let projects_height = 0;
	let main_height = 0;
	// let fontSize = 2.8;
	// let lineHeight = 1.12;
	// let step = 0;
	// const padding = 32; // 2rem, via var(--padding); TODO could read out I believe?

	// let newStep, newFontSize;
	// $: {
	// 	if (projects_height <= 0.0 || main_height <= 0.0 || projects_tag == null) {
	// 		// console.log("precondition not yet satisfied")
	// 	} else {
	// 		let ratio = projects_height / (main_height - padding);
	// 		console.log(`(${ratio})`);

	// 		newFontSize = (fontSize/ratio);
	// 		newStep = newFontSize - fontSize;
	// 		fontSize = fontSize + .1*newStep + .1*step;
	// 		step = newStep;
	// 		// lineHeight = Math.max(.5*(lineHeight/ratio) + .5*lineHeight, .9);
	// 		let height_remaining_in_container = main_height - projects_height;

	// 		console.log(`Ph: ${projects_height}, Mh: ${main_height}, H: ${height_remaining_in_container}, updating fontSize: ${fontSize.toFixed(2)}`);
	// 		projects_tag.style.fontSize = `${fontSize}rem`;
	// 		// projects_tag.style.lineHeight = `${lineHeight}`;
	// 	}

	// }
	function keydown(event) {
		// console.log(event);
		switch (event.key) {
			case 'ArrowLeft':
			case 'k':
				clearInterval(intervalID);
				prev();
				break;
			case 'ArrowRight':
			case 'j':
				clearInterval(intervalID);
				next();
				break;
			case 'ArrowDown':
			case 'l':
				let { slug } = projects[$work_index];
				goto(`/work/${slug}`);
				console.log('navigate to project TODO');
				break;
		}
	}

	beforeUpdate(() => {
		let active_a_tag = document.getElementsByClassName("active")[0];
		active_a_tag.scrollIntoView({block: "center"});
	})
</script>

<svelte:window on:keydown|preventDefault={keydown} />

<main  bind:offsetHeight={main_height}>
	{#each projects as { preview }, index}
		{#key index}
			{#if index == $work_index}
				<div class="sizer" transition:fade={{ duration: 300 }}>
					<svelte:component this={preview} />
				</div>
			{/if}
		{/key}
	{/each}
	<nav bind:this={container_tag}>
		<ol
			class="projects primary"
			bind:offsetHeight={projects_height}
			use:textfit={{
				mode: 'multi',
				update: projects_height,
				parent: container_tag
			}}
		>
			{#each projects as { name, slug }, index}
				<li on:mouseenter={() => mouseenter(index)} on:mouseleave={() => mouseleave(index)}>
					<a class:active={index == $work_index} href={`/work/${slug}`}>{name}</a>
					<Circle width="20px" height="20px" />
				</li>
			{/each}
		</ol>
	</nav>
</main>

<style>
	main {
		/* height: 100%; */
		width: 100%;
		/* max-width: 1300px; */
		/* margin: 0 auto; */
		padding: 0 var(--padding);
		padding-bottom: var(--padding);
		/* flex: 1 1 0; */

		display: grid;
		gap: var(--padding);
		align-items: start;
		grid-template-columns: 1fr;
		grid-template-rows: 
			50%
			50%;
		font-size: 2rem;
		/* font-size: clamp(1rem, 4vw, 3.2rem); */
	}
	nav {
		height: 100%;
		overflow-y: scroll;
	}
	.sizer {
		grid-row: 1 / 2;
		grid-column: 1 / 2;
		height: 100%;
		overflow-y: hidden;
	}

	ol.projects {
		line-height: 1.12;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		column-gap: 0.35em;
	}
	li {
		display: flex;
		align-items: center;
		column-gap: 0.35em;
	}
	li a {
		white-space: nowrap;
		transition: color 0.5s ease-out;
	}
	.active {
		color: var(--international-orange);
		transition-duration: 0s;
	}

	@media (min-width: 768px) {
		main {
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: 1fr;
		}
	}
</style>
