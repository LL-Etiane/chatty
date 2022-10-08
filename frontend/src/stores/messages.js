import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMessageStore = defineStore('message',{
    state: () => {
        return {
            successMessage: "",
            errorMessage: ""
        }
    }
})