import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    <div class="todo-item">
    <p class="todo-title">
      {{ todoItem.title }}
    </p>
    </div>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() todoItem: any;


  constructor() { }

  ngOnInit() {
  }

}
