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
	<div class="hero">
		<!-- <mux-player
			stream-type="on-demand"
			playback-id="nHOLot4wCZ4v1tGBxSF5zgD79RslO61hLZt02u4JaSng"
			primary-color="#FFFFFF"
			secondary-color="#000000">
		</mux-player> -->
	</div>
	<p class="description">
		It was important for the iconic band Phantogram to set a visual standard at the beginning of their new release. The idea was to introduce high-end typography into a ‘user-generated’ format like the lyric video, and create a creative beacon for the audience to follow.
	</p>
</section>

<section class="page" id="page-2">
	<div class="hero">
		<!-- <Img src={toolkit}/> -->
	</div>
	<p class="description">
		Under Modern People partner Can Misirlioglu’s direction, a visual identity and art direction was created specifically for this chapter of the band’s journey to fame.
	</p>
</section>

<section class="page" id="page-3">
	<div class="hero">
		<!-- <Img src={event}/> -->
	</div>
	<p class="description">
		Imagining the powerfully personal lyrics of the song in different applications, a rich, highly textured visual world was established. 
	</p>
</section>

<section class="page" id="page-4">
	<div class="hero">
		<!-- <Img src={event}/> -->
	</div>
	<p class="description">
		Combining all the elements together, a design-forward, animated music video was produced, and it became the first visual expression of the band for their new release which informed the subsequent releases. Millions of views later, it remains a highlight moment in the band’s prolific output.
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
	.hero :global(mux-video) {
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