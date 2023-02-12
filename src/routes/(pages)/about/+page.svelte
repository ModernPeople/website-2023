<script>
	import Circle from "$components/Circle.svelte";
</script>

<main class="background">
	<Circle color="var(--international-orange)" />

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

<style>
	.background {
		flex: 1;

		padding: var(--padding);

		background-color: var(--white);
		background-image: url("/robot-head-angled.svg");
		background-repeat: no-repeat;
		background-position-x: 15vw;
		background-size: cover;
	}
</style>
