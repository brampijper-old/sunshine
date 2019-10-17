export const navigateToMixin = {
    methods: {
        navigateTo(route) {
            this.$router.push(route)
            .catch(err => { return err})
        }
    }
}