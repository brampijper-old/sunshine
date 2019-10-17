import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
        token: null,
        user: null,
        isUserLoggedIn: false,
        message: null
    },
    mutations: {
        setToken (state, token) {
            state.token = token
            if (token) {
                state.isUserLoggedIn = true
            } else {
                state.isUserLoggedIn = false;
                state.message = 'Succesfully logged-out!';
            }
        },
        setUser (state, user) {
            state.user = user
        },
        setMessage (state, message) {
            state.message = message;
        }
    },
    actions: {
        setToken ({commit}, token) {
            commit('setToken', token)
        },
        setUser ({commit}, user) {
            commit('setUser', user) 
        },
        setMessage ({commit}, message) {
            commit('setMessage', message)
        }
    }
})