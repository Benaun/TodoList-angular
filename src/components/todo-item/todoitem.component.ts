import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: `./todoitem.component.html`,
})
export class TodoItemComponent {
  @Input() item;
  @Input() id;
  @Output() delete = new EventEmitter();

  del(item) {
    this.delete.emit(item);
  }
}
