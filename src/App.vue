<script setup>
import { RouterView } from "vue-router"
import LandingPage from "./views/LandingPage.vue"


</script>

<template>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  max-width: 1000;
  margin: 0 auto;
}
</style>
