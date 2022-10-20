<template>
    <button class="complete-btn" 
            v-bind:disabled="isEdit" 
            @click="$emit('complete-todo', todo)"
    >
        <i v-bind:class="todo.completed ? 'fas fa-undo' : 'fas fa-check'"></i>
    </button>
</template>

<script lang="ts">
import { Todo } from "@/types/todo";
import Vue, { PropType } from "vue";

export default Vue.extend({
    props: {
        todo: Object as PropType<Todo>,
        isEdit: Boolean as PropType<boolean>
    }
})
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