import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {


  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todo["sno"]> = new EventEmitter();

  ngOnInit(): void {

  }

  onClicks(todo: Todo) {
    console.log(todo)
    this.todoDelete.emit(todo);
    console.log("onCLick event has been trigered")
  }
  onCheckBoxClick(sno: number) {
    console.log(sno)
    this.todoCheckBox.emit(sno);
  }

}
