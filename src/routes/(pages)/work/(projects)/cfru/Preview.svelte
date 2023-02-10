<script>
    import Img from '@zerodevx/svelte-img';

    import still1 from './still-1.png?run';
    // import still2 from './still-2.jpg?run';
    // import still3 from './still-3.jpg?run';
    // import still4 from './still-4.jpg?run';
    // import still5 from './still-5.jpg?run';
    // import still6 from './still-6.jpg?run';
    // import still7 from './still-7.jpg?run';
    // import still8 from './still-8.jpg?run';
    // import still9 from './still-9.jpg?run';
</script>


<Img src={still1} alt="still-1" />
<!-- <div class="images">
    <Img src={still1} alt="still-1" />
    <Img src={still2} alt="still-2" />
    <Img src={still3} alt="still-3" />
    <Img src={still4} alt="still-4" />
    <div class="double">
        <Img src={still5} alt="still-5" />
    </div>
</div> -->


<style>
    :global(img) {
        width: 100%;
        height: auto;
        background-size: contain;
        background-position: top;
    }
</style>