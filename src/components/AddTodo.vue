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
            <i class="fas fa-plus-square"></i>
        </button>
    </form>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        this.$emit('add-todo', this.title);
        this.title = '';
      }
    }
  }
}
</script>

<style lang="scss">
.add-todo {
  display: flex;
  justify-content: center;
  align-items: center;
  &__input {
    font-size: 1.5rem;
    padding: 0.52rem;
    background: $mainColor;
    max-width: 100%;
    font-family: "Poppins", sans-serif;
  }
  &__btn {
    font-size: 2rem;
    padding: 0.5rem;
    background: $mainColor;
    color: $addBtnColor;
    transition: all 0.3s ease;
  }
  &__btn:hover {
    background: $addBtnColor;
    color: $mainColor;
  }
} 
</style>
