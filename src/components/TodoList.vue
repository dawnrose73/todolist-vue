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

<script lang="ts">
import Vue, { PropType } from "vue";
import TodoItem from "@/components/TodoItem.vue";
import { Todo } from "@/types/todo";
import { TodoEditData } from "@/types/todoEditData";

export default Vue.extend({
    props: {
        todos: Array as PropType<Todo[]>
    },
    components: {
        TodoItem
    },
    methods: {
        completeTodo(todo: Todo) {
           this.$emit('complete-todo', todo);
        },
        removeTodo(id: number) {
           this.$emit('remove-todo', id);
        },
        editTodo(taskToEdit: TodoEditData) {
            this.$emit('edit-todo', taskToEdit);
        },
    }
})
</script>

<style lang="scss">
.todolist {
    @include flexCenter();
    &__items {
        min-width: 40%;
    }
}
</style>