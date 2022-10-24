<template>
    <div class="filter-todos">
        <select
            name="todos"
            class="filter-todos__filter"
            @change="setFilter">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
        </select>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    setFilter(event: Event) {
      this.$emit("set-filter", (event.target as HTMLSelectElement).value);
    }
  }
});
</script>

<style lang="scss">
.filter-todos {
  margin-left: 1rem;
  position: relative;
  overflow: hidden;
  height: 55px;
  &::after {
    content: "\25BC";
    position: absolute;
    background: #d88771;
    top: 0;
    right: 0;
    pointer-events: none;
    padding: 1rem;
    transition: all 0.5s ease;
  }
  &:hover::after {
    background: #ffffff;
    color: #d88771;
  }
  &__filter {
    appearance: none;
    border-radius: 0;
    outline: none;
    border: none;
    color: #d88771;
    background: #ffffff;
    width: 10rem;
    height: 100%;
    cursor: pointer;
    padding: 1.2rem;
  }
}
</style>
