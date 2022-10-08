<script setup>
</script>

<template>
    <main class="h-screen grid place-items-center">
        <div class="bg-white py-2 px-4 rounded-sm shadow-md">
            <h1 class="my-2">Login page</h1>
            <form action="">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" class="form-input w-full">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" class="w-full">
                </div>
                <input type="submit" value="Login" class="bg-primary p-2 my-2 rounded-sm text-white font-bold">
                <p>Don't yet have an account? <RouterLink to="/register" class="text-primary">Create one</RouterLink></p>
            </form>
        </div>
    </main>
</template>