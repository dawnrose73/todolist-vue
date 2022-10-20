<template>
    <button class="delete-btn" 
            @click="$emit('remove-todo', todo.id)"
    >        
        <i class="fas fa-trash"></i>
    </button>
</template>

<script lang="ts">
import { Todo } from "@/types/todo";
import Vue, { PropType } from "vue";

export default Vue.extend({
    props: {
        todo: Object as PropType<Todo>
    }
})
</script>

<style lang="scss">
.delete-btn {
    @include baseBtnStyles;
    background: $deleteColor;
    &:hover {
        background: $mainColor;
        color: $deleteColor;
    }
}
</style>