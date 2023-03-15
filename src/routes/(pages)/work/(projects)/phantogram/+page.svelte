<script>
	import Img from '@zerodevx/svelte-img';

	import phantogram from './Phantogram.jpg?run';

	import layer1 from './layer-10.png?run';
	import layer2 from './layer-20.png?run';
	import layer3 from './layer-30.png?run';
	import layer4 from './layer-40.png?run';
	import layer5 from './layer-50.png?run';
	import layer6 from './layer-60.png?run';
	import layer7 from './layer-70.png?run';
	import layer8 from './layer-80.png?run';
	import layer9 from './layer-90.png?run';
	import layer10 from './layer-100.png?run';
	import layer11 from './layer-110.png?run';
	import layer12 from './layer-120.png?run';
	import layer13 from './layer-130.png?run';
	
</script>


<section class="page" id="page-1">
	<div class="info">
		<h1>You Don't Get Me High Anymore - Republic Records</h1>
		<p>Art direction, design and content production for an iconic band with a high end visual style</p>
	</div>
	<div class="hero">
		<Img src={phantogram}/>
	</div>
	<p class="description">
		It was important for the iconic band Phantogram to set a visual standard at the beginning of their new release. The idea was to introduce high-end typography into a ‘user-generated’ format like the lyric video, and create a creative beacon for the audience to follow.
	</p>
</section>

<section class="page" id="page-2">
	<div class="hero">
		<Img src={layer1}/>
	</div>
	<p class="description">
		Under Modern People partner Can Misirlioglu's direction, a visual identity and art direction was created specifically for this chapter of the band’s journey to fame.
	</p>
</section>

<section class="page" id="page-3">
	<div class="row">
		<Img src={layer2}/>
		<Img src={layer3}/>
		<Img src={layer4}/>
		<Img src={layer5}/>
	</div>
	<p class="description">
		Imagining the powerfully personal lyrics of the song in different applications, a rich, highly textured visual world was established. 
	</p>
</section>

<section class="page" id="page-4">
	<div class="column">
		<Img src={layer6}/>
		<Img src={layer7}/>
		<Img src={layer8}/>
	</div>
	<p class="description">
		Combining all the elements together, a design-forward, animated music video was produced, and it became the first visual expression of the band for their new release which informed the subsequent releases. Millions of views later, it remains a highlight moment in the band’s prolific output.
	</p>
</section>


<style>
	h1 {
		font-size: 2rem;
	}

	.column,
	.row {
		display: flex;
		gap: .5rem;
	}
	.row {
		grid-column: 1 / -1;
		flex-flow: row;
		width: 100%;
	}
	.column {
		grid-row: 1 / -1;
		flex-flow: column;
		height: 100%;
	}

	/* tell images to fit given container height */
	.column :global(picture) {
		max-height: 33%;
	}
	.row :global(picture) {
		max-height: 100%;
	}
	.column :global(img) {
		height: 100%;
	}
	.row :global(img) {
		height: 100%;
	}
	.column :global(picture) :global(img) {
		height: 100%;
		background-size: contain !important;
	}
	.row :global(picture) :global(img) {
		height: 100%;
		background-size: contain !important;
	}
</style>