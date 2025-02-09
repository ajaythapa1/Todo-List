import { Routes } from '@angular/router';
import { TodoComponent } from './MyComponent/todo/todo.component';
import { AboutComponent } from './MyComponent/about/about.component';


export const routes: Routes = [
    { path: 'home', component: TodoComponent },
    { path: 'about', component: AboutComponent }
];


