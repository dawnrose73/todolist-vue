<template>
    <button class="complete-btn" 
            v-bind:disabled="isEdit ? true : false" 
            @click="$emit('complete-todo', todo)"
    >
        <i v-bind:class="todo.completed ? 'fas fa-undo' : 'fas fa-check'"></i>
    </button>
</template>

<script>
export default {
    props: ['todo' ,'isEdit']
}
</script>

<style lang="scss">
.complete-btn {
    @include baseBtnStyles;
    background: $completeColor;
    &:hover {
        background: $mainColor;
        color: $completeColor;
        }
    &:disabled:hover {
        background: $completeColor;
        color: $mainColor;
    }
}
</style>