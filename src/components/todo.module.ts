import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TodoComponent } from './todo.component';
import { TodoItemComponent } from './todo-item/todoitem.component';
import { TodoListComponent } from './todo-list/todolist.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [TodoComponent, TodoListComponent, TodoItemComponent],
  bootstrap: [TodoComponent],
})
export class TodoModule {}
