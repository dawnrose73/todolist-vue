<template>
    <div id="app">
        <div class="container">
            <TodoListHeader />
            <TodoForm
                @add-todo="addTodo"
                @set-filter="setFilter"
            />
            <TodoListLoader v-if="loading" />
            <TodoList
                v-else-if="todos.length"
                :todos="filteredTodos"
                @complete-todo="completeTodo"
                @remove-todo="removeTodo"
                @edit-todo="editTodo"
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
import { Todo } from "@/types/todo";
import { TodoEditData } from "@/types/todoEditData";
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
    data() {
        return {
            todos: [] as Todo[],
            filter: "all",
            loading: true
        };
    },
    computed: {
        filteredTodos() {
            if (this.filter === "completed") {
                return this.todos.filter((todo: Todo) => todo.completed);
            }
            if (this.filter === "uncompleted") {
                return this.todos.filter((todo: Todo) => !todo.completed);
            }
            return this.todos;
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            fetch("http://127.0.0.1:5000/tasks/")
                .then((response) => response.json())
                .then((res) => {
                    this.todos = res.data;
                    // synthetic delay
                    setTimeout(() => {
                        this.loading = false;
                    }, 1000);
                });
        },
        addTodo(todo: string) {
            fetch("http://127.0.0.1:5000/tasks/add/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: Date.now(),
                    task: todo,
                    completed: false
                })
            }).then(() => this.getData());
        },
        completeTodo(todo: Todo) {
            fetch(`http://127.0.0.1:5000/tasks/edit/${todo.id}/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ completed: !todo.completed })
            }).then(() => this.getData());
        },
        removeTodo(id: number) {
            fetch(`http://127.0.0.1:5000/tasks/delete/${id}/`, {
                method: "DELETE"
            }).then(() => this.getData());
        },
        editTodo(taskToEdit: TodoEditData) {
            this.todos = this.todos.map((t) => {
                if (t.id === taskToEdit.id) {
                    t.task = taskToEdit.task;
                }
                return t;
            });
            fetch(`http://127.0.0.1:5000/tasks/edit/${taskToEdit.id}/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ task: taskToEdit.task })
            }).then(() => this.getData());
        },
        setFilter(value: string) {
            this.filter = value;
        }
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
