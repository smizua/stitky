<script lang="ts">
  import Logo from './logo.svelte';
  import Toxic from './toxic.svelte';

  const velikosti: Record<string, string> = {
    jam: `
      --stitek-width: ${95 - 1.9}mm;
      --stitek-height: ${40 - 4.4}mm;
      --aside-spacing: 0mm;
      --aside-width: 12mm;
      --font-title-size: 20pt;
      --font-base-size: 10pt;
    `,
    likér: `
      --stitek-width: ${60 - 1.9}mm;
      --stitek-height: ${80 - 4.4}mm;
      --aside-spacing: 0mm;
      --aside-width: 12mm;
      --font-title-size: 20pt;
      --font-base-size: 10pt;
    `,
    stava: `
      --stitek-width: ${100 - 1.9}mm;
      --stitek-height: ${65 - 4.4}mm;
      --aside-spacing: 0mm;
      --aside-width: 12mm;
      --font-title-size: 20pt;
      --font-base-size: 10pt;
    `,
    tinktura: `
      --stitek-width: ${80 - 1.9}mm;
      --stitek-height: ${45 - 4.4}mm;
      --aside-spacing: 0mm;
      --aside-width: 8mm;
      --font-title-size: 14pt;
      --font-base-size: 7pt;
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
    <div class="name" contenteditable bind:innerHTML={produkt.name}>
      {@html produkt.name}
    </div>
    <div class="latin-name" contenteditable bind:innerHTML={produkt.latinName}>
      {@html produkt.latinName}
    </div>
    <Logo />
    <div class="druh-obsahu" contenteditable bind:innerHTML={produkt.druhObsahu}>
      {@html produkt.druhObsahu}
    </div>
    <div class="text-suvenyr" contenteditable bind:innerHTML={produkt.textSuvenyr}>
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
          <span contenteditable bind:innerHTML={produkt.textObsah}>{@html produkt.textObsah}</span>
        </div>
        <div>
          Vyrobeno:
          <span contenteditable bind:innerHTML={produkt.textVyrobeno}
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
    --font-title-size: 14pt;
    --font-base-size: 7pt;
  }

  .stitek {
    page-break-inside: avoid;
    position: relative;
    width: var(--stitek-width);
    height: var(--stitek-height);
    font-size: var(--font-base-size);
    font-family: 'century gothic', sans-serif;
    border: 0.2mm #ccc dashed;
    padding: 2mm 0 2mm 1.5mm;
  }

  .main {
    display: flex;
    flex-direction: column;
    width: calc(var(--stitek-width) - var(--aside-width) - var(--aside-spacing));
    height: var(--stitek-height);
    text-align: center;
    overflow: visible;
  }

  .main > div {
    flex: auto;
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
