<script lang="ts">
  import Logo from './logo.svelte';
  import Toxic from './toxic.svelte';

  const velikosti: Record<string, string> = {
    tinktura: `
      --stitek-width: 80mm;
      --stitek-height: 44mm;
      --aside-spacing: 0mm;
      --aside-width: 8mm;
      --extra-padding: 0mm;
      --font-title-size: 14pt;
      --font-base-size: 7pt;
    `,
    stava: `
      --stitek-width: 100mm;
      --stitek-height: 65mm;
      --aside-spacing: 0mm;
      --aside-width: 12mm;
      --extra-padding: 0mm;
      --font-title-size: 20pt;
      --font-base-size: 10pt;
    `
  };

  // export let produkt = {
  //   name: 'Lichořeřišnice větší <small>– květ, list, semeno</small>',
  //   latinName: 'Tropaeolum majus – Flos, Folium, Semen',
  //   druhObsahu: 'Tinktura z léčivé rostliny',
  //   velikostStitku: 'tinktura',
  //   textSuvenyr: 'Suvenýr z bylinkové zahrádky.',
  //   textObsah: '50 ml',
  //   textVyrobeno: ' červenec 2022',
  //   pocetStitku: 7
  // };

  export let produkt = {
    name: 'Lichořeřišnice větší <small>– květ, list, semeno</small>',
    latinName: 'Tropaeolum majus – Flos, Folium, Semen',
    druhObsahu: 'Tinktura z léčivé rostliny',
    velikostStitku: 'stava',
    textSuvenyr: 'Suvenýr z bylinkové zahrádky.',
    textObsah: '50 ml',
    textVyrobeno: ' červenec 2022',
    pocetStitku: 7,
    toxic: true
  };

  $: style = velikosti[produkt.velikostStitku];
</script>

<div class="stitek" {style}>
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
    {#if produkt.toxic}
      <div class="toxic"><Toxic /></div>
    {/if}
  </div>
  <div class="aside">
    <div class="aside-outer">
      <div class="aside-inner rotate">
        <div>
          Obsah:
          <span contenteditable="true" bind:innerHTML={produkt.textObsah}
            >{@html produkt.textObsah}</span
          >
        </div>
        <div>
          Vyrobeno:
          <span contenteditable="true" bind:innerHTML={produkt.textVyrobeno}
            >{@html produkt.textVyrobeno}</span
          >
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  :root {
    --stitek-width: 105mm;
    --stitek-height: 65mm;
    --aside-spacing: 0mm;
    --aside-width: 12mm;
    --extra-padding: 0mm;
    --font-title-size: 14pt;
    --font-base-size: 7pt;
  }

  .stitek {
    page-break-inside: avoid;
    position: relative;
    width: var(--stitek-width);
    height: var(--stitek-height);
    border: 0.01mm #ccc dotted;
    font-size: var(--font-base-size);
    font-family: 'century gothic', sans-serif;
    padding: 2mm 0 2mm 1.5mm;
  }

  .main {
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
    padding: var(--extra-padding);
  }

  .toxic {
    position: absolute;
    bottom: 2mm;
    right: var(--aside-width);
  }

  .name {
    font-size: var(--font-title-size);
    font-weight: bolder;
  }

  .latin-name {
    font-style: italic;
  }

  .druh-obsahu {
    font-weight: bold;
  }

  .text-suvenyr {
    font-style: italic;
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
    text-align: center;
  }

  .rotate {
    -moz-transform: translateX(-50%) translateY(-50%) rotate(-90deg);
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(-90deg);
    transform: translateX(-50%) translateY(-50%) rotate(-90deg);
  }
</style>
