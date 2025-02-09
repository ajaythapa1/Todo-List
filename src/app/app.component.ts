import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TodoComponent } from "./MyComponent/todo/todo.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [FormsModule, RouterOutlet, RouterLink]
})
export class AppComponent {
  title = 'todo-list';

  constructor() {
    setTimeout(() => {
      this.title = "Ajay";
    }, 2000);
  }
}
