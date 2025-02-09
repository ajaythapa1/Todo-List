import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  localItem: string | null = null;
  todos: Todo[] = [];

  constructor() {


  }

  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      this.localItem = localStorage.getItem("todos");

      if (this.localItem === null) {
        this.todos = [];
      } else {
        this.todos = JSON.parse(this.localItem);
      }
    } else {
      this.todos = [];
    }
  }

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    // if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem("todos", JSON.stringify(this.todos));
    // }
  }

  todoAdd(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }
  toggleTodo(sno : number) {
    const index = this.todos.findIndex(x => x.sno == sno)
    console.log(index);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos" , JSON.stringify(this.todos));
    // localStorage.setItem("todos", JSON.stringify(che.checked));
    // const index = this.todos.indexOf(sno);
    // this.todos[index].active = !this.todos[index].active;
    // if (typeof window !== 'undefined' && window.localStorage) {
    //   localStorage.setItem("todos", JSON.stringify(this.todos));
    // }
  }
}
