<script>
  export let state = false;
  export let label = "";
  const changeState = () => {
    state = !state;
    console.log(state);
  };
</script>

<button class="submit-btn" type="submit" on:click={changeState}>
  {#if state}
    <div class="modal" class:active={state} />
  {:else}
    <h2>{label}</h2>
  {/if}
</button>

<style>
  .submit-btn {
    position: relative;
    width: 100%;
    min-height: 45px;
    border: none;
    color: var(--white);
    background-color: var(--primary-color);
    border-radius: 10px;
    cursor: pointer;
  }

  h2 {
    font-size: 1rem;
    margin: 0;
  }

  .modal {
    display: none;
  }

  .active {
    display: block;
  }

  .modal {
    content: "";
    height: 24px;
    width: 24px;
    position: absolute;
    top: 24px;
    left: 150px;
    border: solid 5px var(--inactive-color);
    border-bottom-color: var(--primary-color-dark);
    border-radius: 50%;
    transform: translate3d(-50%, -50%, 0);
    animation: 1.5s linear infinite rotate;
    animation-play-state: inherit;
    will-change: transform;
  }

  @keyframes rotate {
    from {
      transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }
    to {
      transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
  }
</style>
