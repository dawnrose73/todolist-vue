import { Todo } from "@/types/todo";
import { TodoEditData } from "@/types/todoEditData";
import { ActionContext } from "vuex";

interface RootState {
    todos: Todo[];
    loading: boolean;
    filterOption: string;
}

export default {
    state: {
        todos: [],
        loading: true,
        filterOption: "all"
    },
    mutations: {
        setTodos(state: RootState, payload: Todo[]) {
            state.todos = payload;
        },
        setLoading(state: RootState, payload: boolean) {
            state.loading = payload;
        },
        setFilterOption(state: RootState, payload: string) {
            state.filterOption = payload;
        }
    },
    getters: {
        getAllTodos(state: RootState) {
            return state.todos;
        },
        getLoading(state: RootState) {
            return state.loading;
        },
        filteredTodos(state: RootState) {
            if (state.filterOption === "completed") {
                return state.todos.filter((todo: Todo) => todo.completed);
            }
            if (state.filterOption === "uncompleted") {
                return state.todos.filter((todo: Todo) => !todo.completed);
            }
            return state.todos;
        }
    },
    actions: {
        fetchTodos(context: ActionContext<RootState, RootState>) {
            fetch("http://127.0.0.1:5000/tasks/")
                .then((response) => response.json())
                .then((res) => {
                    context.commit("setTodos", res.data);
                    // synthetic delay
                    setTimeout(() => {
                        context.commit("setLoading", false);
                    }, 1000);
                });
        },
        completeTodo(context: ActionContext<RootState, RootState>, todo: Todo) {
            fetch(`http://127.0.0.1:5000/tasks/edit/${todo.id}/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ completed: !todo.completed })
            }).then(() => context.dispatch("fetchTodos"));
        },
        removeTodo(context: ActionContext<RootState, RootState>, id: number) {
            fetch(`http://127.0.0.1:5000/tasks/delete/${id}/`, {
                method: "DELETE"
            }).then(() => context.dispatch("fetchTodos"));
        },
        editTodo(
            context: ActionContext<RootState, RootState>,
            taskToEdit: TodoEditData
        ) {
            context.commit(
                "setTodos",
                context.state.todos.map((t) => {
                    if (t.id === taskToEdit.id) {
                        t.task = taskToEdit.task;
                    }
                    return t;
                })
            );
            fetch(`http://127.0.0.1:5000/tasks/edit/${taskToEdit.id}/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ task: taskToEdit.task })
            }).then(() => context.dispatch("fetchTodos"));
        },
        addTodo(context: ActionContext<RootState, RootState>, todo: string) {
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
            }).then(() => context.dispatch("fetchTodos"));
        }
    }
};
