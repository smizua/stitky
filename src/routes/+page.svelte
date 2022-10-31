<script lang="ts">
  import Stitek from '$lib/Stitek.svelte';
  import produkty from '$lib/produkty.json';

  const velikosti = new Set();
  for (const { velikostStitku } of produkty) {
    velikosti.add(velikostStitku);
  }

  const velikostToClassName: Record<string, string> = {
    šťáva: 'stava',
    štítek: 'stitek',
    tinktura: 'tinktura'
  };
</script>

<div class="no-print">
  <!-- <h1>Netiskne se</h1> -->

  <!-- velikosti:
  {#each Array.from(velikosti) as velikost}
    <p>{velikost}</p>
  {/each} -->
</div>

<div class="stitky">
  {#each produkty as produkt}
    {#each new Array(produkt.pocetStitku) as no}
      <div class="stitek">
        <Stitek bind:produkt />
      </div>
    {/each}
  {/each}
</div>

<style>
  @media print {
    .no-print {
      visibility: hidden;
      display: none;
    }
  }

  .stitky {
    page-break-inside: auto;
  }

  .stitek {
    display: inline-block;
  }
</style>
