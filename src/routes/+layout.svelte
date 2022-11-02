<slot />

<style>
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
      margin: 2mm;
      padding: 0;
    }
  }
</style>
