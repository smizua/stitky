<script>
  import Stitek from '$lib/Stitek.svelte';
  import Logo from '$lib/logo.svelte';
  import produkty from '$lib/produkty.json';

  const velikosti = new Set();
  for (const { velikostStitku } of produkty) {
    velikosti.add(velikostStitku);
  }

  const velikostToClassName = {
    šťáva: 'stava',
    štítek: 'stitek',
    tinktura: 'tinktura'
  };
</script>

<div class="no-print">
  <h1>Netiskne se</h1>

  <!-- velikosti:
  {#each Array.from(velikosti) as velikost}
    <p>{velikost}</p>
  {/each} -->
</div>

{#each produkty as produkt}
  <!-- <Stitek /> -->
  <div class="stitek {velikostToClassName[produkt.velikostStitku]}">
    <div>
      <div class="name">{produkt.name}</div>
      <div class="latinName">{produkt.latinName}</div>
      <div class="logo">
        <div class="logo-inner"><Logo /></div>
      </div>
      <div class="textSuvenyr">{produkt.textSuvenyr}</div>
    </div>
    <div class="side">
      <div class="side2">
        <div class="textObsah">Obsah: {produkt.textObsah}</div>
        <div class="textVyrobeno">Vyrobeno: {produkt.textVyrobeno}</div>
      </div>
    </div>
  </div>
{/each}

<style>
  @media print {
    .no-print {
      visibility: hidden;
      display: none;
    }
  }

  .stitek {
    display: inline-block;
    position: relative;
    border: 1px dashed #ccc;
  }

  .logo-inner {
    display: inline;
    text-align: center;
  }

  .stitek.stava {
    width: 10.5cm;
    height: 6.5cm;
  }
  .stitek.stitek {
    width: 10.5cm;
    height: 6.5cm;
  }
  .stitek.tinktura {
    width: 10.5cm;
    height: 6.5cm;
  }

  .name {
    text-align: center;
  }
  .latinName {
    text-align: center;
  }
  .textObsah {
    text-align: center;
  }
  .textSuvenyr {
    text-align: center;
  }
  .textVyrobeno {
    text-align: center;
  }

  .side {
    background-color: bisque;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 1.5cm;
  }
  .side2 {
    background-color: blue;
    height: 4.5cm;
    text-align: center;
    /* transform: rotate(-90deg); */
  }
</style>
