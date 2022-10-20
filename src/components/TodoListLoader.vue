<template>
    <div class="loader">
        <div class="loader__item"></div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({})
</script>

<style lang="scss">
.loader {
    display: flex; 
    justify-content: center; 
    margin: .5rem;
    &__item {
        display: inline-block;
        width: 80px;
        height: 80px;
    }
    &__item:after {
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: loader-ring 1.2s linear infinite;
    }
    @keyframes loader-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
}
</style>