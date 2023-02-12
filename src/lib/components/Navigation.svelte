<script lang="ts">
    import { page } from '$app/stores';
    $: currentPath = $page.url.pathname;

    import Circle from "$components/Circle.svelte"

    const items = [
        {path: "/work", title: "Work"},
        {path: "/about", title: "About"},
        {path: "/contact", title: "Contact"},
    ]
</script>

<nav>
    <ol>
        {#each items as item}
            <li>
                <a on:click class:active={currentPath.startsWith(item.path)} href={item.path}>{item.title}</a>
                {#if currentPath.startsWith(item.path)}
                    <Circle width=".65em" height=".65em" color="var(--black)"/>
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
		
        color: var(--white);
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
		color: var(--black);
	}
</style>