<template>
    <button class="complete-btn" 
            v-bind:disabled="isEdit" 
            @click="$emit('complete-todo', todo)"
    >
        <UndoIcon v-if="todo.completed" />
        <CheckIcon v-else />
    </button>
</template>

<script lang="ts">
import { Todo } from "@/types/todo";
import Vue, { PropType } from "vue";
import UndoIcon from "@/components/icons/UndoIcon.vue";
import CheckIcon from "@/components/icons/CheckIcon.vue";

export default Vue.extend({
    props: {
        todo: Object as PropType<Todo>,
        isEdit: Boolean as PropType<boolean>
    },
    components: { UndoIcon, CheckIcon }
})
</script>

<style lang="scss">
.complete-btn {
    @include baseBtnStyles($mainColor, $completeColor);
}
</style>