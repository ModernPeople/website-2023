<script>
	import Img from '@zerodevx/svelte-img';

	import img1 from "./images/KBA_1.jpg?run"
	import img2 from "./images/KBA_2.png?run"
	import img3 from "./images/KBA_3.png?run"
	import img4 from "./images/KBA_4.png?run"
	import img5a from "./images/KBA_5_A.png?run"
	import img5b from "./images/KBA_5_B.png?run"
	import img5c from "./images/KBA_5_C.png?run"
	import img5d from "./images/KBA_5_D.png?run"
	import img6 from "./images/KBA_6.png?run"
	import img7 from "./images/KBA_7.jpg?run"
	import img8 from "./images/KBA_8.jpg?run"

</script>


<section class="page" id="page-1">
	<div class="info">
		<h1>Kblinka</h1>
		<p>Brand design for a social impact oriented DAO</p>
	</div>
	<div class="hero">
		<Img src={img1}/>
	</div>
	<p class="description">
		Kblinka is a DAO launched by culpepper/williams, an independent media agency. They approached Modern People to create a simple visual identity to introduce the social impact oriented DAO to the world for the first time. 
	</p>
</section>

<section class="page" id="page-2">
	<div class="hero">
		<Img src={img2}/>
	</div>
	<p class="description">
		Communicating a sense of collaborative spirit, upward movement, and playful positivity, Modern People created the brand mark. The mark had two states: The upward and downward ladder.
	</p>
</section>

<section class="page" id="page-3">
	<div class="hero">
		<Img src={img3}/>
	</div>
	<p class="description">
		Communicating a sense of collaborative spirit, upward movement, and playful positivity, Modern People created the brand mark. The mark had two states: The upward and downward ladder.
	</p>
</section>

<section class="page" id="page-4">
	<div class="hero">
		<Img src={img4}/>
	</div>
	<p class="description">
		Communicating a sense of collaborative spirit, upward movement, and playful positivity, Modern People created the brand mark. The mark had two states: The upward and downward ladder.
	</p>
</section>

<section class="page" id="page-5">
	<div class="quadrants">
		<Img src={img5a}/>
		<Img src={img5b}/>
		<Img src={img5c}/>
		<Img src={img5d}/>
	</div>
	<p class="description">
		4 simple geometric shapes were designated as building blocks along with a set of positive, uplifting brand colors- relatable and inspiring visual components for a broad range of audiences.
	</p>
</section>

<section class="page" id="page-6">
	<div class="hero">
		<Img src={img6}/>
	</div>
	<p class="description">
		4 simple geometric shapes were designated as building blocks along with a set of positive, uplifting brand colors- relatable and inspiring visual components for a broad range of audiences. 
	</p>
</section>

<section class="page" id="page-7">
	<div class="hero">
		<Img src={img7}/>
	</div>
	<p class="description">
		From creators to corporate organizations looking for web3 services, the simple and elegant system was turned into a toolkit for the organization to take and immediately put to use in all kinds of brand expressions.
	</p>
</section>

<section class="page" id="page-8">
	<div class="hero">
		<Img src={img8}/>
	</div>
	<p class="description">
		From creators to corporate organizations looking for web3 services, the simple and elegant system was turned into a toolkit for the organization to take and immediately put to use in all kinds of brand expressions.
	</p>
</section>


<style>
	.column {
		grid-column: 1 / -1;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-auto-rows: min-content;
		gap: inherit;

		/* overflow-y: scroll; */
	}
	.quadrants {
		max-height: 100%;
		grid-column: 1 / -1;
		
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-rows: min-content;
		gap: inherit;
	}
	.column :global(picture) :global(img),
	.quadrants :global(picture) :global(img) {
		height: 100%;
	}
</style>