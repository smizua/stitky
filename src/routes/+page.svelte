<script lang="ts">
  import Stitek from '$lib/Stitek.svelte';
  import produkty from '$lib/produkty.json';

  const velikosti = new Set();
  for (const { velikostStitku } of produkty) {
    velikosti.add(velikostStitku);
  }
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
    <div class="no-print">
      Pocet:
      <input type="number" min="1" bind:value={produkt.pocetStitku} />
      Velikost:
      <select bind:value={produkt.velikostStitku}>
        <option value="stava">Stava</option>
        <option value="tinktura">Tinktura</option>
      </select>
    </div>
    {#each new Array(produkt.pocetStitku) as no, index}
      <div class="stitek" class:onlyPrint={index > 0}>
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

  @media not print {
    .onlyPrint {
      visibility: hidden;
      display: none;
      width: 0;
      height: 0;
    }
  }
  .stitky {
    page-break-inside: auto;
  }

  .stitek {
    display: inline-block;
  }
</style>
