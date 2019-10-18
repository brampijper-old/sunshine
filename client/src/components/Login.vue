<template>
    <div class="landing__container">
        <div class="container__left">
            <h1 class="left__title"> Login </h1>

            <label for="email">Email adress</label>
            <input 
                type="text"
                name="email"
                v-model="email"
                placeholder="Enter email adress" />

            <label for="password"> Password</label>
            <input
                type="password"
                name="password"
                v-model="password"
                placeholder="Password" />
            
            <div class="error" v-html="error" />

            <primary-button @clicked="login" buttonSize="big">
                Login
            </primary-button>

            <div class="left__login-link">
                Don't have an account yet?
                <span @click="navigateTo('register')"> Sign Up </span>
            </div>
        </div>
        <div class="container__right">
            <!-- <article class="right__intro">
                Sunshine is a webapplication build for people that need more sunshine in their life.
                Vitamine D is essential to live a healthy life, especially during the dark months.
                <br> <br>
                Sign up to receive notifications when the sun is shining on a clear sky day
                and enjoy going outside for 10 minutes to boost your immune system.
            </article> -->
        </div>
    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
import PrimaryButton from './PrimaryButton.vue';
import { navigateToMixin } from '../mixins/navigateToMixin.js'
export default {
    mixins: [navigateToMixin],
    components: {
        PrimaryButton
    },
    data() {
        return {
            email: '',
            password: '',
            error: null
        }
    },
    methods: {
        async login() {
            try {
                const response = await AuthenticationService.login({
                    email: this.email,
                    password: this.password
                })
                this.$store.dispatch('setToken', response.data.token)
                this.$store.dispatch('setUser', response.data.user)
                this.$store.dispatch('setMessage', response.data.message)
                this.$router.push({
                    name: 'settings'
                })
            } catch (error) {
                this.error = error.response.data.error
            }
        }
    }
}
</script>

<style scoped>
.landing__container {
    display:grid;
    grid-template-columns: 1fr 1fr;
    height:100vh;
}

.container__left {
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 30vw;
    max-width: 410px;
    margin: 0 auto;
}

.container__left input {
    width:100%;
    font-size: 17px;
    border-radius: 13px;
    border: 1px solid #E5EAEC;
    line-height: 26px;
    padding: 10px 0 10px 0;
    padding-left:5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.4);
    margin: 5px 0 35px 0;
}

.container__left label {
    font-size:14px;
    padding-left:5px;
    opacity:0.8;
}

.container__left button, .error {
    margin: 10px 0px 25px 0px;   
}

.left__title {
    font-size: 56px;
    line-height: 68px;
    font-weight: 700;
    margin: 0px 0px 41px 0px;
}

.left__login-link {
    margin-top:25px;
}

.left__login-link span {
    cursor: pointer;
    color: rgb(44, 54, 161);
    font-weight:700;
}

.container__right {
    background-color: #0B1033;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align:left;
}

.error {
    color:red;
}
</style>