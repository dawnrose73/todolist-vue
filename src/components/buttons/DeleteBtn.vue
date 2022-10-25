<template>
    <button
        class="delete-btn"
        @click="() => removeTodo(todo.id)"
    >
        <TrashIcon />
    </button>
</template>

<script lang="ts">
import { Todo } from "@/types/todo";
import Vue, { PropType } from "vue";
import TrashIcon from "@/components/icons/TrashIcon.vue";
import { eventBus } from "@/main";

export default Vue.extend({
    components: { TrashIcon },
    props: {
        todo: {
            type: Object as PropType<Todo>,
            required: true
        }
    },
    methods: {
        removeTodo(id: number) {
            eventBus.$emit("remove-todo", id);
        }
    }
});
</script>

<style lang="scss">
.delete-btn {
    @include baseBtnStyles($mainColor, $deleteColor);
}
</style>
