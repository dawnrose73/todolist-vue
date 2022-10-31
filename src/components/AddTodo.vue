<template>
    <form
        class="add-todo"
        @submit.prevent="onSubmit"
    >
        <input
            v-model="title"
            class="add-todo__input"
            type="text"
        />
        <button
            class="add-todo__btn"
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
    components: { PlusIcon },
    data() {
        return {
            title: ""
        };
    },
    methods: {
        onSubmit() {
            if (this.title.trim()) {
                this.$store.dispatch("addTodo", this.title);
                this.title = "";
            }
        }
    }
});
</script>

<style lang="scss">
.add-todo {
    @include flexCenter();
    justify-content: flex-start;
    height: 55px;
    max-height: 55px;
    flex: 1 auto;
    &__input {
        font-size: 1.5rem;
        padding: 0.52rem;
        background: $mainColor;
        height: 100%;
        min-width: 85%;
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
