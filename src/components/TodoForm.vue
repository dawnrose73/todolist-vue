<template>
    <div class="todo-form">
        <AddTodo @add-todo="addTodo"/>
        <FilterTodo @set-filter="setFilter"/>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import AddTodo from "@/components/AddTodo.vue";
import FilterTodo from "@/components/FilterTodo.vue";

export default Vue.extend({
    components: {
        AddTodo, FilterTodo
    },
    methods: {
        addTodo(todo: string) {
            this.$emit('add-todo', todo);
        },
        setFilter(filter: string) {
            this.$emit('set-filter', filter);
        }
    }
})
</script>

<style lang="scss">
.todo-form {
    min-height: 20vh;
    @include flexCenter();
} 
</style>