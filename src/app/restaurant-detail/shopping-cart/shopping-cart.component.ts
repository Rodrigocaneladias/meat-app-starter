import { Component, OnInit } from '@angular/core';

import { ShoppingCartService } from './shopping-cart.service';
import { CartItem } from './cart-item.model';

@Component({
  selector: "mt-shopping-cart",
  templateUrl: "./shopping-cart.component.html"
})
export class ShoppingCartComponent implements OnInit {
  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {}

  itens(): CartItem[] {
    return this.shoppingCartService.itens;
  }

  total(): number {
    return this.shoppingCartService.total();
  }

  clear(): void {
    this.shoppingCartService.clear();
  }

  removeItem(item: any): void {
    this.shoppingCartService.removeItem(item);
  }

  addItem(item: any): void {
    this.shoppingCartService.addItem(item);
  }
}
