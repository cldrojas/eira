<script>
    import { logIn } from '../utils/auth.js';
 
    let email, password;
    let loading = false;

    const login = () => {
        loading = true;
        logIn(email, password)
    };
</script>

<section class="Login">
  <div class="Login-content">
    <div class="modal" class:active={loading}><img src="./favicon.png" alt="logo"></div>
    <form class="Login-form" on:submit|preventDefault={login}>
      <input bind:value={email} type="text" placeholder="Login" />
      <input bind:value={password} type="password" placeholder="Password" />
      <div class="forgot">
        <label for="remember"><input type="checkbox" /> Remember me</label>
        <a href="#/">Forgot password?</a>
      </div>
      <button class="submit-btn" type="submit">Login</button>
    </form>
  </div>
</section>
  
<style>
  .Login {
    height: 100vh;
  }
  .Login-content {
    padding: 0 30%;
  }
  .Login-form {
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-self: center;
    justify-content: space-evenly;
  }
  .Login-form input {
    color: snow;
    padding-left: 18px;
    height: 45px;
    background-color: #224957;
    border-radius: 10px;
  }
  input::placeholder {
    color: snow;
  }
  .Login-form button {
    height: 45px;
    border: none;
    color: snow;
    background-color: #20df7f;
    border-radius: 10px;
  }
  .forgot {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .forgot label {
    display: flex;
    align-items: center;
  }
  .forgot a {
    text-decoration: none;
    color: #20df7f;
  }
  .forgot input {
    position: relative;
    height: 18px;
    margin-right: 7px;
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
  .modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
  .active {
    display: flex;
  }
  .modal img{
    animation: rotate 3.5s infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>