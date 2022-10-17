<template>
  <div id="app">
    <div class="container">
      <Header />
      <TodoForm @add-todo="addTodo"/>
      <TodoList   v-bind:todos="todos" 
                  @complete-todo="completeTodo" 
                  @remove-todo="removeTodo" 
                  @edit-todo="editTodo"
      />
    </div>
  </div>
</template>

<script>
import TodoForm from "@/components/TodoForm";
import Header from "@/components/TodoListHeader";
import TodoList from "@/components/TodoList";

export default {
  name: 'App',
  components: {
    Header, TodoForm, TodoList
  },
  data() {
    return {
      todos: []
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      fetch('http://127.0.0.1:5000/tasks/')
        .then(response => response.json())
        .then(res => {
          this.todos = res.data;
        })
    },
    addTodo(todo) {
      fetch(('http://127.0.0.1:5000/tasks/add/'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( { id: Date.now(), task: todo, completed: false })
            }).then(() => this.getData())
    },
    completeTodo(todo) {
        fetch((`http://127.0.0.1:5000/tasks/edit/${todo.id}/`), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ completed : !todo.completed})
        })
        .then(() => this.getData())
    },
    removeTodo(id) {
        fetch((`http://127.0.0.1:5000/tasks/delete/${id}/`), {
            method: 'DELETE',
        }) 
        .then(() => this.getData()) 
    },
    editTodo(taskToEdit) {
        this.todos = this.todos.map(t => {
          if (t.id === taskToEdit.id) {
            t.task = taskToEdit.task;
          }
          return t;
        })
        fetch((`http://127.0.0.1:5000/tasks/edit/${taskToEdit.id}/`), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ task : taskToEdit.task})
        })
        .then(() => this.getData())
    }
  }
}
</script>

<style lang="scss">
#app {
  .container {
    max-width: 1100px;
    margin: 0 auto;
  }
}
</style>