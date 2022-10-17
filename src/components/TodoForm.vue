<template>
    <div class="todo-form">
        <AddTodo @add-todo="addTodo"/>
    </div>
</template>

<script>
import AddTodo from "@/components/AddTodo.vue";
export default {
    components: {
        AddTodo
    },
    methods: {
        addTodo(todo) {
            this.$emit('add-todo', todo);
        }
    }
}
</script>

<style lang="scss">
.todo-form {
    min-height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
} 
</style>