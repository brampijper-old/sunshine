<template>
    <div class="form__container">
        <h1> Welcome, to the register page! </h1>

        <input 
            type="text"
            name="email"
            v-model="email"
            placeholder="email" />
        <input
            type="password"
            name="password"
            v-model="password"
            placeholder="password" />
        <button
            @click="register">
            Register
        </button>
    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async register() {
            await AuthenticationService.register({
                email: this.email,
                password: this.password
            })
            console.log(response.data)
        }
    }
}
</script>

<style scoped>
.form__container input {
}
</style>