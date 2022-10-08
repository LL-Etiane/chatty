<script setup>
import { useMessageStore } from '../stores/messages'
const messageStore = useMessageStore()
</script>

<template>
    <div class="my-2 bg-white p-2 text-center">
        <div class="border border-green-500 p-2 text-green-500" v-if="messageStore.successMessage">
            {{ messageStore.successMessage }}
        </div>

        <div class="border border-red-500 p-2 text-red-500" v-if="messageStore.errorMessage">
            {{ messageStore.errorMessage }}
        </div>
    </div>
</template>