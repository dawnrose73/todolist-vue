<template>
    <div class="todo-form">
        <AddTodo />
        <FilterTodo />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import AddTodo from "@/components/AddTodo.vue";
import FilterTodo from "@/components/FilterTodo.vue";

export default Vue.extend({
    components: {
        AddTodo,
        FilterTodo
    }
});
</script>

<style lang="scss">
.todo-form {
    min-height: 20vh;
    width: 60%;
    margin: 0 auto;
    @include flexCenter();
    justify-content: space-between;
}
</style>
