<script>
  import { isLoged, signOut } from "./utils/store.js";

  import Login from "./components/Login.svelte";
  import NewEntry from "./components/NewEntry.svelte";
</script>

<main>
  {#if $isLoged}
    <button on:click={signOut}>Salir</button>
    <NewEntry />
  {:else}
    <Login />
  {/if}
</main>

<style>
  main {
    text-align: center;
    margin: 0 auto;
  }
</style>
