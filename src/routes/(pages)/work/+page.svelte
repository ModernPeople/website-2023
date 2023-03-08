<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { flip } from 'svelte/animate';
	import { crossfade, fade, blur } from 'svelte/transition';
	import { textfit } from 'svelte-textfit';
	import { work_index } from '../../../stores';
	const [send, receive] = crossfade({ duration: 500 });

	import Circle from '$components/Circle.svelte';

	import HbomaxPreview from './(projects)/hbomax/Preview.svelte';
	import CFRUPreview from './(projects)/cfru/Preview.svelte';
	import SiriusXMPreview from './(projects)/siriusxm/Preview.svelte';
	import PhantogramPreview from './(projects)/phantogram/Preview.svelte';
	import { onMount, afterUpdate, beforeUpdate, onDestroy, type ComponentType } from 'svelte';
	import { updated } from '$app/stores';
	import PlaceholderPreview from './PlaceholderPreview.svelte';

	type Project = {
		slug: string,
		name: string,
		preview?: ComponentType
	}
	let projects: Project[] = [
		{ slug: 'siriusxm', name: 'SiriusXM', preview: SiriusXMPreview },
		{ slug: 'hbomax', name: 'HBO MAX', preview: HbomaxPreview },
		{ slug: 'vice', name: 'Vice' },
		{ slug: 'kblinka', name: 'Kblinka' },
		{ slug: 'nytimes', name: 'New York Times' },
		{ slug: 'smashfly-x', name: 'Smashfly X' },
		{ slug: 'ted', name: 'TED' },
		{ slug: 'ici', name: 'ICI' },
		{ slug: 'participants', name: 'Participants' },
		{ slug: 'phantogram', name: 'Phantogram', preview: PhantogramPreview },
		{ slug: 'tinashe', name: 'Tinashe' },
		{ slug: 'grace-mitchell', name: 'Grace Mitchell' },
		{ slug: 'bright-and-guilty', name: 'Bright & Guilty' },
		{ slug: 'raw-paper-records', name: 'Raw Paper Records' },
		{ slug: 'tcmb', name: 'TCMB' },
		{ slug: 'portalheads', name: 'Portalheads' },
		{ slug: 'animist', name: 'Animist' },
		{ slug: 'sierra-club', name: 'Sierra Club' },
		{ slug: 'doit', name: 'Do It' },
		{ slug: 'ted-ed', name: 'TED Ed' }
	].map((project: Project) => {
		if (!project.preview) {
			project.preview = PlaceholderPreview;
		}
		return project;
	});

	/* Cycling animation */
	let intervalID: any | undefined = undefined;

	// onMount(start_cycling)
	onDestroy(() => {
		clearInterval(intervalID);
		intervalID = undefined;
	});

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

	function mouseenter(index: number) {
		clearInterval(intervalID);
		intervalID = null;
		$work_index = index;
	}
	function mouseleave(_: any) {
		start_cycling();
	}

	let container_tag = null;
	let project_container_height = 0;
	let project_container_width = 0;

	function keydown({ key }: KeyboardEvent) {
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
			case 'ArrowUp':
			case 'h':
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
		{#if index == $work_index}
			<div class="preview-container">
				<div class="sizer" transition:fade|local={{ duration: 500 }}>
					<svelte:component this={preview} />
				</div>
			</div>
		{/if}
	{/each}
	<div
		class="project-container"
		bind:this={container_tag}
		bind:offsetHeight={project_container_height}
		bind:offsetWidth={project_container_width}
	>
		<div
			class="projects primary"
			use:textfit={{
				mode: 'multi',
				min: 12,
				max: 56,
				update: { project_container_height, project_container_width },
				parent: container_tag
				// onReady: () => {
				// 	console.log(`Textfit Ready: projects_height:, container: ${project_container_height}`);
				// }
			}}
		>
			{#each projects as { name, slug }, index}
				<a
					href={`/work/${slug}`}
					class:active={index == $work_index}
					on:mouseenter={() => mouseenter(index)}
					on:mouseleave={() => mouseleave(index)}>{name}</a
				>
				{#if index < projects.length - 1}
					<Circle width=".5em" height=".5em" />
				{/if}
				&hairsp;
			{/each}
		</div>
	</div>
</main>

<style>
	main {
		height: 100%;
		/* max-height: 100%; */
		/* width: 100%; */
		max-width: 2000px;
		/* margin-right: auto; */
		margin: 0 auto;
		padding: 0 var(--padding);
		padding-bottom: var(--padding);
		/* flex: 1 1 0; */
		/* overflow: hidden; */

		display: grid;
		gap: var(--padding);
		align-items: start;
		grid-template-areas: 
			"preview"
			"projects";
		grid-auto-flow: row;
		grid-auto-rows: 1fr;
		grid-auto-columns: 1fr;
		
		font-size: 2rem;
	}
	main > * {
		overflow: auto;
	}
	.preview-container {
		grid-area: preview;
		height: 100%;
		overflow-y: hidden;
		/* position: relative; */
	}
	.project-container {
		grid-area: projects;
		/* flex: 1 0 50%; */
		height: 100%;
		display: flex;
		align-items: center;
		/* justify-items: center; */
	}
	.sizer {
		/* position: absolute; */
		/* flex: 1 0 50%; */
		grid-row: 1 / 2;
		grid-column: 1 / 2;
		height: 100%;
		overflow-y: hidden;
	}

	.projects {
		height: 100%;
		margin: 0;
		line-height: 1.12;
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		align-content: space-between;
		column-gap: 0.35em;
	}

	.projects a {
		white-space: nowrap;
		will-change: color;
		/* transition: color 0.6s ease-out; */
	}

	/* li {
		display: flex;
		align-items: center;
		column-gap: 0.35em;
	}
	li a {
		
	}
	li a :global(svg) {
		flex-shrink: 0;
	} */
	.active {
		color: var(--international-orange);
		/* transition-duration: 0s; */
	}

	@media (min-width: 768px) {
		main {
			grid-auto-flow: column;
			grid-template-areas: "preview projects";
		}
	}
</style>
