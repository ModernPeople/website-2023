<script>
    // import { browser } from '$app/environment';
    import { onMount } from 'svelte';
    let index = 0;

    let pages = [];
    let num_pages = 0;

    onMount(async () => {
        let page_nodes = document.getElementsByClassName("page");
        pages = Array.prototype.slice.call(page_nodes);
        num_pages = pages.length;

        const container = document.getElementById("pages");
        const intersectionOptions = {
            root: container,
            threshold: 1.0,
        }

        function intersectionCallback(entries, observer) {
            for (const entry of entries) {
                if (entry.intersectionRatio >= 0.99) {
                    // console.log(entry, pages)
                    let entry_index = pages.indexOf(entry.target);
                    if (entry_index >= 0) {
                        index = entry_index;
                    } else {
                        console.error("didn't find page we reportedly scrolled to")
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
        index = Math.max(0, index-1);
        let page = document.getElementById(`page-${index+1}`)
        page.scrollIntoView();
    }
    function next() {
        index = Math.min(num_pages-1, index+1);
        let page = document.getElementById(`page-${index+1}`)
        page.scrollIntoView();
    }
    function keydown(event) {
        // console.log(event);
        switch (event.key) {
            case "ArrowLeft":
                prev();
                break;
            case "ArrowRight":
                next();
                break;
        }
    }
</script>

<svelte:window on:keydown={keydown}/>

<main>
    <!-- <h1 id="name">CFRU</h1> -->
    <div id="pages">
        <slot></slot>
    </div>
    <nav>
        <button class="prev svg-button" class:active={index > 0}
            on:click={prev}>
            Prev
        </button>
        <span>{index+1} of {num_pages}</span>
        <button class="next svg-button" class:active={index < num_pages-1}
            on:click={next}>
            Next
        </button>
    </nav>
</main>

<style>
    main {
		padding: 0 var(--padding);

        display: grid;
        grid-template-rows: 
            minmax(0, 1fr) 
            min-content;
        gap: var(--padding);
    }
    #name {
        font-size: 4rem;
        position: absolute;
        left: var(--padding);
        bottom: 110px;
    }
    #pages {
        display: grid;
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
		-webkit-overflow-scrolling: touch;
        scroll-behavior: smooth;

        grid-auto-flow: column;
        grid-auto-columns: 100%;
        grid-template-rows: 100%;
    }
    /* #pages :global(img), #pages :global(picture) {
        max-width: 100%;
        height: auto;
    } */
    #pages > :global(section) {
        max-height: 100%;
        scroll-snap-align: center;

        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows:
            minmax(0, 1fr)
            min-content;
        gap: 1rem;

        overflow-y: scroll;
    }
    nav {
        /* position: fixed; */
        /* bottom: var(--padding); */
        /* left: 0; */
        /* right: 0; */
        /* padding-top: 1rem; */
        /* padding-bottom: .5rem; */
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;

        text-transform: uppercase;
    }
    .prev, .next {
        display: flex;
        align-items: center;
        opacity: 0;
        transition: opacity .25s;
    }
    .active {
        opacity: 1;
    }
    .prev::before, .next::after {
        font-size: 4em;
        height: 3rem;
        position: relative;
        bottom: .8rem;
    }
    .prev::before {
        content: "←";
        margin-right: .5rem;
    }
    .next::after {
        content: "→";
        margin-left: .5rem;
    }
</style>