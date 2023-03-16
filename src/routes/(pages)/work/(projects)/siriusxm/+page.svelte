<script>
	import Img from '@zerodevx/svelte-img';

	import img1 from './images/SXM-Media_1.png?run';
	import img2 from './images/SXM-Media_2.png?run';
	import img3 from './images/SXM-Media_3.png?run';
	import img4 from './images/SXM-Media_4.png?run';
	import img5a from './images/SXM-Media_5A.jpg?run';
	import img8b from './images/SXM-Media_8B.jpg?run';
	import img8c from './images/SXM-Media_8C.jpg?run';
	import img8d from './images/SXM-Media_8D.jpg?run';
	import img9a from './images/SXM-Media_9A.png?run';
	import img9b from './images/SXM-Media_9B.png?run';
	import img9c from './images/SXM-Media_9C.png?run';

	import gif6a from './gifs/SXM-Media_6A.gif?run&width=480&format=avif;webp;gif';
	import gif6b from './gifs/SXM-Media_6B.gif?run&width=480&format=avif;webp;gif';
	import gif6c from './gifs/SXM-Media_6C.gif?run&width=480&format=avif;webp;gif';
	import gif6d from './gifs/SXM-Media_6D.gif?run&width=480&format=avif;webp;gif';
	import gif7a from './gifs/SXM-Media_7A.gif?run&width=480&format=avif;webp;gif';
	import gif7b from './gifs/SXM-Media_7B.gif?run&width=480&format=avif;webp;gif';
	import gif7c from './gifs/SXM-Media_7C.gif?run&width=480&format=avif;webp;gif';
</script>

<section class="page" id="page-1">
	<div class="info">
		<h1>SXM Media</h1>
		<p>Brand, experience and motion design for Advertising Week activation</p>
	</div>
	<div class="hero">
		<Img src={img1} />
	</div>
	<p class="description">
		SXM Podcast Network represents the single most powerful collection of podcasts under one
		umbrella that provides robust, proven, creative, and measurable advertising. Under the
		“Podcasts. Made Better.” tagline, Modern People was tasked to create a visual center and
		campaign ID that could drive a broad set of applications.
	</p>
</section>

<section class="page" id="page-2">
	<div class="hero">
		<Img src={img2} />
	</div>
	<p class="description">
		SXM Podcast Network represents the single most powerful collection of podcasts under one
		umbrella that provides robust, proven, creative, and measurable advertising. Under the
		“Podcasts. Made Better.” tagline, Modern People was tasked to create a visual center and
		campaign ID that could drive a broad set of applications.
	</p>
</section>

<section class="page" id="page-3">
	<div class="hero">
		<Img src={img3} />
	</div>
	<p class="description">
		SXM Podcast Network represents the single most powerful collection of podcasts under one
		umbrella that provides robust, proven, creative, and measurable advertising. Under the
		“Podcasts. Made Better.” tagline, Modern People was tasked to create a visual center and
		campaign ID that could drive a broad set of applications.
	</p>
</section>

<section class="page" id="page-4">
	<div class="hero">
		<Img src={img4} />
	</div>
	<p class="description">
		It was imperative that SXM’s brand equity was leveraged while still signaling an evolution from
		the core brand. Using SXM Media’s master brand as anchor, Modern People built a bold and
		functional visual identity and toolkit for “Podcasts. Made Better.”
	</p>
</section>

<section class="page" id="page-5">
	<div class="quadrants">
		<Img src={img5a} />
		<Img src={img8b} />
		<Img src={img8c} />
		<Img src={img8d} />
	</div>
	<p class="description">
		A physical activation at Adweek was the first experiential application of the new brand. The
		space had to accommodate a functional podcast studio inside, while letting the brand remain
		unapologetic in its presence in the premium space it occupied at the event.
	</p>
</section>

<section class="page" id="page-6">
	<div class="quadrants">
		<!-- <Img src={gif6a}/> -->
		<!-- <Img src={gif6b}/> -->
		<!-- <Img src={gif6c}/> -->
		<!-- <Img src={gif6d}/> -->
		<mux-player
			style="--controls: none;"
			stream-type="on-demand"
			playback-id="xL16NepCwId01RMVe025WTSxOD7wgxqKTns00XU2MDpOeU"
			autoplay
			loop
		/>
		<mux-player
			style="--controls: none;"
			stream-type="on-demand"
			playback-id="xL16NepCwId01RMVe025WTSxOD7wgxqKTns00XU2MDpOeU"
			autoplay
			loop
		/>
		<mux-player
			style="--controls: none;"
			stream-type="on-demand"
			playback-id="xL16NepCwId01RMVe025WTSxOD7wgxqKTns00XU2MDpOeU"
			autoplay
			loop
		/>
		<mux-player
			style="--controls: none;"
			stream-type="on-demand"
			playback-id="xL16NepCwId01RMVe025WTSxOD7wgxqKTns00XU2MDpOeU"
			autoplay
			loop
		/>
	</div>
	<p class="description">
		The “PMB” sub brand was built with motion in mind from the ground up. Using the motion
		principles already laid out in the brand toolkit, Modern People designed and produced 5 content
		pieces that introduced the campaign to the world.
	</p>
</section>

<section class="page" id="page-7">
	<div class="column">
		<Img src={gif7a} />
		<Img src={gif7b} />
		<Img src={gif7c} />
	</div>
	<p class="description">
		The “PMB” sub brand was built with motion in mind from the ground up. Using the motion
		principles already laid out in the brand toolkit, Modern People designed and produced 5 content
		pieces that introduced the campaign to the world.
	</p>
</section>

<section class="page" id="page-8">
	<div class="hero">
		<mux-player stream-type="on-demand" playback-id="nHOLot4wCZ4v1tGBxSF5zgD79RslO61hLZt02u4JaSng" />
	</div>
	<p class="description">
		The “PMB” sub brand was built with motion in mind from the ground up. Using the motion
		principles already laid out in the brand toolkit, Modern People designed and produced 5 content
		pieces that introduced the campaign to the world.
	</p>
</section>

<section class="page" id="page-9">
	<div class="column">
		<Img src={img9a} />
		<Img src={img9b} />
		<Img src={img9c} />
	</div>
	<p class="description">
		In the same spirit, the motion content was built modularly, with built-in flexibility to
		generate plenty of social media content consistent with the rest of the “Podcasts. Made Better.”
		identity.
	</p>
</section>

<style>
	.column {
		grid-column: 1 / -1;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-auto-rows: 1fr;
		gap: inherit;

		/* overflow-y: scroll; */
	}
	.quadrants {
		max-height: 100%;
		width: 100%;
		grid-column: 1 / -1;

		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-rows: min-content;
		gap: inherit;
	}
	.column :global(picture) :global(img),
	.quadrants :global(picture) :global(img) {
		height: 100%;
		background-size: contain !important;
	}

	/* .column mux-player,
	.quadrants mux-player {
		width: 100%;
		height: 100%;
	} */
</style>
