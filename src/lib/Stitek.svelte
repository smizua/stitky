<script lang="ts">
  import Logo from './logo.svelte';

  export let produkt = {
    name: 'Lichořeřišnice větší – květ, list, semeno ',
    latinName: 'Tropaeolum majus – Flos, Folium, Semen',
    druhObsahu: 'Tinktura z léčivé rostliny',
    velikostStitku: 'tinktura',
    textSuvenyr: 'Suvenýr z bylinkové zahrádky.',
    textObsah: '50 ml',
    textVyrobeno: ' červenec 2022',
    pocetStitku: 7
  };
</script>

<div class="stitek">
  <div class="main">
    <div class="name" contenteditable="true" bind:innerHTML={produkt.name}>
      {@html produkt.name}
    </div>
    <div class="latin-name" contenteditable="true" bind:innerHTML={produkt.latinName}>
      {@html produkt.latinName}
    </div>
    <Logo />
    <div class="druh-obsahu" contenteditable="true" bind:innerHTML={produkt.druhObsahu}>
      {@html produkt.druhObsahu}
    </div>
    <div class="text-suvenyr" contenteditable="true" bind:innerHTML={produkt.textSuvenyr}>
      {@html produkt.textSuvenyr}
    </div>
  </div>
  <div class="aside">
    <div class="aside-outer">
      <div class="aside-inner rotate">
        <table>
          <tr>
            <th>Obsah:</th>
            <td contenteditable="true" bind:innerHTML={produkt.textObsah}
              >{@html produkt.textObsah}</td
            >
          </tr>
          <tr>
            <th>Vyrobeno:</th>
            <td contenteditable="true" bind:innerHTML={produkt.textVyrobeno}
              >{@html produkt.textVyrobeno}</td
            >
          </tr>
        </table>
      </div>
    </div>
  </div>
</div>

<style>
  :root {
    --stitek-width: 10.5cm;
    --stitek-height: 6.5cm;
    --aside-spacing: 0cm;
    --aside-width: 1.2cm;
    --extra-padding: 1mm;
  }

  .stitek {
    page-break-inside: avoid;
    position: relative;
    width: var(--stitek-width);
    height: var(--stitek-height);
    border: 1px #666 dashed;
  }

  .main {
    font-family: 'Century Gothic', sans-serif;
    display: flex;
    flex-direction: column;
    /* background-color: aqua; */
    width: calc(var(--stitek-width) - var(--aside-width) - var(--aside-spacing));
    height: var(--stitek-height);
    text-align: center;
    overflow: visible;
  }

  .main > div {
    flex: auto;
    border: 1px white dashed;
    padding: var(--extra-padding);
  }

  .name {
    font-size: larger;
    font-weight: bolder;
  }

  .aside {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    /* background-color: #ccf; */
  }

  .aside-outer {
    height: 100%;
    position: relative;
    display: block;
    margin: 0 calc(var(--aside-width) / 2);
  }

  .aside-inner {
    position: absolute;
    top: 50%;
    left: 50%;
    width: var(--stitek-height);
    height: var(--aside-width);
    /* text-align: center; */
  }

  table {
    margin: 0 auto;
  }

  th {
    text-align: right;
    font-weight: inherit;
  }

  td {
    text-align: left;
  }

  .rotate {
    -moz-transform: translateX(-50%) translateY(-50%) rotate(-90deg);
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(-90deg);
    transform: translateX(-50%) translateY(-50%) rotate(-90deg);
  }
</style>
