<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	import { onMount } from 'svelte';
	import { options } from '../../../../stores';
	let index = 0;

	let pages: HTMLElement[] = [];
	let num_pages: number | undefined = undefined;

	onMount(async () => {
		let page_nodes = document.getElementsByClassName('page');
		pages = Array.prototype.slice.call(page_nodes);
		num_pages = pages.length;

		const container = document.getElementById('pages');
		const intersectionOptions = {
			root: container,
			threshold: 0.99
		} satisfies IntersectionObserverInit;

		function intersectionCallback(entries: IntersectionObserverEntry[], _: IntersectionObserver) {
			for (const entry of entries) {
				// debugger;
				if (entry.intersectionRatio >= intersectionOptions.threshold) {
					let entry_index = pages.indexOf(entry.target as HTMLElement);
					if (entry_index >= 0) {
						index = entry_index;
					} else {
						console.error("didn't find page we reportedly scrolled to");
					}
				}
			}
		}

		const observer = new IntersectionObserver(intersectionCallback, intersectionOptions);
		const targets = document.getElementsByClassName('page');
		for (const target of targets) {
			observer.observe(target);
		}
	});

	function prev() {
		index = Math.max(0, index - 1);
		let page = document.getElementById(`page-${index + 1}`);
		page && page.scrollIntoView();
	}
	function next() {
		if (num_pages === undefined) {
			return;
		}
		index = Math.min(num_pages - 1, index + 1);
		let page = document.getElementById(`page-${index + 1}`);
		page && page.scrollIntoView();
	}
	function back() {
		goto(`${base}/work`);
	}
	function keydown(event: KeyboardEvent) {
		switch (event.key) {
			case 'ArrowLeft':
				prev();
				break;
			case 'ArrowRight':
				next();
				break;
			case 'ArrowUp':
				back();
				break;
			default:
				return;
		}
		event.preventDefault();
	}
	function enclosed_number(number: number) {
		switch (number) {
			case 0:
				return '⓪';
			case 1:
				return '①';
			case 2:
				return '②';
			case 3:
				return '③';
			case 4:
				return '④';
			case 5:
				return '⑤';
			case 6:
				return '⑥';
			case 7:
				return '⑦';
			case 8:
				return '⑧';
			case 9:
				return '⑨';
			default:
				return '' + number;
		}
	}
</script>

<svelte:window on:keydown={keydown} />

<main>
	<div id="pages">
		<slot />
	</div>
	<nav>
		<button
			class="svg-button"
			class:prev={index > 0}
			class:back={index == 0}
			class:active={index >= 0}
			on:click={() => (index == 0 ? back() : prev())}
		>
			{#if index == 0}
				Back
			{:else}
				Prev
			{/if}
		</button>
		<span class="page-counter" class:active={num_pages}>
			{#if $options.enclose_page_numbers}
				{enclosed_number(index + 1)} of {enclosed_number(num_pages)}
			{:else}
				{index + 1} of {num_pages}
			{/if}
		</span>
		<button
			class="next svg-button"
			class:active={num_pages && index < num_pages - 1}
			on:click={next}>Next</button
		>
	</nav>
</main>

<style>
	/* Page Counter */

	nav {
		padding: 0 var(--padding) calc(var(--padding) / 2) var(--padding);
		flex-flow: row nowrap;
		align-items: center;
		justify-content: space-between;

		text-transform: uppercase;
	}
	.prev,
	.next,
	.back,
	.page-counter {
		color: inherit;
		display: flex;
		align-items: center;
		opacity: 0;
		transition: opacity 0.25s;
	}
	.active {
		opacity: 1;
	}
	.back::before,
	.prev::before,
	.next::after {
		font-size: 4em;
		height: 3rem;
		position: relative;
		bottom: 0.8rem;
	}
	.back::before {
		content: '↖';
		margin-right: 0.5rem;
		margin-left: -0.25rem;
	}
	.prev::before {
		content: '←';
		margin-right: 0.5rem;
	}
	.next::after {
		content: '→';
		margin-left: 0.5rem;
	}

	/* Pages */

	@media (max-width: 639px) {
		nav {
			display: none;
		}
		main {
			height: 100%;
		}
		#pages {
			height: 100%;
			overflow-y: scroll;
			/* display: grid; */
			/* flex-flow: column; */
		}
		#pages > :global(.page) {
			/* height: 80vh; */
			padding: calc(2 * var(--padding)) var(--padding);
			border-top: 1px solid var(--light-bg);
		}
		:global(.images) {
			max-width: 80vw;
		}
	}
	@media (min-width: 640px) {
		nav {
			display: flex;
		}
		main {
			display: grid;
			grid-template-rows:
				minmax(0, 1fr)
				min-content;
			gap: 0;
		}
		#pages {
			padding: 0 var(--padding);
			padding-bottom: 1rem;
			display: grid;
			overflow-x: scroll;
			scroll-snap-type: x mandatory;
			-webkit-overflow-scrolling: touch;
			scroll-behavior: smooth;

			grid-auto-flow: column;
			grid-auto-columns: 100%;
			grid-template-rows: 100%;
			column-gap: var(--padding);
			/* hide scrollbar: Firefox */
			scrollbar-width: none;
		}
		/* hide scrollbar: Safari, Chrome */
		#pages::-webkit-scrollbar {
			display: none;
		}
	}

	:global(.page p) {
		margin: 0;
		line-height: 1.5;
	}

	/* Reuseable styles */

	:global(.page) {
		display: grid;
		gap: var(--padding);
		justify-items: center;
	}

	:global(.info h1) {
		font-size: 3rem;
	}

	@media (min-width: 640px) {
		/* general 2 column page */
		:global(.page) {
			scroll-snap-align: center;
			/* only supported in Chrome */
			scroll-snap-stop: always;
			overflow-x: hidden;

			width: 100%; /* change to <1 to see a "preview" of the next section */
			grid-template-columns: 1fr 1fr;
			grid-template-rows:
				minmax(0, 1fr)
				min-content;
		}

		/* info contains project title and subtitle */
		:global(.info) {
			height: 100%;
			width: 100%;

			grid-column: 1/2;
			grid-row: -2/-1;

			display: flex;
			flex-flow: column;
			justify-content: space-between;
			gap: 0.75rem;
		}
		:global(.info p) {
			font-size: 0.875rem;
			text-transform: uppercase;
			letter-spacing: 0.5px;
			opacity: 0.875;
		}
		/* descriptions are like figcaptions, one per page */
		:global(.description) {
			grid-column: 2/3;
			grid-row: -2/-1;

			align-self: end;
		}
	}

	/* hero elements span full width */
	:global(.hero) {
		width: 100%;
		height: 100%;
		grid-column: 1 / -1;
	}
	:global(.hero picture) {
		/* height: 100%; */
	}
	:global(.hero img) {
		height: 100%;
		background-size: contain !important;
		/* object-fit: contain; */
		/* object-position: center; */
	}

	/* :global(.hero mux-player), */
	:global(.hero picture) {
		height: 100%;
	}
</style>
