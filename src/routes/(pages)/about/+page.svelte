<script>
    import Circle from "$icons/circle.svg?component";
    import robothead from "$icons/robot-head.svg?url";
</script>

<div class="background">
    <Circle color="var(--international-orange)"/>
    
    <p class="primary">We are an interdisciplinary design studio building for the future with bold and functional visual tools, made for anywhere a brand shows up today.</p>
    <p class="primary">We thrive working with innovative partners who seek thinking and making under one creative company.</p>
    <p class="primary">Differentiated Brands succeed. <br>We help create or enhance them.</p>
    
    <img src="https://placekitten.com/270/200" alt="placeholder">
</div>

<!-- <RobotHead width="400vw" height="auto" id="robot-head" color="var(--international-orange)" style="position: absolute; top: 400px; transform: rotate(30deg)"/> -->

<style>
    .background {
        height: 100%;
        width: 100%;

        background-image: url({robothead});
    }
</style>