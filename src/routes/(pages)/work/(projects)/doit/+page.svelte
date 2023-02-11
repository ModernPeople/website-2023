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
	<div class="info">
		<h1>DO IT</h1>
		<p>Visual ID, motion design, animation and original score for the world's longest running art exhibition</p>
	</div>
	
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
</style>