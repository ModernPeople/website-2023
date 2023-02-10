<script>
	import { browser } from '$app/environment';
	import { flip } from 'svelte/animate';
	import { crossfade, fade } from 'svelte/transition';
	const [send, receive] = crossfade({ duration: 500 });

	import Circle from '$icons/circle.svg?component';

	import HbomaxPreview from './(projects)/hbomax/Preview.svelte';
	import CFRUPreview from './(projects)/cfru/Preview.svelte';
	import SiriusXMPreview from './(projects)/siriusxm/Preview.svelte';

	let projects = [
		{ slug: 'siriusxm', name: 'SiriusXM', preview: SiriusXMPreview },
		{ slug: 'hbomax', name: 'HBO MAX', preview: HbomaxPreview },
		{ slug: '', name: 'Vice', preview: null },
		{ slug: 'kblinka', name: 'Kblinka', preview: null },
		{ slug: '', name: 'New York Times', preview: null },
		{ slug: '', name: 'Smashfly X', preview: null },
		{ slug: '', name: 'TED', preview: null },
		{ slug: 'ici', name: 'ICI', preview: null },
		{ slug: 'participants', name: 'Participants', preview: null },
		{ slug: 'phantogram', preview: null },
		{ slug: '', name: 'Tinashe', preview: null },
		{ slug: '', name: 'Grace Mitchell', preview: null },
		{ slug: '', name: 'Bright & Guilty', preview: null },
		{ slug: '', name: 'Raw Paper Records', preview: null },
		{ slug: '', name: 'TCMB', preview: null },
		{ slug: 'portalheads', name: 'Portalheads', preview: null },
		{ slug: '', name: 'Animist', preview: null },
		{ slug: '', name: 'Sierra Club', preview: null },
		{ slug: 'doit', name: 'Do It', preview: null },
		{ slug: '', name: 'TED Ed', preview: null }
	];

	/* Cycling animation */
	let active_index = 0;
	let intervalID = undefined;

	if (browser) {
		start_cycling();
	}

	function start_cycling() {
		intervalID = setInterval(() => {
			active_index = (active_index + 1) % projects.length;
		}, 3000);
	}

	function mouseenter(index) {
		clearInterval(intervalID);
		active_index = index;
	}
	function mouseleave(index) {
		start_cycling();
	}
</script>

<main>
	{#each projects as { preview }, index}
		{#key index}
			{#if index == active_index}
				<div class="sizer" transition:fade>
					<svelte:component this={preview} />
				</div>
			{/if}
		{/key}
	{/each}
	<ol class="projects primary">
		{#each projects as { name, slug }, index}
			<li on:mouseenter={() => mouseenter(index)} on:mouseleave={() => mouseleave(index)}>
				<a class:active={index == active_index} href={`/work/${slug}`}>{name}</a>
				<Circle width="20px" height="20px" />
			</li>
		{/each}
	</ol>
</main>

<style>
	main {
		/* height: 100%; */
		width: 100%;
		max-width: 1300px;
		/* margin: 0 auto; */
		/* overflow-y: scroll; */
		padding: 0 var(--padding);
		/* flex: 1 1 0; */

		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(max(300px, 20vw), 1fr));
		grid-template-rows: 1fr;
		gap: var(--padding);
		align-items: start;
	}
	.sizer {
		grid-row: 1 / 2;
		grid-column: 1 / 2;
		/* height: 500px; */
		/* justify-self: end; */
		/* width: auto; */
		/* height: 0 */
		/* display: flex; */
		height: 100%;
		overflow-y: hidden;
	}

	ol.projects {
		font-size: clamp(1rem, 4vw, 3.2rem);
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
		transition: color 0.5s;
	}
	.active {
		color: var(--international-orange);
	}
</style>
