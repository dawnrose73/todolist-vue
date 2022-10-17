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

<script>
export default {
    props: ['todo', 'task', 'isEdit'],
    methods: {
        edit(task, id) {
            if (this.isEdit) {
                const taskToEdit = {task, id};
                this.$emit('edit-todo', taskToEdit);
            } else {
                this.$emit('toggle-edit-mode');
            }
        }
    }
}
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