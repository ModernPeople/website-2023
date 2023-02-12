<script>
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { flip } from 'svelte/animate';
	import { crossfade, fade } from 'svelte/transition';
	import { textfit } from 'svelte-textfit';
	import { work_index } from '../../../stores';
	const [send, receive] = crossfade({ duration: 500 });

	import Circle from "$components/Circle.svelte";

	import HbomaxPreview from './(projects)/hbomax/Preview.svelte';
	import CFRUPreview from './(projects)/cfru/Preview.svelte';
	import SiriusXMPreview from './(projects)/siriusxm/Preview.svelte';
	import PhantogramPreview from './(projects)/phantogram/Preview.svelte';
	import { onMount, afterUpdate, beforeUpdate, onDestroy } from 'svelte';
	import { updated } from '$app/stores';

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
	onDestroy(() => {
		clearInterval(intervalID);
		intervalID = null;
	})

	function start_cycling() {
		clearInterval(intervalID);
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
		intervalID = null;
		$work_index = index;
	}
	function mouseleave(_) {
		start_cycling();
	}

	let container_tag = null;
	let projects_height = 0;

	function keydown({key}) {
		// console.log(event);
		switch (key) {
			case 'ArrowLeft':
			case 'k':
				clearInterval(intervalID);
				intervalID = null;
				prev();
				break;
			case 'ArrowRight':
			case 'j':
				clearInterval(intervalID);
				intervalID = null;
				next();
				break;
			case 'ArrowDown':
			case 'l':
				let { slug } = projects[$work_index];
				goto(`/work/${slug}`);
				break;
		}
	}

	// beforeUpdate(() => {
	// 	let active_a_tag = document.getElementsByClassName("active")[0];
	// 	active_a_tag.scrollIntoView({block: "center"});
	// })
</script>

<svelte:window on:keydown|preventDefault={keydown} />

<main>
	{#each projects as { preview }, index}
		{#key index}
			{#if index == $work_index}
				<div class="sizer" transition:fade={{ duration: 300 }}>
					<svelte:component this={preview} />
				</div>
			{/if}
		{/key}
	{/each}
	<div class="project-container" bind:this={container_tag}>
		<ol
			class="projects primary"
			bind:offsetHeight={projects_height}	
			use:textfit={{
				mode: 'multi',
				update: projects_height,
				parent: container_tag,
				onReady: () => {
					console.log(`Textfit Ready: projects_height: ${projects_height}, container: ${container_tag.offsetHeight}`)
				}
			}}
		>
			{#each projects as { name, slug }, index}
				<li on:mouseenter={() => mouseenter(index)} on:mouseleave={() => mouseleave(index)}>
					<a class:active={index == $work_index} href={`/work/${slug}`}>{name}</a>
					{#if index < projects.length - 1}
						<Circle width=".5em" height=".5em" />
					{/if}
				</li>
			{/each}
		</ol>
	</div>
</main>

<style>
	main {
		/* height: 100%; */
		width: 100%;
		/* max-width: 1300px; */
		/* margin: 0 auto; */
		padding: 0 var(--padding);
		margin-bottom: var(--padding);
		/* flex: 1 1 0; */
		/* overflow: hidden; */

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
	.project-container {
		height: 100%;
		display: flex;
		align-items: center;
		justify-items: center;
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
