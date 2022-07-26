import { makeAutoObservable } from "mobx";

export interface TodoType {
  title: string;
  status: "active" | "completed";
  id: number;
}

class Todos {
  todos: TodoType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: TodoType) {
    if (todo.title) {
      this.todos = [todo, ...this.todos];
    }
  }

  changeStatusOfTodo(id: TodoType["id"]) {
    const arrayOfTodo = this.todos;
    const currentItem = arrayOfTodo.find((item) => item.id === id);

    if (currentItem) {
      arrayOfTodo[arrayOfTodo.indexOf(currentItem)].status =
        currentItem.status === "active" ? "completed" : "active";
    }
  }

  removeTodo() {
    this.todos = this.todos.filter((item) => item.status !== "completed");
  }
}

export default new Todos();
