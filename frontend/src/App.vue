<script setup>
import { RouterView } from 'vue-router'
import NavBarComponent from './components/NavBarComponent.vue'
</script>

<template>
  <div class="bg-secondary h-screen">
    <header class="bg-white">
      <NavBarComponent />
    </header>

  <div class="container mx-auto">
    <RouterView />
  </div>
  </div>
</template>

