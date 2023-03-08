
<footer>
    <span class="year">2023&thinsp;+&thinsp;beyond</span>
    <ol>
        <li>
            <a title="Visit Modern People on Twitter" href="https://twitter.com"  target="_blank" rel="noreferrer">Tw</a>
        </li>
        <li>
            <a title="Visit Modern People on LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer">LI</a>
        </li>
    </ol>
</footer>

<style>
    footer {
		/* position: fixed; */
		/* bottom: 0; */
		width: 100%;
		z-index: 1;
        
		display: flex;
		gap: var(--padding);
		padding: .5rem var(--padding) .25rem var(--padding);
		
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
</style>