<script>
import VueClock from '@dangvanthanh/vue-clock';

export default {
  components: { VueClock }
}
</script>

<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <div class="content-container" box-sizing="boarder-box">
    <!-- <section class="row">
      <div class="col-1"></div>
      <div class="col-2"></div>
      <div class="col-3"></div> 
      <div class="col-4"></div>
      <div class="col-5"></div>
      <div class="col-6"></div>
      <div class="col-7"></div>
      <div class="col-8"></div>
      <div class="col-9"></div> 
      <div class="col-10"></div>
      <div class="col-11"></div>
      <div class="col-12"></div>
    </section> -->
    <section class="left-side">
      <div class="divider"></div>
      <aside class="tele-panel">
        <header class="panel-header">
          <h1 class="header-title">TeleTrabajo</h1>
          <img loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7d7c128b9d97cdbc97e3f753e10d62e1d1922d448a7d54a60a1e245750a1eb93?apiKey=a927cef3079c4be4b43e485687f422e0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d7c128b9d97cdbc97e3f753e10d62e1d1922d448a7d54a60a1e245750a1eb93?apiKey=a927cef3079c4be4b43e485687f422e0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d7c128b9d97cdbc97e3f753e10d62e1d1922d448a7d54a60a1e245750a1eb93?apiKey=a927cef3079c4be4b43e485687f422e0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d7c128b9d97cdbc97e3f753e10d62e1d1922d448a7d54a60a1e245750a1eb93?apiKey=a927cef3079c4be4b43e485687f422e0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d7c128b9d97cdbc97e3f753e10d62e1d1922d448a7d54a60a1e245750a1eb93?apiKey=a927cef3079c4be4b43e485687f422e0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d7c128b9d97cdbc97e3f753e10d62e1d1922d448a7d54a60a1e245750a1eb93?apiKey=a927cef3079c4be4b43e485687f422e0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d7c128b9d97cdbc97e3f753e10d62e1d1922d448a7d54a60a1e245750a1eb93?apiKey=a927cef3079c4be4b43e485687f422e0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d7c128b9d97cdbc97e3f753e10d62e1d1922d448a7d54a60a1e245750a1eb93?apiKey=a927cef3079c4be4b43e485687f422e0&"
            class="logo" />
        </header>
      </aside>
      <section class="timbre-panel">
        <aside class="right-side">
          <div class="cuenta-square">
            <div class="profile-container">
              <img loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cd4910aea0f5ac8cef2bb077477a5f60cd91b89d9ca92fa8423d8bb5d37e1ffb?apiKey=a927cef3079c4be4b43e485687f422e0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd4910aea0f5ac8cef2bb077477a5f60cd91b89d9ca92fa8423d8bb5d37e1ffb?apiKey=a927cef3079c4be4b43e485687f422e0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd4910aea0f5ac8cef2bb077477a5f60cd91b89d9ca92fa8423d8bb5d37e1ffb?apiKey=a927cef3079c4be4b43e485687f422e0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd4910aea0f5ac8cef2bb077477a5f60cd91b89d9ca92fa8423d8bb5d37e1ffb?apiKey=a927cef3079c4be4b43e485687f422e0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd4910aea0f5ac8cef2bb077477a5f60cd91b89d9ca92fa8423d8bb5d37e1ffb?apiKey=a927cef3079c4be4b43e485687f422e0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd4910aea0f5ac8cef2bb077477a5f60cd91b89d9ca92fa8423d8bb5d37e1ffb?apiKey=a927cef3079c4be4b43e485687f422e0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd4910aea0f5ac8cef2bb077477a5f60cd91b89d9ca92fa8423d8bb5d37e1ffb?apiKey=a927cef3079c4be4b43e485687f422e0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd4910aea0f5ac8cef2bb077477a5f60cd91b89d9ca92fa8423d8bb5d37e1ffb?apiKey=a927cef3079c4be4b43e485687f422e0&"
                class="profile-pic" />
              <div class="content-gap">
                <div class="name">
                  Nombres<br />Apellidos<br />Posición
                </div>
                <div class="cuenta">
                  Mi Cuenta<br /><span style="font-weight: 400; font-size: 12px">editar su información </span>
                </div>
                <section class="centered-container"><a class="link link--arrowed" href="#">
                    <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                      <g fill="none" stroke="#2175FF" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                        <circle class="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                        <path class="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                      </g>
                    </svg></a>
                </section>
                <div class="vl"></div>
              </div>
            </div>
          </div>
          <section class="buttons-section">
            <div class="horas-square">horas</div>
            <button class="timbre-square">Comenzar</button>
            <button class="timbre-square">Almorzar</button>
            <button class="timbre-square">Regresar</button>
            <button class="timbre-square">Terminar</button>
          </section>
          <!-- <section class="table-column">
            <div class="table-container">
              <div class="header-divider">
                <div class="table-header">Sus Horas de trabajo</div>
                <div class="table-search-box">
                  <div class="table-search-text">
                  </div>
                  <img loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c631ced79bf9329aaaa42083f4977373afbf56cfd52dfdbb3719187f76a62868?apiKey=a927cef3079c4be4b43e485687f422e0&"
                    class="search" />
                  <div class="buscar">Buscar</div>
                </div>
              </div>
              <div class="table-banner">
                <div class="labels-container">
                  <div class="fecha">Fecha</div>
                  <div class="Emp">Empiezar<br /></div>
                  <div class="Alm">Almorzar</div>
                  <div class="Rev">Revolver</div>
                  <div class="Term">Terminar</div>
                  <div class="Total">Total</div>
                </div>
              </div>
              <div class="table">
              </div>
            </div>
          </section> -->
        </aside>
      </section>
    </section>
  </div>
</template>
 
<style scoped>
/* {
  box-sizing: border-box;
}
.row {
  float: left;
  padding: 15px;
  border: 1px solid red;
}
.row::after {
  content: "";
  clear: both;
  display: table;
}
.col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
.col-3 {width: 25%;}
.col-4 {width: 33.33%;}
.col-5 {width: 41.66%;}
.col-6 {width: 50%;}
.col-7 {width: 58.33%;}
.col-8 {width: 66.66%;}
.col-9 {width: 75%;}
.col-10 {width: 83.33%;}
.col-11 {width: 91.66%;}
.col-12 {width: 100%;}*/
html, body {
  margin: 0;
  padding: 0;
}
.left-side {
  display: flex;
  height: 100vh;
}
@media (min-width: 600px) {
  .left-side {
    flex-direction: row;
  }
}
.tele-panel {
  display: flex;
  flex-direction: column;
  width: 44%;
}
.panel-header {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header-title {
  font-family: Poppins, sans-serif;
  font-size: 68px;
  color: #555555;
  font-weight: 400;
  text-align: center;
}
.logo {
  aspect-ratio: 1.85;
  margin-right: 350px;
  width: 200px;
  position: fixed;
  bottom: 0;
}
.timbre-panel {
  width: 72%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.right-side {
  height: 100%;
  background-color: #fff;
}
.divider {
  border-left: .1px solid rgba(0, 0, 0, 0.25);
  height: 100%;
  position: absolute;
  left: 38%;
  top: 0;
  bottom: 0;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);
}
.cuenta-square {
  border-radius: 8px;
  box-shadow: 0px 10px 20px -8px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 620px;
  height: 75px;
  flex-grow: 1;
  border: 0.5px solid var(--box-outline-light, rgba(0, 0, 0, 0.25));
  padding: 8px 0 8px 0;
  right: 0px;
  margin-top: 15px;
  margin-right: 8px;
  cursor: pointer;
  position: absolute;
}
.profile-container {
  display: flex;
  justify-content: center;
}
.profile-pic {
  aspect-ratio: 1;
  scale: .39;
  border-radius: 8px;
  margin-left: -40px;
}
.content-gap {
  display: flex;
  margin: auto 0;
  gap: 25px;
}
.name {
  justify-content: center;
  font: 400 14px Poppins, sans-serif;
  margin-left: -25px;
  line-height: 1.5;
  color: #555555;
}
.cuenta {
  justify-content: center;
  margin: auto 0;
  font: 500 16px Poppins, sans-serif;
  margin-left: 260px;
  line-height: 1.5;
  cursor: pointer;
  color: #555555;
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
    right: 50px;
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
.vl {
  border-left: .1px solid rgba(0, 0, 0, 0.25);
  height: 50%;
  position: absolute;
  left: 50%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
.buttons-section {
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  width: 20%;
}
.horas-square {
  border-radius: 8px;
  border: 0.5px solid var(--box-outline-light, rgba(0, 0, 0, 0.25));
  box-shadow: 0px 10px 20px -8px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  display: flex;
  font-family: Poppins, sans-serif;
  justify-content: center;
  color: #555555;
  padding: 36.5px;
  margin-top: 15px;
  margin-bottom: 50px;
}
.timbre-square {
  border-radius: 8px;
  border: 0.5px solid var(--box-outline-light, rgba(0, 0, 0, 0.25));
  box-shadow: 0px 18px 42px -12px rgba(0, 112, 224, 0.35);
  background-color: rgb(0, 112, 224);
  cursor: pointer;
  font-family: Poppins, sans-serif;
  display: flex;
  justify-content: center;
  padding: 18px;
  color: #fff;
  margin-bottom: 50px;
}
/*.table-column {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 645px;
  margin-left: 15px;
}.table-container {
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  border: 0.5px solid var(--box-outline-light, rgba(0, 0, 0, 0.25));
  display: flex;
  flex-direction: column;
  margin-top: 115px;
  background-color: #fff;
}.header-divider {
  align-self: center;
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  gap: 300px;
}.table-header {
  color: #000;
  display: flex;
  justify-content: center;
  flex-grow: 1;
  font: 600 14px Poppins, sans-serif;
  margin-top: 15px;
}.table-search-box {
  border-radius: 8px;
  border: 0.5px solid var(--box-outline-light, rgba(0, 0, 0, 0.25));
  width: 150px;
  height: 20px;
  margin-top: 10px;
}.table-search-text {
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  color: var(--ex-text, rgba(0, 0, 0, 0.5));
  font-weight: 400;
  width: 40px;
  position: relative;
}.search {
  aspect-ratio: 0.90;
  object-fit: auto;
  object-position: center;
  width: 10px;
  stroke-width: 2px;
  stroke: #bdbdbd;
  position: fixed;
  margin-top: 5px;
  margin-left: 5px;
}.buscar {
  font: 400 12px Poppins, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  margin-top: 5px;
  margin-left: 20px;
}.table-banner {
  border-radius: 8px 8px 0px 0px;
  border: 0.5px solid var(--box-outline-light, rgba(0, 0, 0, 0.25));
  box-shadow: 0px 0.5px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: var(--light-clock, #f3f3f3);
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  padding: 9px 6px 9px 16px;
}.labels-container {
  display: flex;
  justify-content: center;
  gap: 50px;
}.fecha {
  font-family: Poppins, sans-serif;
  line-height: 167%;
  flex-grow: 1;
  margin: auto 0;
}.Emp {
  font-family: Poppins, sans-serif;
  line-height: 167%;
  flex-grow: 1;
  margin: auto 0;
}.Alm {
  font-family: Poppins, sans-serif;
  line-height: 167%;
  flex-grow: 1;
  margin: auto 0;
}.Rev {
  font-family: Poppins, sans-serif;
  line-height: 167%;
  flex-grow: 1;
  margin: auto 0;
}.Term {
  font-family: Poppins, sans-serif;
  line-height: 167%;
  flex-grow: 1;
  margin: auto 0;
}.Total {
  font-family: Poppins, sans-serif;
  line-height: 167%;
  flex-grow: 1;
  margin: auto 0;
}.table {
  display: flex;
  margin-top: 10px;
  flex-direction: column;
}*/
</style>