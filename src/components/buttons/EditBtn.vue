<template>
    <button class="edit-btn" 
            v-bind:disabled="todo.completed" 
            @click="(e) => edit(task, todo.id)"
    >
        <i  v-if="isEdit"
            class="fas fa-save"
        ></i>
        <i  v-else
            class="fas fa-edit"
        ></i>
    </button>
</template>

<script lang="ts">
import { Todo } from "@/types/todo";
import { TodoEditData } from "@/types/todoEditData";
import Vue, { PropType } from "vue";

export default Vue.extend({
    props: {
        todo: Object as PropType<Todo>, 
        task: String as PropType<string>, 
        isEdit: Boolean as PropType<boolean>
    },
    methods: {
        edit(task: string, id: number) {
            if (this.isEdit) {
                const taskToEdit = {task, id} as TodoEditData;
                this.$emit('edit-todo', taskToEdit);
            } else {
                this.$emit('toggle-edit-mode');
            }
        }
    }
})
</script>

<style lang="scss">
.edit-btn {
    @include baseBtnStyles;
    background: $editColor;
    &:hover {
        background: $mainColor;
        color: $editColor;
    }
    &:disabled:hover {
        background: $editColor;
        color: $mainColor;
    }
}
</style>