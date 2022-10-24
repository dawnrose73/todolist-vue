<template>
    <li :class="todo.completed ? 'todo todo--completed' : 'todo'">
        <input
            v-if="isEdit"
            v-model="task"
            type="text"
            size="16"
            class="todo__input"
        />
        <div
            v-else
            class="todo__task"
        >
            {{ todo.task }}
        </div>
        <div class="todo__btns">
            <CompleteBtn
                :todo="todo"
                :is-edit="isEdit"
                @complete-todo="completeTodo"
            />
            <EditBtn
                :todo="todo"
                :task="task"
                :is-edit="isEdit"
                @toggle-edit-mode="toggleEditMode"
                @edit-todo="editTodo"
            />
            <DeleteBtn
                :todo="todo"
                @remove-todo="removeTodo"
            />
        </div>
    </li>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import CompleteBtn from "@/components/buttons/CompleteBtn.vue";
import EditBtn from "@/components/buttons/EditBtn.vue";
import DeleteBtn from "@/components/buttons/DeleteBtn.vue";
import { Todo } from "@/types/todo";
import { TodoEditData } from "@/types/todoEditData";

export default Vue.extend({
    components: {
        CompleteBtn,
        EditBtn,
        DeleteBtn
    },
    props: {
        todo: {
            type: Object as PropType<Todo>,
            required: true
        }
    },
    data() {
        return {
            isEdit: false,
            task: this.todo.task
        };
    },
    methods: {
        editTodo(taskToEdit: TodoEditData) {
            this.$emit("edit-todo", taskToEdit);
            this.toggleEditMode();
        },
        completeTodo(todo: Todo) {
            this.$emit("complete-todo", todo);
        },
        removeTodo(id: number) {
            this.$emit("remove-todo", id);
        },
        toggleEditMode() {
            this.isEdit = !this.isEdit;
        }
    }
});
</script>

<style lang="scss">
.todo {
    margin-bottom: 0.5rem;
    background-color: $mainColor;
    color: $textColor;
    font-size: 1.5rem;
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.5s ease;
    &__task {
        padding: 0 0.5rem;
        margin: 0 0.5rem;
        flex: 1;
    }
    &__input {
        outline: 1px solid $deleteColor;
        background: $mainColor;
        font-family: "Poppins", sans-serif;
        font-size: 1.5rem;
        margin: 0 0.5rem;
        padding: 0 0.5rem;
        max-width: 100%;
        flex: 1;
    }
    &--completed {
        text-decoration: line-through;
        opacity: 0.5;
    }
    &__btns {
        height: 100%;
        display: flex;
    }
}
</style>
