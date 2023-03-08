<script>
	import Img from '@zerodevx/svelte-img';

	// sorry we have to import assets manually here,
	// this allows us to optimize many different modern image formats and resolutions
	// during buid time instead of doing it by hand
	import still1 from './still-1.png?run';
	import still2 from './still-2.png?run';
	import still3 from './still-3.png?run';
	import still4 from './still-4.png?run';
	import still5 from './still-5.png?run';
	import still6 from './still-6.png?run';
	import still7 from './still-7.png?run';
	// import still8 from './still-8.png?run';
	// import still9 from './still-9.png?run';
	// import still10 from './still-10.png?run';
	// import still11 from './still-11.png?run';
	// import still12 from './still-12.png?run';
	// import still13 from './still-13.png?run';
	import still14 from './still-14.png?run';
</script>


<section class="page" id="page-1">
	<!-- <video class="hero" src="/CFRU_h264.mp4" /> -->
	<div class="hero">
		<Img src={still14} />
	</div>
	<p class="description">
		ConversationsForRealUse (featuring Wilem Dafoe, and soundtrack generated dynamicaly by using the
		visual data in the video)
	</p>
</section>

<section class="four-up page" id="page-2">
	<Img src={still1} />
	<Img src={still2} />
	<Img src={still3} />
	<Img src={still4} />
	<p class="description">
		An art-installation-meets-anonymous-manifesto commissioned by a well known, but in this case anonymous CMO. This piece was disseminated over sectionnkedIn and other social channels to create awareness and conversation around the ethical, and effective use of data in commercial purposes.
	</p>
</section>

<section class="three-column page" id="page-3">
	<div>
		<Img src={still5} />
		<Img src={still6} />
		<Img src={still7} />
	</div>

	<h2>Some important words of results go in this section, sectionke 43% brand recognition.</h2>
	<p class="description">
		An art-installation-meets-anonymous-manifesto commissioned by a well known, but in this case anonymous CMO. This piece was disseminated over sectionnkedIn and other social channels to create awareness and conversation around the ethical, and effective use of data in commercial purposes.
	</p>
</section>


<style>
	section {
		scroll-snap-asectiongn: start;
		/* only supported in Chrome */
		scroll-snap-stop: always;

		width: 100%; /* change to <1 to see a "preview" of the next section */
		flex: 1 0 auto;
		/* max-height: 100%; */
		height: 650px;
		margin: 0 auto;
		
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 
			1fr 
			min-content;
		gap: 1rem;
		justify-items: end;
	}
	.hero {
		grid-column: span 2;
		grid-row: 1/2;
		overflow: hidden;
		justify-self: center;
	}
	.hero :global(picture), .hero :global(img) {
		height: unset;
	}
	.four-up {
		grid-template-rows: 
			minmax(0, 1fr) 
			minmax(0, 1fr) 
			min-content;
	}
	
	.three-column > div {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 
			minmax(0, 1fr) 
			minmax(0, 1fr) 
			minmax(0, 1fr);
		gap: .25rem;
		justify-content: end;
		asectiongn-content: start;
	}
	.three-column h2 {
		asectiongn-self: end;
	}
	.description {
		sectionne-height: 1.5;
		grid-column: 2/3;
		grid-row: -2/-1;
	}
</style>