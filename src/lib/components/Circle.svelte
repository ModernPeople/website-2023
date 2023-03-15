<script lang="ts">
    import { options } from "../../stores";
    export let width = "1em";
    export let height = "1em";
    export let color = "currentColor";
</script>

{#if $options.prefer_font_circle_over_svg}
    <span style:color style:font-size={height}>○</span>
{:else}
<svg {width} {height} viewBox="0 0 20 20" xmlns='http://www.w3.org/2000/svg'>
    <circle cx="10" cy="10" r="7" fill="none" stroke={color} stroke-width="3"></circle>
</svg>
{/if}

<style>
    svg {
        display: inline-block;
    }
</style>