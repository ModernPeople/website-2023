<script>
	import Img from '@zerodevx/svelte-img';

	import mag from './DO-IT-T-Mag-Debut.png?run';
	// import event from './SXM_Event.jpg?run';

	// import booth1 from './SXM_Media_Booth1.jpg?run';
	// import booth2 from './SXM_Media_Booth2.jpg?run';
	// import booth3 from './SXM_Media_Booth3.jpg?run';
	// import booth4 from './SXM_Media_Booth4.jpg?run';
</script>


<section class="page" id="page-1">
	
	<p class="description">
		Conceived by curator Hans Ulrich Obrist, "DO IT" is an exhibition of artists’ instructions that began in Paris in 1993 with a discussion between Obrist and artists Christian Boltanski and Bertrand Lavier, who were curious to see how an exhibition may never stop.
	</p>
</section>

<section class="page" id="page-2">
	<div class="hero">
		<!-- <Img src={toolkit}/> -->
	</div>
	<p class="description">
		Now, DO IT has become the longest-running and most far-reaching exhibition ever, giving new meaning to the concept of the “exhibition in progress.”
	</p>
</section>

<section class="page" id="page-3">
	<!-- <div class="images">
		<Img src={booth1}/>
		<Img src={booth2}/>
		<Img src={booth3}/>
		<Img src={booth4}/>
	</div> -->
	<div class="hero">
		<!-- <Img src={event}/> -->
	</div>
	<p class="description">
		For DO IT’s 25th anniversary, and in the exhibition’s true spirit, a wide array of collaborations were imagined and created between artists, designers, illustrators, animators, and composers.
	</p>
</section>

<section class="page" id="page-4">
	<div class="hero">
		<mux-player
			stream-type="on-demand"
			playback-id="xhbmgrLbEVPAp02bmUBoJuUUwQc2Mk32QWEZEkNCt02i4"
			>
		</mux-player>
	</div>
	<p class="description">
		In addition to the visual style and the animated compendium video short film narrated by Reggie Watts, a set of new artworks were created and documented as a companion to the monumental DO IT book that launched at the same time.
	</p>
</section>

<section class="page" id="page-5">
	<div class="hero">
		<Img src={mag}/>
	</div>
	<p class="description">
		The project and anniversary was kicked off by an <a href="https://archive.nytimes.com/tmagazine.blogs.nytimes.com/2014/04/29/do-it-exhibition-garage-museum-contemporary-art-moscow-hans-ulrich-obrist/">exclusive feature on New York Times T Magazine</a>’s website.
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