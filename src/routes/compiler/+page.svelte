<script lang="ts">
  import { compile } from 'svelte/compiler';

  let value: string = '';
  let result: any;
  let error: string = '';

  $: try {
    result = compile(value);
    error = '';
  } catch (err: any) {
    result = undefined;
    error = err.toString();
  }
</script>

<textarea bind:value cols="80" rows="20" />

<br />

<div>
  <pre>{error}{JSON.stringify(result, null, 2)}
  </pre>
</div>
