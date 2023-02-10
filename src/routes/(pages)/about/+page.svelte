<script>
	import Circle from '$icons/circle.svg?component';
	// import robothead from "$icons/robot-head.svg?url";
</script>

<main class="background">
	<Circle height="20px" width="20px" color="var(--international-orange)" />

	<p class="primary">
		We are an interdisciplinary design studio creating the future with bold and functional visual
		tools, made for anywhere a brand shows up.
	</p>

	<p class="primary">
		We thrive working with innovative partners who seek thinkers and makers within one creative
		company.
	</p>

	<p class="primary">We build, deploy, and amplify differentiated brands.</p>

	<!-- <img src="https://placekitten.com/270/200" alt="placeholder" /> -->
</main>

<!-- <RobotHead width="400vw" height="auto" id="robot-head" color="var(--international-orange)" style="position: absolute; top: 400px; transform: rotate(30deg)"/> -->
<style>
	.background {
		flex: 1;

		padding: 0 var(--padding);

		background-color: var(--white);
		background-image: url(/robot-head-angled.svg);
		background-repeat: no-repeat;
		background-position-x: 15vw;
		background-size: cover;
	}
</style>
