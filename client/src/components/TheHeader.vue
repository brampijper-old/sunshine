<template>
    <div class="header">
        <span class="header__title" @click="navigateTo('root')">
            Sunshine 
        </span>
        <span class="header__login" @click="navigateTo('login')">
            Log in
        </span>
        <PrimaryButton @clicked="navigateTo('register')" class="header__button" buttonSize="small">
            Sign up
        </PrimaryButton>
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
        navigateTo(route) {
            this.$router.push(route)
            .catch(err => { return err})
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
    margin-right: 25px;
}

.header__button a {
    color:white;
    text-decoration: none;
}

.header__title {
    margin-right: auto;
    margin-left: 25px;
    font-size: 25px;
}

.header__login {
    margin-left: auto;
    color: rgb(44, 54, 161);
    font-weight:700;
    font-size: 18px;
    padding-right: 25px;
}

.header__title:hover, .header__login:hover {
    cursor: pointer;
}
</style>