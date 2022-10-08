<script setup>
</script>

<template>
    <main class="h-screen grid place-items-center">
        <div class="bg-white py-2 px-4 rounded-sm shadow-md">
            <h1 class="my-2">Create an account</h1>
            <form action="">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" class="form-input w-full">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" class="w-full">
                </div>
                <div class="form-group">
                    <label for="passwordConfirm">Confirm your password</label>
                    <input type="password" name="passwordConfirm" id="passwordConfirm" class="w-full">
                </div>
                <input type="submit" value="Register" class="bg-primary p-2 my-2 rounded-sm text-white font-bold">
            </form>
        </div>
    </main>
</template>