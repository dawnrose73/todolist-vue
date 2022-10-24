<template>
    <button
        class="delete-btn"
        @click="$emit('remove-todo', todo.id)"
    >
        <TrashIcon />
    </button>
</template>

<script lang="ts">
import { Todo } from "@/types/todo";
import Vue, { PropType } from "vue";
import TrashIcon from "@/components/icons/TrashIcon.vue";

export default Vue.extend({
    components: { TrashIcon },
    props: {
        todo: {
            type: Object as PropType<Todo>,
            required: true
        }
    }
});
</script>

<style lang="scss">
.delete-btn {
    @include baseBtnStyles($mainColor, $deleteColor);
}
</style>
