import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    <div class="todo-item checkbox">
      <input type="checkbox" (click)="completeItem()"/>
      <p class="todo-title" [ngClass]="{'todo-complete': isComplete}">
      {{ todoItem.title }}
    </p>
      <button class="btn btn-red" (click)="removeItem()">
        remove
      </button>
    </div>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() todoItem: any;
  @Output() remove: EventEmitter<any> = new EventEmitter();
  isComplete: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  removeItem() {
    this.remove.emit(this.todoItem);
  }

  completeItem() {
    this.isComplete = !this.isComplete;
  }

}
