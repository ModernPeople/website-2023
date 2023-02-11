<script>
	import { goto } from '$app/navigation';

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
                if (entry.intersectionRatio >= 1.0) {
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
        let page = document.getElementById(`page-${index+1}`);
        console.log(page);
        page.scrollIntoView();
    }
    function next() {
        index = Math.min(num_pages-1, index+1);
        let page = document.getElementById(`page-${index+1}`);
        console.log(page);
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
            case "ArrowUp":
                goto("/work");
                break;
        }
    }
</script>

<svelte:window on:keydown|preventDefault={keydown}/>

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
    /* #pages :global(img), #pages :global(picture) {
        max-width: 100%;
        height: auto;
    } */

    :global(.page p) {
        margin: 0;
        line-height: 1.3;
    }
    
    nav {
        padding: 0 var(--padding);
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

    /* Reuseable styles */

    /* general 2 column page */
    :global(.page) {
		scroll-snap-align: center;
		/* only supported in Chrome */
		scroll-snap-stop: always;

		width: 100%; /* change to <1 to see a "preview" of the next section */
        overflow-x: hidden;
		
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 
			minmax(0, 1fr) 
			min-content;
		gap: var(--padding);
		justify-items: center;
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
	:global(.hero picture),
	:global(.hero mux-player) {
		height: 100%;
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
	}
	:global(.info h1) {
		font-size: 3rem;
	}

    /* descriptions are like figcaptions, one per page */
    :global(.description) {
		grid-column: 2/3;
		grid-row: -2/-1;
	}
</style>