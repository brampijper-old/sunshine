<template>
    <div class="settings__container">
        <span v-if="this.$store.state.message" class="message">
            {{this.$store.state.message}}
        </span>
        <br>
        <br>
        <h3> Change user settings </h3>
        <h3> See how many notifications a user received </h3>
        <h3> Delete your account </h3>
    </div>
</template>

<style scoped>
span {
    color: #3EAF7C;
}

.settings__container {
    display: flex;
    width: 50vw;
    flex-flow: column;
    margin: 0 auto;
    margin-top: 150px;
}
</style>