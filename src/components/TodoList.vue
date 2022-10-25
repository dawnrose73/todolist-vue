<template>
    <div class="todolist">
        <ul class="todolist__items">
            <TodoItem
                v-for="todo of todos"
                :key="todo.id"
                :todo="todo"
            />
        </ul>
    </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import TodoItem from "@/components/TodoItem.vue";
import { Todo } from "@/types/todo";

export default Vue.extend({
    components: {
        TodoItem
    },
    props: {
        todos: {
            type: Array as PropType<Todo[]>,
            required: true
        }
    }
});
</script>

<style lang="scss">
.todolist {
    @include flexCenter();
    width: 60%;
    margin: 0 auto;
    &__items {
        min-width: 100%;
    }
}
</style>
