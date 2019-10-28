<template>
    <div class="header__loginPopup">
        <label for="email">Email adress</label>
        <input 
            type="text"
            name="email"
            v-model="email"
            placeholder="Enter email adress" />

        <label for="password"> Password</label>
        <input
            id="psw-input"
            type="password"
            name="password"
            v-model="password"
            placeholder="Password" />
        
        <div class="error" v-html="error" />

        <primary-button @clicked="login" buttonSize="big">
            Login
        </primary-button>
    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
import PrimaryButton from './PrimaryButton.vue';
export default {
    components: {
        PrimaryButton,
    },
    data() {
        return {
            password: null,
            email: null,
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
                this.$parent.toggleModal();
                this.error = null;
            } catch (error) {
                this.error = error.response.data.error
            }
        },
    }
}
</script>

<style lang="css" scoped>
.header__loginPopup {
    position: absolute;
    margin-left: -100px;
    width: 200px;
    top: 75px;
    z-index: 5;
    background-color: whitesmoke;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
}

.header__loginPopup input {
    width:100%;
    font-size: 16px;
    border-radius: 13px;
    border: 1px solid #E5EAEC;
    line-height: 26px;
    padding: 10px 0 10px 0;
    padding-left:5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.4);
    margin: 5px 0 25px 0;
}

.header__loginPopup label {
    font-size:14px;
    padding-left:5px;
    opacity:0.8;
    float:left;
}

#psw-input {
    margin-bottom: 0px !important;
}

.header__loginPopup button, .error {
    margin: 25px 0px 0px 0px;   
}

.error {
    color:red;
}
</style>