<script lang="ts" context="module">
</script>

<script lang="ts">
  import { browser } from '$app/environment';

  let databases: IDBDatabaseInfo[] = [];
  let isLoading: boolean = !browser;

  const refresh = async () => {
    isLoading = true;
    try {
      databases = await indexedDB.databases();
    } finally {
      isLoading = false;
    }
  };

  if (browser) {
    refresh();
  }
</script>

<h1>IndexedDB Databases:</h1>

<button on:click|preventDefault={refresh} disabled={isLoading}>Refresh</button>
<div>
  {#if isLoading}
    wait...
  {:else if databases.length}
    <ul>
      {#each databases as database (database.name)}
        <li>
          <a href={`/db/${database.name}`}>{database.name}</a>
          {database.version}
        </li>
      {/each}
    </ul>
  {:else}
    No database
  {/if}
</div>
