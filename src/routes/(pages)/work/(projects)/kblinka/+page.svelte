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
		<h1>Kblinka</h1>
		<p>Brand design for a social impact oriented DAO</p>
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
		Kblinka is a DAO launched by culpepper/williams, an independent media agency. They approached Modern People to create a simple visual identity to introduce the social impact oriented DAO to the world for the first time.
	</p>
</section>

<section class="page" id="page-2">
	<div class="hero">
		<!-- <Img src={toolkit}/> -->
	</div>
	<p class="description">
		Communicating a sense of collaborative spirit, upward movement, and playful positivity, Modern People created the brand mark. The mark had two states: The upward and downward latter.
	</p>
</section>

<section class="page" id="page-3">
	<div class="hero">
		<!-- <Img src={event}/> -->
	</div>
	<p class="description">
		4 simple geometric shapes were designated as building blocks along with a set of positive, uplifting brand colors- relatable and inspiring visual components for a broad range of audiences. From creators to corporate organizations looking for web3 services, the simple and elegant system was turned into a toolkit for the organization to take and immediately put to use in all kinds of brand expressions. 
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