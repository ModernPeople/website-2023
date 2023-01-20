<script>
    import { browser } from '$app/environment';
    import Circle from "$icons/circle.svg?component";

    let projects = [
        "SXM",
        "Kblinka",
        "Portalheads",
        "Participants",
        "HBOMax",
        "Vice Arabia",
        "Raw PaperRecords",
        "SmashflyFX",
        "NYTTMagazine",
        "Phantogram*",
        "ICI40",
        "CFM",
        "Franco's LeftHand ",
        "Sundowner",
        "DO IT",
    ]

    /* Cycling animation */
    let active_index = 0;
    if (browser) {
		setInterval(() => {
			active_index = (active_index + 1) % projects.length;
		}, 3000);
	}
</script>

<div class="container">
    <div class="showcase">
        <img src="https://placekitten.com/270/200">
    </div>
    <ol class="projects primary">
        {#each projects as project, index}
             <li>
                <a class:active={index == active_index} href={`/work/${project}`}>{project}</a>
                <Circle width=".35em" height=".35em"/>
            </li>
        {/each}
    </ol>
</div>

<style>
    .container {
        display: flex;
        gap: 1rem;
    }
    .container > * {
        flex-basis: 50%;
    }
    ol.projects {
        font-size: 6vmin;
        line-height: 1;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        column-gap: .35em;
    }
    li {
        display: flex;
        transition: color .5s;
        align-items: center;
        column-gap: .35em;
    }
    .active {
        color: var(--international-orange);
    }
</style>