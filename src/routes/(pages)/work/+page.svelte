<script lang="ts">
	
	import { onMount, onDestroy, type ComponentType } from 'svelte';
	import { crossfade, fade } from 'svelte/transition';
	import { textfit } from 'svelte-textfit';

	// import type { Snapshot } from './$types';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	import { work_index, work_fontsize } from '../../../stores';
	const [send, receive] = crossfade({ duration: 500 });

	import Circle from '$components/Circle.svelte';

	/* Import Preview components here: */
	import HbomaxPreview from './(projects)/hbomax/Preview.svelte';
	import SiriusXMPreview from './(projects)/siriusxm/Preview.svelte';
	import PhantogramPreview from './(projects)/phantogram/Preview.svelte';
	import KblinkaPreview from './(projects)/kblinka/Preview.svelte';

	import PlaceholderPreview from './PlaceholderPreview.svelte';
	/* Import Preview components here: */

	type Project = {
		slug: string,
		name: string,
		preview?: ComponentType
	}
	const projects: Project[] = [
		{ slug: 'siriusxm', name: 'SiriusXM', preview: SiriusXMPreview },
		{ slug: 'hbomax', name: 'HBO MAX' },
		{ slug: 'vice', name: 'Vice' },
		{ slug: 'kblinka', name: 'Kblinka', preview: KblinkaPreview },
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
		{ slug: 'doit', name: 'Do It', preview: SiriusXMPreview  },
		{ slug: 'ted-ed', name: 'TED Ed' }
	].map((project: Project) => {
		if (!project.preview) {
			project.preview = PlaceholderPreview;
		}
		return project;
	});

	/* Cycling animation */
	let intervalID: number | undefined = undefined;
	onMount(start_cycling)
	onDestroy(() => {
		clearInterval(intervalID);
		intervalID = undefined;
	});
	function start_cycling() {
		clearInterval(intervalID);
		intervalID = setInterval(next, 3000);
	}
	function next() {
		$work_index = ($work_index + 1) % projects.length;
	}
	function prev() {
		if ($work_index <= 0) {
			$work_index = projects.length - 1;
		} else {
			$work_index = ($work_index - 1) % projects.length;
		}
	}
	function mouseenter(index: number) {
		clearInterval(intervalID);
		intervalID = undefined;
		$work_index = index;
	}
	function mouseleave(_: any) {
		start_cycling();
	}

	/* Keyboard navigation */
	function keydown(event: KeyboardEvent) {
		switch (event.key) {
			case 'ArrowLeft':
			case 'k':
				clearInterval(intervalID);
				intervalID = undefined;
				prev();
				event.stopPropagation();
				break;
			case 'ArrowRight':
			case 'j':
				clearInterval(intervalID);
				intervalID = undefined;
				next();
				event.stopPropagation();
				break;
			case 'ArrowDown':
			case 'l':
				let { slug } = projects[$work_index];
				goto(`${base}/work/${slug}`);
				event.stopPropagation();
				break;
			case 'ArrowUp':
			case 'h':
				// TODO: open navigation maybe?
				break;
		}
	}

	let container_tag = null;
	let project_container_height = 0;
	let project_container_width = 0;
	let window_width = 0;
</script>


<svelte:window on:keydown={keydown} bind:innerWidth={window_width} />

<main>
	{#each projects as { preview, slug }, index}
		{#if index == $work_index}
			<a href={`${base}/work/${slug}`} class="preview-container">
				<svelte:component this={preview} />
			</a>
		{/if}
	{/each}
	<div
		class="project-container"
		bind:this={container_tag}
		bind:clientHeight={project_container_height}
		bind:clientWidth={project_container_width}
	>
		<div
			class="projects primary"
			use:textfit={{
				mode: 'multi',
				min: 16,
				max: 96,
				update: { project_container_height, project_container_width },
				parent: container_tag,
				onReady: (fontSize) => {
					$work_fontsize = fontSize
					console.log(fontSize)
				}
			}}
		>
			{#each projects as { name, slug }, index}
				<a
					href={`${base}/work/${slug}`}
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
		/* overflow-y: hidden; */
		display: flex;
		flex-direction: column;
		justify-content: start;
	}

	.preview-container :global(picture) {
		max-height: 100%;
	}
	.preview-container :global(img) {
		height: 100%;
	}
	.preview-container :global(picture) :global(img) {
		height: 100%;
	}

	.project-container {
		grid-area: projects;
		/* flex: 1 0 50%; */
		height: 100%;
		display: flex;
		align-items: center;
		/* justify-items: center; */
	}

	.projects {
		height: 100%;
		margin: 0;
		line-height: 1.12;
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		align-content: start;
		column-gap: 0.35em;
	}

	.projects a {
		white-space: nowrap;
		will-change: color;
		/* transition: color 0.6s ease-out; */
	}

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
