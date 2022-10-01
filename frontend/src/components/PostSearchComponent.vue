<script setup>
import { ref } from 'vue';

const searchWord = ref()

function search(){
    if(!searchWord.value) {
        return 
    }

    console.log("Searching for: "+searchWord.value)
}
</script>

<template>
    <div class="bg-white p-2 shadow-md flex align-middle space-x-4">
        <div class="text-center">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </div>
        <div class="w-full">
            <input type="text" class="border px-2 bg-slate-200 outline-none w-4/5 active:border-primary" v-model="searchWord">
            <button class="bg-primary text-white font-bold  w-1/5" @click="search">Search</button>
        </div>
    </div>
</template>