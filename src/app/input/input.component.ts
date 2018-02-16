import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
    <input class="todo-input" [value]="title"
           (keyup.enter)="submitValue(inputElement.value)"
           #inputElement>

    <button (click)="submitValue(inputElement.value)">
      Save
    </button>
    <button class="btn btn-red" (click)="removeItem()">

    <p>The title is: {{ title }}</p>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  title: String = '';
  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  submitValue(newTitle: string): void {
    this.submit.emit(newTitle);
  }
}
