<script>
	import { options } from '../../stores';
</script>

<section>
	<h2>dev_options</h2>
	{#each Object.keys($options) as key}
		<label>
			{#if typeof $options[key] == "boolean"}
				 <input type="checkbox" name={key} bind:checked={$options[key]} />
			{:else if  typeof $options[key] == "number"}
				 <input type="number" name={key} style="width: 88px" bind:value={$options[key]} />
			{:else}
				 {typeof $options[key]}
			{/if}
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
	/* section label {
		user-select: none;
	} */
</style>
