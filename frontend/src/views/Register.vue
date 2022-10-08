<script setup>
import axios from "axios";
import { reactive } from "vue"
import { useMessageStore } from "../stores/messages"
const form = reactive({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
})

const messageStore = useMessageStore()

async function registerUser(){
    messageStore.$reset()
    if(form.password != form.passwordConfirm){
        messageStore.errorMessage = "Passwords not matched"
        return 
    }

    try {
        let user = await axios.post("/register",form)
        console.log(user)
        messageStore.successMessage = "Account created successfully"
    } catch (error) {
        messageStore.errorMessage = "There was an error creating account"
        console.log(error)
    }
}
</script>

<template>
    <main class="h-screen grid place-items-center">
        <div class="bg-white py-2 px-4 rounded-sm shadow-md">
            <h1 class="my-2">Create an account</h1>
            <form @submit.prevent="registerUser">
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" name="username" id="username" v-model="form.username" class="w-full" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" v-model="form.email" class="form-input w-full" required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" v-model="form.password" class="w-full" required>
                </div>
                <div class="form-group">
                    <label for="passwordConfirm">Confirm your password</label>
                    <input type="password" name="passwordConfirm" id="passwordConfirm" v-model="form.passwordConfirm" class="w-full" required>
                </div>
                <input type="submit" value="Register" class="bg-primary p-2 my-2 rounded-sm text-white font-bold">
                <p>Already have an account? <RouterLink to="/login" class="text-primary">Login</RouterLink></p>
            </form>
        </div>
    </main>
</template>