<template>
    <button
        class="complete-btn"
        :disabled="isEdit"
        @click="() => completeTodo(todo)"
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
import { eventBus } from "@/main";

export default Vue.extend({
    components: { UndoIcon, CheckIcon },
    props: {
        todo: {
            type: Object as PropType<Todo>,
            required: true
        },
        isEdit: {
            type: Boolean as PropType<boolean>,
            required: true
        }
    },
    methods: {
        completeTodo(todo: Todo) {
            eventBus.$emit("complete-todo", todo);
        }
    }
});
</script>

<style lang="scss">
.complete-btn {
    @include baseBtnStyles($mainColor, $completeColor);
}
</style>
