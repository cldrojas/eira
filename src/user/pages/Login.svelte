<script>
  import { signIn } from "../../utils/auth.js";
  import { saveToken, saveUser } from "../../utils/store.js";

  import SubmitButton from "../../components/SubmitButton.svelte";

  let email, password;
  let remember = false;

  const login = async () => {
    const data = await signIn(email, password);
    saveUser(data.user);
    saveToken(data.accessToken, remember);
  };
</script>

<section class="Login">
  <div class="Login-content">
    <h1 class="title">Iniciar Sesión</h1>
    <h4 class="subtitle">Comienza a registrar tus emociones</h4>
    <form class="Login-form" on:submit|preventDefault={login}>
      <input bind:value={email} type="text" placeholder="Tu@correo.com" />
      <input bind:value={password} type="password" placeholder="Contraseña" />
      <div class="forgot">
        <label for="remember"
          ><input id="remember" bind:checked={remember} type="checkbox" /> Recuerdame</label
        >
        <a href="#/">Olvidé mi contraseña</a>
      </div>

      <SubmitButton label="Comenzar" />
    </form>
  </div>
</section>

<style>
  .Login {
    height: 100vh;
    display: grid;
    place-items: center;
  }
  .Login-content {
    min-width: 300px;
    min-height: 452px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  .title {
    font-size: 3rem;
    font-weight: 400;
    max-width: 150px;
    margin: 0;
    margin-left: 25%;
  }
  .subtitle {
    height: min-content;
    font-size: 1rem;
    font-weight: 300;
    margin: 0;
  }
  .Login-form {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  .Login-form input {
    color: snow;
    padding-left: 18px;
    min-height: 45px;
    outline: none;
    border: none;
    background-color: #224957;
    border-radius: 10px;
  }
  input::placeholder {
    color: snow;
  }
  .forgot {
    display: flex;
    position: relative;
    justify-content: space-between;
    gap: 12px;
    height: 17px;
  }
  .forgot label {
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .forgot a {
    text-decoration: none;
    color: #20df7f;
  }
  .forgot input {
    cursor: pointer;
    position: relative;
    min-height: 17px;
    margin-right: 8px;
  }
  .forgot input::after {
    content: "";
    position: absolute;
    left: -1px;
    width: 18px;
    height: 17px;
    border-radius: 5px;
    background-color: #224957;
  }
  .forgot input:checked::after {
    content: "";
    position: absolute;
    width: 18px;
    height: 17px;
    border-radius: 5px;
    background-image: url("./img/check.svg");
    background-size: cover;
    background-position-y: center;
    background-color: green;
  }
</style>
