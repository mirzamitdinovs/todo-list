import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Todo } from '../models/todo-interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input()
  item: any;

  @Output()
  handleCheck: EventEmitter<any> = new EventEmitter();

  @Output()
  handleEdit: EventEmitter<any> = new EventEmitter();

  @Output()
  handleDelete: EventEmitter<any> = new EventEmitter();

  toggle(item: Todo) {
    this.handleCheck.emit(item);
  }

  edit(item: Todo) {
    this.handleEdit.emit(item);
  }
  delete(item: Todo) {
    this.handleDelete.emit(item);
  }

  ngOnInit(): void {}
}
