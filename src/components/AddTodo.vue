<template>
    <form class="add-todo" 
          @submit.prevent="onSubmit"
    >
        <input  class="add-todo__input" 
                type="text" 
                v-model="title"
        />
        <button class="add-todo__btn" 
                type="submit"
        >
            <PlusIcon />
        </button>
    </form>
</template>

<script lang="ts">
import Vue from "vue";
import PlusIcon from "@/components/icons/PlusIcon.vue";

export default Vue.extend({
    data() {
        return {
            title: ""
        };
    },
    methods: {
        onSubmit() {
            if (this.title.trim()) {
                this.$emit("add-todo", this.title);
                this.title = "";
            }
        }
    },
    components: { PlusIcon }
})
</script>

<style lang="scss">
.add-todo {
  @include flexCenter();
  height: 55px;
  &__input {
    font-size: 1.5rem;
    padding: 0.52rem;
    background: $mainColor;
    height: 100%;
    font-family: "Poppins", sans-serif;
  }
  &__btn {
    @include baseBtnStyles($addBtnColor, $mainColor);
    font-size: 2rem;
    padding: 0.5rem;
    min-width: 40px;
    svg {
      min-height: 30px;
    }
  }
} 
</style>
