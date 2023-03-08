<script>
    import Circle from "$components/Circle.svelte";
</script>

<main>
	<p class="primary">
		<Circle color="var(--international-orange)"/>
	</p>
	
	<p class="primary" style="text-transform: uppercase;">
		<a href="mailto:hello@modernpeople.io">hello@<br />modernpeople.io</a>
	</p>
	
	<p class="secondary">
		Work with us<br />
		<a href="mailto:hello@modernpeople.io">jobs@modernpeople.io</a>
	</p>
</main>


<style>
	main {
		flex: 1;
		padding: var(--padding);
	}
</style>
