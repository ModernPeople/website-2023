<script>
	import Img from '@zerodevx/svelte-img';

	// import toolkit from './SXM_Toolkit_Gang.jpg?run';
	// import event from './SXM_Event.jpg?run';

	// import booth1 from './SXM_Media_Booth1.jpg?run';
	// import booth2 from './SXM_Media_Booth2.jpg?run';
	// import booth3 from './SXM_Media_Booth3.jpg?run';
	// import booth4 from './SXM_Media_Booth4.jpg?run';
</script>


<section class="page" id="page-1">
	<div class="info">
		<h1>Participants</h1>
		<p>An open source design project for creative builders</p>
	</div>
	<div class="hero">
		<!-- <mux-player
			stream-type="on-demand"
			playback-id="nHOLot4wCZ4v1tGBxSF5zgD79RslO61hLZt02u4JaSng"
			primary-color="#FFFFFF"
			secondary-color="#000000">
		</mux-player> -->
	</div>
	<p class="description">
		PARTICIPANTS is an experiment in creative community building through free flow of intellectual property, open source ideals and communal ownership of digital assets.
	</p>
</section>

<section class="page" id="page-2">
	<div class="hero">
		<!-- <Img src={toolkit}/> -->
	</div>
	<p class="description">
		Launched as a set of collectible digital assets under the cc0 license, the collection was given away free to the audience along with a publicly available visual toolkit that lets anyone build and generate any new creative output without limits.
	</p>
</section>

<section class="page" id="page-3">
	<div class="hero">
		<!-- <Img src={event}/> -->
	</div>
	<p class="description">
		Participants remains one of the most forward thinking projects in web3 exploring brand and community building through alternative and unconventional licensing schemes. Public Domain becomes the foundation for a brand to grow, and creates limitless potential for it to exist and grow in the world.
	</p>
</section>


<style>
	section {
		scroll-snap-align: start;
		/* only supported in Chrome */
		scroll-snap-stop: always;

		width: 100%; /* change to <1 to see a "preview" of the next section */
		
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 
			1fr 
			min-content;
		gap: 1rem;
		justify-items: center;
	}

	.hero {
		grid-column: 1 / -1;
	}

	.hero :global(picture),
	.hero :global(mux-player),
	.hero :global(mux-player) {
		height: 100%;
	}

	.hero :global(img) {
		background-size: contain !important;
	}

	.images {
		justify-self: center;
		grid-column: 1 / -1;

		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	/* .images :global(img) {} */

	.description {
		line-height: 1.5;
		grid-column: 2/3;
		grid-row: -2/-1;
	}
</style>