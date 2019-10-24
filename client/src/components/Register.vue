<template>
    <div class="landing__container">
        <div class="container__left">
            <h1 class="left__title"> Sign Up </h1>

            <form name="sunshine-register-form">
                <label for="email">Email adress</label>
                <input 
                    type="text"
                    name="email"
                    autocomplete="email"
                    v-model="email"
                    placeholder="Enter email adress" />

                <label for="password">Create password</label>
                <input
                    type="password"
                    name="password"
                    v-model="password"
                    autocomplete="new-password"
                    placeholder="Password" />

                <label for="location">City</label>
                <input
                    id="location__input"
                    name="location"
                    v-model="adress.city"
                    @input="debounceApiCall()"
                    placeholder="City where you live / work"
                    autocomplete="adress-level2" />
                <ul class="suggestion__container">
                    <a
                        @click="adress = loc, adressAutocomplete=[]"
                        href="#"
                        v-for="(loc, index) in adressAutocomplete"
                        :key="index">
                        <li>
                            {{loc.city}}
                        </li>
                    </a>
                </ul>
            </form>
            
            <div class="error" v-html="error" />

            <primary-button @clicked="register" buttonSize="big">
                Register
            </primary-button>

            <div class="left__login-link">
                Already have an account?
                <span @click="navigateTo('login')"> Log in </span>
            </div>
        </div>
        <div class="container__right">
            <article class="right__intro">
                Sunshine is a webapplication build for people that need more sunshine in their life.
                Vitamine D is essential to live a healthy life, especially during the dark months.
                <br> <br>
                Sign up to receive notifications when the sun is shining on a clear sky day
                and enjoy going outside for 10 minutes to boost your immune system.
            </article>
        </div>
    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
import PrimaryButton from './PrimaryButton.vue';
import { navigateToMixin } from '../mixins/navigateToMixin.js';
import { MakeHTTPRequest } from '../mixins/MakeHTTPRequest.js';

export default {
    mixins: [navigateToMixin],
    components: {
        PrimaryButton
    },
    data() {
        return {
            email: '',
            password: '',
            adress: [{city: null, lat: null, lng: null}],
            adressAutocomplete: [],
            error: null,
            timer: null
        }
    },
    methods: {
        async register() {
            try {
                const response = await AuthenticationService.register({
                    email: this.email,
                    password: this.password,
                    adress: this.adress
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
        }, 
        debounceApiCall() {
            clearTimeout(this.timer);
            this.timer = setTimeout(this.displayAdress, 650)
        },
        displayAdress () {
            const that = this;
            const client = new MakeHTTPRequest();
            const url=`https://photon.komoot.de/api/?q=${this.adress.city}&limit=3`;
            
            client.get(url, function(response) {
                that.adressAutocomplete.length = 0;
                response.features.map(result => {
                    const entry = result.properties;
                    
                    //for displaying the place / city
                    const cityName = entry.city ? entry.city : entry.name
                    const locationItem = [cityName, entry.country, entry.state].join(',')
                    
                    that.adressAutocomplete.push({
                        city: locationItem,
                        lat: result.geometry.coordinates[0],
                        lng: result.geometry.coordinates[1]
                    });
                })
            })
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

.right__intro {
    width: 30vw;
    max-width: 410px;
    margin: 0 auto;
    font-size: 24px;
    line-height: 36px;
    color: #FFFFFF;
}

.error {
    color:red;
}

#location__input {
    margin-bottom: 0px;
}

.suggestion__container {
    list-style: none;
    width:100%;
    margin: 0;
    padding: 0;
    padding-left:3px;
    text-align:left;
}

.suggestion__container a {
    color:grey;
    text-decoration: none;
}

.suggestion__container a:hover {
    color:rgb(44, 54, 161);
    transition: .3s;
}

.suggestion__container a li {
    font-size:14px;
    padding: 10px 0 10px 4px;
    border-radius: 1px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.4);
}
</style>