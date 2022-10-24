<template>
    <header class="header">
        <h1 class="header__text">Todolist</h1>
    </header>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss">
.header {
    font-size: 1.5rem;
    min-height: 20vh;
    @include flexCenter();
}
</style>
