<script setup>
import { RouterView } from 'vue-router'
import NavBarComponent from './components/NavBarComponent.vue'
import AlertMessageComponent from './components/AlertMessageComponent.vue'
import { useMessageStore } from './stores/messages'
const messageStore = useMessageStore()
</script>

<template>
  <div class="bg-secondary h-screen">
    <header class="bg-white">
      <NavBarComponent />
    </header>

  <div class="container mx-auto">
    <AlertMessageComponent v-if="messageStore.successMessage || messageStore.errorMessage" class="mx-auto w-2/5"/>
    <RouterView />
  </div>
  </div>
</template>

