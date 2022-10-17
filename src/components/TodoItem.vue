<template>
    <li v-bind:class="todo.completed ? 'todo todo--completed' : 'todo'">
        <input  v-if="isEdit" 
                type="text" 
                size="16" 
                class="todo__input" 
                v-model="task"
        />    
        <div    v-else
                class="todo__task">
            {{todo.task}}
        </div>                   
        <div class="todo__btns">
            <CompleteBtn    v-bind:todo="todo"
                            v-bind:isEdit="isEdit" 
                            @complete-todo="completeTodo"
            />
            <EditBtn    v-bind:todo="todo"
                        v-bind:task="task"
                        v-bind:isEdit="isEdit"
                        @toggle-edit-mode="toggleEditMode"
                        @edit-todo="editTodo"
            />
            <DeleteBtn  v-bind:todo="todo"
                        @remove-todo="removeTodo"
            />
        </div>
    </li>
</template>

<script>
import CompleteBtn from "@/components/buttons/CompleteBtn";
import EditBtn from "@/components/buttons/EditBtn";
import DeleteBtn from "@/components/buttons/DeleteBtn";

export default {
    props: ['todo'],
    data() {
        return {
            isEdit: false,
            task: this.todo.task

        }
    },
    components: {
        CompleteBtn, EditBtn, DeleteBtn
    },
    methods: {
        editTodo(taskToEdit) {
            this.$emit('edit-todo', taskToEdit);
            this.toggleEditMode();

        },
        completeTodo(todo) {
           this.$emit('complete-todo', todo);
        },
        removeTodo(id) {
           this.$emit('remove-todo', id);
        },
        toggleEditMode() {
            this.isEdit = !this.isEdit;
        }
    }
}
</script>

<style lang="scss">
.todo {
    margin: 0.5rem;
    background-color: $mainColor;
    color: $textColor;
    font-size: 1.5rem;
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
}
</style>