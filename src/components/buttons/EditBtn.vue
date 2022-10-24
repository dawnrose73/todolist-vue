<template>
    <button class="edit-btn" 
            v-bind:disabled="todo.completed" 
            @click="(e) => edit(task, todo.id)"
    >
        <SaveIcon v-if="isEdit" />
        <EditIcon v-else />
    </button>
</template>

<script lang="ts">
import { Todo } from "@/types/todo";
import { TodoEditData } from "@/types/todoEditData";
import Vue, { PropType } from "vue";
import SaveIcon from "@/components/icons/SaveIcon.vue";
import EditIcon from "@/components/icons/EditIcon.vue";

export default Vue.extend({
    props: {
        todo: Object as PropType<Todo>,
        task: String as PropType<string>,
        isEdit: Boolean as PropType<boolean>
    },
    methods: {
        edit(task: string, id: number) {
            if (this.isEdit) {
                const taskToEdit = { task, id } as TodoEditData;
                this.$emit("edit-todo", taskToEdit);
            }
            else {
                this.$emit("toggle-edit-mode");
            }
        }
    },
    components: { SaveIcon, EditIcon }
})
</script>

<style lang="scss">
.edit-btn {
    @include baseBtnStyles($mainColor, $editColor);
}
</style>