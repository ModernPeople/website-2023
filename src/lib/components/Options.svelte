<script>
	import { options } from '../../stores';
</script>

<section>
	<h2>dev_options</h2>
	{#each Object.entries($options) as [key, value], i}
		<!-- {i}, {key}: {value} -->
		<label>
			<input type="checkbox" bind:checked={$options[key]} />
			{key}
		</label>
	{/each}
</section>

<style>
	section {
		font-size: 1rem;
		color: var(--fg);
		opacity: 0.5;

		display: flex;
		flex-flow: column;
		gap: 0.5rem;
	}
	section label {
		user-select: none;
	}
</style>
