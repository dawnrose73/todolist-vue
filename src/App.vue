<template>
    <div id="app">
        <div class="container">
            <TodoListHeader />
            <TodoForm />
            <TodoListLoader v-if="$store.getters.getLoading" />
            <TodoList
                v-else-if="$store.getters.filteredTodos.length"
                :todos="$store.getters.filteredTodos"
            />
            <NoTodos v-else />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoForm from "@/components/TodoForm.vue";
import TodoListHeader from "@/components/TodoListHeader.vue";
import TodoList from "@/components/TodoList.vue";
import TodoListLoader from "@/components/TodoListLoader.vue";
import NoTodos from "@/components/NoTodos.vue";

export default Vue.extend({
    name: "App",
    components: {
        TodoListHeader,
        TodoForm,
        TodoList,
        TodoListLoader,
        NoTodos
    },
    mounted() {
        this.$store.dispatch("fetchTodos");
    }
});
</script>

<style lang="scss">
#app {
    .container {
        max-width: 1100px;
        margin: 0 auto;
    }
}
</style>
