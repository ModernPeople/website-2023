<script>
    import Img from '@zerodevx/svelte-img';

    import still1 from './still-1.jpg?run';
    import still2 from './still-2.jpg?run';
    import still3 from './still-3.jpg?run';
    import still4 from './still-4.jpg?run';
    import still5 from './still-5.jpg?run';
    // import still6 from './still-6.jpg?run';
    // import still7 from './still-7.jpg?run';
    // import still8 from './still-8.jpg?run';
    // import still9 from './still-9.jpg?run';
</script>


<div class="images">
    <Img src={still1} alt="still-1" />
    <Img src={still2} alt="still-2" />
    <Img src={still3} alt="still-3" />
    <Img src={still4} alt="still-4" />
    <div class="double">
        <Img src={still5} alt="still-5" />
    </div>
</div>


<style>
    .images {
        height: 100%;
        
		display: grid;
        grid-auto-flow: row;
		grid-template-rows: 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr;

		gap: 0.25rem;
	}

	.double {
		grid-column: 1/-1;
	}

    .images :global(picture) {
		max-height: 100%;
	}
	.images :global(img) {
		height: 100%;
	}
	.images :global(picture) :global(img) {
		height: 100%;
		background-size: contain !important;
	}
</style>