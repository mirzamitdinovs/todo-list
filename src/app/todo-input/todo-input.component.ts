import {
  Component,
  OnChanges,
  OnInit,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss'],
})
export class TodoInputComponent implements OnChanges {
  constructor() {}

  @Input()
  title: any;

  @Input()
  isSelected: any;

  @Output()
  handleAdd: EventEmitter<any> = new EventEmitter();

  add(title: string) {
    this.handleAdd.emit(title);
    this.title.setValue('');
  }

  ngOnChanges(): void {}
}
