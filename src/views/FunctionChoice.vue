<script setup>
import { RouterLink } from "vue-router"
import { ref, watch } from "vue"
import { defineProps } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const navigatetoNext = () => {
  router.push('/teletrabajo')
}
</script>

<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <div class="app-container">
    <section class="content-section">
      <div class="vl"></div>
      <aside class="asistencia-panel">
        <header class="panel-header">
          <h1 class="header-title">Controla Asistencia</h1>
          <img loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/19af246c3ac2466995a9149ab654e0d4614c5fe57e3e38c38a913d9a87d0d49c?apiKey=a927cef3079c4be4b43e485687f422e0&"
            alt="Attendance Control Illustration" class="header-image" />
        </header>
      </aside>
      <section class="options-panel">
        <div class="options-content">
          <div class="cuenta-banner">
            <div class="line"></div>
            <div class="cuenta-container">
              <div class="img-container">
                <img loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0a307a60483998bb7190dbe5ff5c754d04766fff6c934585d96fd211957daaac?apiKey=a927cef3079c4be4b43e485687f422e0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a307a60483998bb7190dbe5ff5c754d04766fff6c934585d96fd211957daaac?apiKey=a927cef3079c4be4b43e485687f422e0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a307a60483998bb7190dbe5ff5c754d04766fff6c934585d96fd211957daaac?apiKey=a927cef3079c4be4b43e485687f422e0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a307a60483998bb7190dbe5ff5c754d04766fff6c934585d96fd211957daaac?apiKey=a927cef3079c4be4b43e485687f422e0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a307a60483998bb7190dbe5ff5c754d04766fff6c934585d96fd211957daaac?apiKey=a927cef3079c4be4b43e485687f422e0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a307a60483998bb7190dbe5ff5c754d04766fff6c934585d96fd211957daaac?apiKey=a927cef3079c4be4b43e485687f422e0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a307a60483998bb7190dbe5ff5c754d04766fff6c934585d96fd211957daaac?apiKey=a927cef3079c4be4b43e485687f422e0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a307a60483998bb7190dbe5ff5c754d04766fff6c934585d96fd211957daaac?apiKey=a927cef3079c4be4b43e485687f422e0&"
                  class="cuenta-img" />
              </div>
              <div class="cuenta-divider">
                <div class="cuenta-content">
                  <div class="names">
                    nombres<br />Apellidos<br />posición
                  </div>
                  <div class="cuenta">
                    Mi Cuenta<br /><span style="font-weight: 400; font-size: 12px">editar su información </span>
                  </div>
                  <section class="centered-container"><a class="link link--arrowed" href="#">
                      <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                        viewBox="0 0 32 32">
                        <g fill="none" stroke="#2175FF" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                          <circle class="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                          <path class="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                        </g>
                      </svg></a>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <section class="teletrabajo-button-container">
            <div class="teletrabajo-wrapper">
              <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg" @click="navigatetoNext()">
                <rect class="shape" height="60" width="320" />
              </svg>
            </div>
            <div class="teletrabajo">TELETRABAJO</div>
          </section>
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
  left: 60%;
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

.options-panel {
  width: 40.8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.options-content {
  display: flex;
  flex-direction: column;
}

.cuenta-banner {
  border-radius: 0px 0px 8px 8px;
  box-shadow: 0px 10px 20px -8px rgba(0, 0, 0, 0.25);
  border: 0.5px solid var(--box-outline-light, rgba(0, 0, 0, 0.25));
  padding: 8px 8px 8px 8px;
  width: 38.75%;
  position: absolute;
  top: 0;
  cursor: pointer;
}

.line {
  border-left: .1px solid rgba(0, 0, 0, 0.25);
  margin-top: 15px;
  height: 50px;
  position: absolute;
  object-position: center;
  left: 50%;
  display: flex;
  justify-content: center;
}

.cuenta-container {
  height: max-content;
  display: flex;
}

@media (max-width: 991px) {
  .cuenta-container {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}

.img-container {
  display: flex;
  flex-direction: column;
  line-height: normal;
  margin-left: 10px;
  border-radius: 8px;
}

@media (max-width: 991px) {
  .img-container {
    width: 100%;
  }
}

.cuenta-img {
  display: flex;
  border-radius: 8px;
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 80px;
}

.cuenta-divider {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 80%;
  margin-left: 20px;
}

@media (max-width: 991px) {
  .cuenta-divider {
    width: 100%;
  }
}

.cuenta-content {
  display: flex;
  justify-content: center;
  align-self: stretch;
  color: #555555;
  margin: auto 0;
}

@media (max-width: 991px) {
  .cuenta-content {
    margin-top: 31px;
  }
}

.names {
  font: 400 14px Poppins, sans-serif;
  line-height: 1.5;
}

.cuenta {
  justify-content: center;
  margin: auto 0;
  margin-left: 210px;
  font: 500 16px Poppins, sans-serif;
  line-height: 1.5;
  cursor: pointer;
}

.link {
  cursor: pointer;
  font-weight: 400;
  text-decoration: none;
}

.link--arrowed {
  display: inline-block;
  height: 2rem;
  line-height: 2rem;

  .arrow-icon {
    position: relative;
    top: 2px;
    right: 30px;
    -webkit-transition: -webkit-transform 0.3s ease;
    transition: -webkit-transform 0.3s ease;
    transition: transform 0.3s ease;
    transition: transform 0.3s ease, -webkit-transform 0.3s ease;
    vertical-align: middle;
  }

  .arrow-icon--circle {
    transition: stroke-dashoffset .3s ease;
    stroke-dasharray: 95;
    stroke-dashoffset: 95;
  }

  &:hover {
    .arrow-icon {
      transform: translate3d(5px, 0, 0);
    }

    .arrow-icon--circle {
      stroke-dashoffset: 0;
    }
  }
}

.teletrabajo-button-container {
  margin-bottom: 200px;
}
.teletrabajo-wrapper {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  width: 320px;
  cursor: pointer;
}

.shape {
  stroke-dasharray: 140 540;
  stroke-dashoffset: -474;
  stroke-width: 8px;
  fill: transparent;
  stroke: rgb(0, 112, 224);
  border-bottom: 5px solid black;
  transition: stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s;
  box-shadow: 0px 10px 20px -8px rgba(0, 112, 224, 0.75);

}
.shape:hover {
  stroke-width: 2px;
  stroke-dashoffset: 0;
  stroke-dasharray: 760;
}

.teletrabajo {
  font: 700 24px Poppins, sans-serif;
  line-height: 32px;
  letter-spacing: 8px;
  color: #555555;
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 65px;
}
</style>