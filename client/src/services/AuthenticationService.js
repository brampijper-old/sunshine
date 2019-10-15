import Api from '@/services/Api';

export default {
    register (credentials) {
        return Api().post('register', credentials)
    } 
}

// WebAuthenticationService.register({
//     email: 'testing@gmail.com',
//     password: '12344'
// })