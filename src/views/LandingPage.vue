<script setup>
  import {RouterLink} from "vue-router"
  import { ref, watch } from "vue"
  import { defineProps } from "vue"
  import {useRouter} from "vue-router"

    const router = useRouter()

    const navigatetoNext = () => {
        router.push('/choices')
    }

  // function togglePasswordVisibility() {
  //     var passwordInput = document.getElementById('password');
  //     var toggleBtn = document.getElementById('toggleBtn');

  //     if (passwordInput.type === 'password') {
  //       passwordInput.type = 'text';
  //       toggleBtn.textContent = '👁️'; // Change to an open eye icon
  //     } else {
  //       passwordInput.type = 'password';
  //       toggleBtn.textContent = '👁️'; // Change to a closed eye icon
  //     }
  //   }
</script>

<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <div class="app-container">
      <section class="content-section">
        <div class="vl"></div>
        <aside class="asistencia-panel">
          <header class="panel-header">
            <h1 class="header-title">Controla Asistencia</h1>
            <img 
              loading="lazy" 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/19af246c3ac2466995a9149ab654e0d4614c5fe57e3e38c38a913d9a87d0d49c?apiKey=a927cef3079c4be4b43e485687f422e0&" 
              alt="Attendance Control Illustration" 
              class="header-image" 
            />
          </header>
        </aside>
        <section class="login-panel">
          <div class="login-content">
            <h2 class="welcome-message">¡Bienvenidos!</h2>
            <form class="login-form">
              <label for="usernameInput" class="visually-hidden">Nombre de Usuario</label>
              <input type="text" id="usernameInput" class="input-field" placeholder="Ingrese su nombre de usuario" aria-label="Ingrese su nombre de usuario" />
  
              <label for="passwordInput" class="visually-hidden">Contraseña</label>
              <div class="password-container">
                <input type="password" id="passwordInput" class="input-field password" placeholder="Ingrese su contraseña" aria-label="Ingrese su contraseña" />
                <!-- want to add a password reveal button -->
              </div>

              <button type="submit" class="login-button" @click="navigatetoNext()">Iniciar sesion</button>

              <div class="remember-me-container">
                <input type="checkbox" id="rememberMe" class="checkbox"/>
                <label class="remember-me-label" for="rememberMe">Recuérdame</label>
              </div>
            </form>
          </div>
        </section>
      </section>
    </div>
  </template>
  
  <style scoped>
  .app-container {
    background-color: #fff;
  }
  .content-section {
    display: flex;
    gap: 20px;
  }
  @media (max-width: 991px) {
    .content-section {
      flex-direction: column;
      align-items: stretch;
      gap: 0px;
    }
  }
  .vl {
    border-left: .1px solid rgba(0, 0, 0, 0.25);
    height: 100%;
    position: absolute;
    left: 58%;
    top: 0;
    bottom: 0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
  .asistencia-panel {
    display: flex;
    flex-direction: column;
    width: 60%;
  }
  .panel-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 80px;
  }
  .header-title {
    font-family: Poppins, sans-serif;
    font-size: 68px;
    color: #555555;
    font-weight: 400;
    text-align: center;
    margin-bottom: 20px;
  }
  @media (max-width: 991px) {
    .header-title {
      font-size: 40px;
      padding: 0 20px;
    }
  }
  .header-image {
    aspect-ratio: 1.85;
    object-fit: cover;
    width: 100%;
    max-width: 469px;
  }
  .login-panel {
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .login-content {
    padding: 50px 50px;
    display: flex;
    flex-direction: column;
  }
  .welcome-message {
    font-family: Poppins, sans-serif;
    font-weight: 400;
    margin-bottom: 25px;
    font-size: 36px;
    color: #555555;
    display: flex;
    justify-content: center;
  }
  .login-form {
    display: flex;
    flex-direction: column;
  }
  .input-field {
    font-family: Poppins, sans-serif;
    font-weight: 400;
    font-size: 16px;
    margin-top: 25px;
    padding: 15px;
    border-radius: 8px;
    border: 0.5px solid rgba(0, 0, 0, 0.25);
    box-shadow: 0px 10px 20px -8px rgba(0, 0, 0, 0.25);
    transition: border-color 0.3s ease-in-out;
  }
  .input-field:hover {
    border-color: #555555;
  }

  .password-container {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
  .password {
    flex-grow: 1;
  }
  .login-button {
    margin-top: 50px;
    padding: 10px;
    border-radius: 8px;
    border: 0.5px solid rgba(68, 102, 242);
    box-shadow: 0px 10px 20px -8px rgba(68, 102, 242, .75);
    background-color: rgba(68, 102, 242);
    color: #fff;
    text-align: center;
    font: 400 16px Poppins, sans-serif;
    cursor: pointer;
    letter-spacing: .5px;
    transition: all .25s ease-in-out;
  }
  .login-button:hover {
    background-color: #3C5AD5;
    border-color: #3C5AD5;
    box-shadow: 0px 10px 20px -8px rgba(60, 90, 213, 0.75);
    }
  .remember-me-container {
    display: flex;
    align-items: center;
    margin-top: 25px;
  }
  .checkbox {
    transform: scale(1.5);
    margin-right: 16px;
    cursor: pointer;
    box-shadow: 0px 10px 20px -8px rgba(0, 0, 0, 0.25);
  }
  .remember-me-label {
    font-family: Poppins, sans-serif;
    font-weight: 400;
    font-size: 16px;
    display: flex;
    align-items: left;
    cursor: pointer;
    box-shadow: 0px 10px 20px -8px rgba(0, 0, 0, 0.25);
    color: #555555;
  }
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
  </style>