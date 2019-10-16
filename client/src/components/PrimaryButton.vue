<template>
    <button @click="onClick" :class="'Button ' + buttonSize">
        <slot>Button</slot>
    </button>
</template>

<script>
export default {
    props: {
        buttonSize: String,
        onClick: {
            type: Function,
            required: true
        }
    }
}
</script>

<style scoped>

.big {
    width:100%;
    height: 48px;
}

.small {
    width: 130px;
    height: 43px;
}

.Button {
    border-radius: 13px;
    border: 0px;
    padding: 0px;
    color: white; 
    background: linear-gradient(90deg, rgb(44, 54, 161) 50%, #0B1033 105%);
    transition: all .3s ease-out;
}

.Button:hover {
    transform: scale(1.03);
    cursor: pointer;
    will-change: auto;
}
</style>