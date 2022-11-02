<slot />

<style>
  @font-face {
    font-family: century gothic;
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.cdnfonts.com/s/18111/GOTHIC.woff) format('woff');
  }

  @font-face {
    font-family: century gothic;
    font-style: italic;
    font-weight: 400;
    src: url(https://fonts.cdnfonts.com/s/18111/GOTHICI.woff) format('woff');
  }

  @font-face {
    font-family: century gothic;
    font-style: normal;
    font-weight: 700;
    src: url(https://fonts.cdnfonts.com/s/18111/GOTHICB.woff) format('woff');
  }

  @font-face {
    font-family: century gothic;
    font-style: italic;
    font-weight: 700;
    src: url(https://fonts.cdnfonts.com/s/18111/GOTHICBI.woff) format('woff');
  }

  @media print {
    :global(.svelte-inspector-host),
    :global(.svelte-inspector-host *) {
      display: none;
      visibility: hidden;
    }

    :global(*) {
      box-sizing: content-box;
    }

    :global(body) {
      margin: 0;
      padding: 0;
    }
  }

  @page {
    size: A4 portrait;

    /* this affects the margin in the printer settings */
    margin: 5mm 5mm 5mm 5mm;
  }
</style>
