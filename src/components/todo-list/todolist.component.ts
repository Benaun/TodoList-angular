import { Component } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: `./todolist.component.html`,
})
export class TodoListComponent {
  todos = [];
  text = '';

  addToList() {
    this.todos.push({ completed: false, text: this.text });
    this.text = '';
  }

  delItem(id: number) {
    this.todos.splice(id, 1);
  }

  delAll() {
    this.todos = [];
  }
}
