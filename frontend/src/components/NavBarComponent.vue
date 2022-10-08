<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav class="container mx-auto shadow-md p-2 flex justify-between">
        <RouterLink to="/" class="font-bold">
          <font-awesome-icon icon="fa-solid fa-house" />
          chatty
        </RouterLink>
        <div class="flex space-x-4">
          <RouterLink to="/">
            About
          </RouterLink>
          <RouterLink to="/login">
            <font-awesome-icon icon="fa-solid fa-user" />
            Account
          </RouterLink>
        </div>
      </nav>
</template>