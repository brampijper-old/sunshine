<template>
<div class="main__container">
    <article class="container__intro">
      <h1 class="intro__title"> Receive free <br> sun alerts </h1>
      <h3 class="intro__subtitle">
        Recieve notifictions when the sun is shining on a clear sky day. <br>
        Take a short break to the outside world and <br>
        get that vitamine D to boost your immune system. 
      </h3> 
    </article>
    <PrimaryButton @clicked="navigateTo('register')" buttonSize="small">
        Sign up
    </PrimaryButton>
    <div class="container__image" />
</div>
</template>

<script>
import PrimaryButton from './PrimaryButton.vue';
import {navigateToMixin} from '../mixins/navigateToMixin.js';
export default {
    mixins: [navigateToMixin],
    components: {
        PrimaryButton
    }
}

</script>

<style scoped>

.main__container {
    display:flex;
    justify-content: space-evenly;
    flex-direction:column;
    text-align:left;
    margin: 0px 5vw 0px 5vw;
}

.container__image {
    z-index:1;
    background-image: url('../assets/sun.svg');
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size:contain;
    width:50vw;
    height: 50vh;
    position:absolute;
    right:10vw ;
}

.container__intro {
    z-index:2;
}

.intro__title {
    font-size: 5.55556em;
    margin-bottom: 50px;
}

.intro__subtitle {
    margin: 0 0 50px 0px;
}
</style>