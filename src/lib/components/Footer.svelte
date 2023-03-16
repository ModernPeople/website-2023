<script>
	// export let is_detail_view = false;
	import { options } from "../../stores";
</script>

<footer>
	<div>
		<span class="year">
			{#if $options.copyright_glyph_in_footer}
				<span class="copyright">©</span>
			{/if}
			2023&thinsp;+&thinsp;beyond
		</span>
	</div>
	<ol>
		<li>
			<a
				title="Visit Modern People on Twitter"
				href="https://twitter.com"
				target="_blank"
				rel="noreferrer">Tw</a
			>
		</li>
		<li>
			<a
				title="Visit Modern People on LinkedIn"
				href="https://linkedin.com"
				target="_blank"
				rel="noreferrer">LI</a
			>
		</li>
	</ol>
	<!-- <ul class="keyboard nolist" title="use arrow keys (or VIM-style hjkl) to navigate the project list">
		<li>↔ prev/next</li>
		{#if is_detail_view}
			<li>⏶ back</li>
		{:else}
			 <li>⏷ detail</li>
		{/if}
	</ul> -->
</footer>

<style>
	footer {
		/* position: fixed; */
		/* bottom: 0; */
		width: 100%;
		z-index: 200;

		display: flex;
		gap: var(--padding);
		padding: 0.5rem var(--padding) 0.25rem var(--padding);

		font-size: 1rem;
		text-transform: uppercase;

		color: var(--fg);
		background-color: var(--international-orange);
	}

	footer > * {
		flex-basis: 50%;
	}

	footer > ol {
		display: flex;
		flex-direction: row;
		gap: var(--padding);
	}

	.copyright {
		position: relative;
		bottom: 1.5px; /* wtf */
	}

	/* .keyboard {
		display: inline-flex;
		gap: 1rem;
		text-transform: lowercase;
		opacity: .5;
		cursor: help;
		white-space: nowrap;
	}
	.keyboard:hover {
		opacity: 1;
	} */
</style>
