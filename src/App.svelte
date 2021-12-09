<script>
  import { isLoged, signOut, user } from "./utils/store.js";

  import Login from "./user/pages/Login.svelte";
  import NewEntry from "./entry/pages/NewEntry.svelte";
</script>

<main>
  <div class="waves">
    <img class="front" src="./waves/front-wave.svg" alt="frontal wave" />
    <img class="back" src="./waves/back-wave.svg" alt="background wave" />
  </div>
  {#if $isLoged}
    <button on:click={signOut}>Salir</button>
    <h1>Hola {$user.name}</h1>
    <NewEntry />
  {:else}
    <Login />
  {/if}
</main>

<style>
  main {
    text-align: center;
    margin: 0 auto;
    position: relative;
    z-index: 100;
  }
  .waves {
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .waves .front {
    position: absolute;
    z-index: 7;
    bottom: 0;
    left: 0;
  }
  .waves .back {
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
  }
</style>
