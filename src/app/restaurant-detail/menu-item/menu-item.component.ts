import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { MenuItem } from './menu-item.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  animations: [
    trigger('MenuItemsAppeared', [
      state('ready',   style({
        opacity: 1
      })),
      transition("void => ready", [
        style({opacity: 0, transform: 'translatey(-20px)' }),
        animate(`300ms 0s ease-in`)
      ]), 
    ]),
  ]
})
export class MenuItemComponent implements OnInit {
  StatusItem: string = "ready";
  @Input() menuItem: MenuItem;
  @Output() add = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  emmitAddEvent() {
    this.add.emit(this.menuItem)
  }
}
