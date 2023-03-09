<script lang="ts">
    import { page } from '$app/stores';
    import { base } from '$app/paths';
    $: currentPath = $page.url.pathname;

    import Circle from "$components/Circle.svelte"

    const items = [
        {path: `${base}/work`, title: "Work"},
        {path: `${base}/about`, title: "About"},
        {path: `${base}/contact`, title: "Contact"},
    ]
</script>

<nav>
    <ol>
        {#each items as {path, title}}
            <li>
                <a on:click class:active={currentPath.startsWith(path)} href={path}>{title}</a>
                {#if currentPath.startsWith(path)}
                    <Circle width=".65em" height=".65em" color="var(--fg)"/>
                {/if}
            </li>
        {/each}
        <li>
            <a href="https://medium.com/@ModernPeople" target="_blank" rel="noreferrer" title="Modern People on Medium">Press…</a>
        </li>
    </ol>
</nav>

<style>
    nav {
        height: 100%;
        padding: var(--padding);
		padding-top: 3em;
		padding-right: 3em;
		
        color: var(--bg);
		background-color: var(--international-orange);
        
        font-size: clamp(38px, 6vmin, 96px);
	}

    nav ol {
        display: flex;
        flex-direction: column;
		gap: 1rem;
    }

	ol li {
		display: flex;
        align-items: baseline;
        gap: 1rem;
	}

	nav .active {
		color: var(--fg);
	}
</style>