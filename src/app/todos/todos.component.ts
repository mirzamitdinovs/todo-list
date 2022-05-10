import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo-interface';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  title = new FormControl('');

  data: Todo[] = [];

  selectedTodo: any = null;

  ngOnInit(): void {}

  handleAdd(title: string) {
    if (this.selectedTodo) {
      this.data = this.data.map((ad) =>
        ad.id === this.selectedTodo.id
          ? {
              ...ad,
              title: this.title.value,
            }
          : ad
      );
      this.selectedTodo = null;
    } else {
      const newTodo = {
        id: Number(
          `${Math.round(Math.random() * 100)}${Math.round(
            Math.random() * 100
          )}${Math.round(Math.random() * 100)}`
        ),
        title: title,
        checked: false,
      };
      this.data = [newTodo, ...this.data];
    }
  }

  handleCheck(item: Todo) {
    this.data = this.data.map((todo) =>
      todo.id === item.id
        ? {
            ...todo,
            checked: !todo.checked,
          }
        : todo
    );
  }
  handleEdit(item: Todo) {
    this.selectedTodo = item;
    this.title.setValue(item.title);
  }
  handleDelete(item: Todo) {
    this.data = this.data.filter((todo) => todo.id !== item.id);
  }
}
