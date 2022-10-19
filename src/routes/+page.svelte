<script>
  import Stitek from '$lib/Stitek.svelte';

  let pocet = 1;

  $: stitky = new Array(pocet);
</script>

<div class="no-print">
  <input type="number" bind:value={pocet} />
</div>

{#each stitky as stitek}
  <Stitek />
{/each}

<style>
  @media print {
    .no-print {
      visibility: hidden;
      display: none;
    }
  }
</style>
