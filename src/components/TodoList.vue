<template>
    <div class="todolist">
        <ul class="todolist__items">
            <TodoItem 
                v-for="todo of todos" 
                v-bind:todo="todo"
                :key="todo.id"
                @complete-todo="completeTodo"
                @remove-todo="removeTodo"
                @edit-todo="editTodo"
            />
        </ul>
    </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";

export default {
    props: ['todos'],
    components: {
        TodoItem
    },
    methods: {
        completeTodo(todo) {
           this.$emit('complete-todo', todo);
        },
        removeTodo(id) {
           this.$emit('remove-todo', id);
        },
        editTodo(taskToEdit) {
            this.$emit('edit-todo', taskToEdit);
        },
    }
}
</script>

<style lang="scss">
.todolist {
    display: flex;
    justify-content: center;
    align-items: center;
    &__items {
        min-width: 40%;
    }
}
</style>