import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Todo } from '../../Todo';
 
@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
}) 
export class AddTodoComponent {
  title :string |  undefined;
  desc! :string;
  @Output() todoAdd : EventEmitter<Todo> = new EventEmitter();

  constructor() {
  }

 
  onSubmit(){
    const todo = {
      sno : Date.now(),
      title : this.title,
      description : this.desc,
      active : true
    }
    this.todoAdd.emit(todo);

  }
}
