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
		<h1>Independent Curators International 40</h1>
		<p>Visual ID and show open for ICI's 40th anniversary</p>
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
		Independent Curators International (ICI) is the single most important arts organization focused on supporting curators to create stronger art communities through experimentation, collaboration, and international engagement. They have been around forever, and the 40th anniversary was a monumental milestone for the organization. 
	</p>
</section>

<section class="page" id="page-2">
	<div class="hero">
		<!-- <Img src={toolkit}/> -->
	</div>
	<p class="description">
		Under Modern People partner Can Misirlioglu’s direction, a playfully subversive design language was created to augment the events around the anniversary.
	</p>
</section>

<section class="page" id="page-3">
	<div class="hero">
		<!-- <Img src={event}/> -->
	</div>
	<p class="description">
		The design work then informed the production and animation work for a marquee show open piece for the big event. 
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

	/* .images {
		justify-self: center;
		grid-column: 1 / -1;

		display: grid;
		grid-template-columns: 1fr 1fr;
	} */

	/* .images :global(img) {} */

	.description {
		line-height: 1.5;
		grid-column: 2/3;
		grid-row: -2/-1;
	}
</style>