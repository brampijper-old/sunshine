<template>
    <div class="header">
        <span class="header__title" @click="navigateTo('home')">
            Sunshine 
        </span>

        <div v-if="!this.$store.state.isUserLoggedIn">
            <span  class="header__login" @click="navigateTo('login')">
                Log in
            </span>
            <PrimaryButton
                @clicked="navigateTo('register')" 
                class="header__button"
                buttonSize="small"
            >
                Sign up
            </PrimaryButton>
        </div>
        <div v-else>
            <span class="header__settings" @click="navigateTo('settings')">
                Settings 
            </span>
            <PrimaryButton
                @clicked="logout" 
                class="header__button"
                buttonSize="small"
            >
                Log Out
            </PrimaryButton>
        </div>
    </div>
</template>

<script>
import PrimaryButton from './PrimaryButton.vue';
import {navigateToMixin} from '../mixins/navigateToMixin.js';
export default {
    mixins: [navigateToMixin],
    components: {
        PrimaryButton
    },
    methods: {
        logout() { 
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
            this.$router.push({
                name: 'home'
            })
        }
    }
}
</script>

<style scoped>
.header {
    height: 83px;
    display:flex;
    justify-content: flex-end;
    align-items: center;
}

.header__button {
    justify-self: flex-end;
    margin-right: 5vw;
}

.header__button a {
    color:white;
    text-decoration: none;
}

.header__title {
    margin-right: auto;
    margin-left: 5vw;
    font-size: 25px;
}

.header__login {
    margin-left: auto;
    color: rgb(44, 54, 161);
    font-weight:700;
    font-size: 18px;
    padding-right: 25px;
}

.header__settings {
    color: rgb(44, 54, 161);
    font-weight:700;
    font-size: 18px;
    position: absolute;
    padding-top:10px;
    left: 50%;
    transform: translate(-50%, 0)
}

.header__settings:hover {
    border-bottom: 2px solid rgb(44, 54, 161);
}

.header__title:hover, .header__login:hover, .header__settings:hover {
    cursor: pointer;
}
</style>