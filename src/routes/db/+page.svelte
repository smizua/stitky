<script lang="ts" context="module">
</script>

<script lang="ts">
  import { browser } from '$app/environment'

  let databases = browser ? indexedDB.databases() : null;
</script>

<h1>IndexedDB Databases:</h1>

{#if databases}
  {#await databases}
    wait...
  {:then databases}
    <ul>
      {#each databases as database}
        <li>
          {database.name}
          {database.version}
        </li>
      {:else}
        <li>—</li>
      {/each}
    </ul>
  {/await}
{:else}
  wait......
{/if}
