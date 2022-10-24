<template>
    <button
        class="edit-btn"
        :disabled="todo.completed"
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
  components: { SaveIcon, EditIcon },
  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true
    },
    isEdit: {
      type: Boolean as PropType<boolean>,
      required: true
    },
    task: {
      type: String as PropType<string>,
      required: true
    }
  },
  methods: {
    edit(task: string, id: number) {
      if (this.isEdit) {
        const taskToEdit = { task, id } as TodoEditData;
        this.$emit("edit-todo", taskToEdit);
      } else {
        this.$emit("toggle-edit-mode");
      }
    }
  }
});
</script>

<style lang="scss">
.edit-btn {
  @include baseBtnStyles($mainColor, $editColor);
}
</style>
