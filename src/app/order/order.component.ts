import { Router } from '@angular/router';
import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { OrderService } from './order.service';
import { Component, OnInit } from '@angular/core';


import { RadioOption } from '../common/radio/radio-option.model';
import { Order, OrderItem } from './order.model';
@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery: number = 8;

  paymentOptions: RadioOption[] =[
    {value:"MONEY" , label:"Dinheiro" },
    {value:"DEB" , label:"Cartão de Débito" },
    {value:"REF" , label:"Vale Refeição" }
  ] 

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit(){
  }

  itemsValue(): number {
    return this.orderService.itemsValue()
  }

  cartItems(): CartItem[]{
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItem){
    this.orderService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    this.orderService.decreaseQty(item)
  }

  remove(item: CartItem){
    this.orderService.remove(item)
  }

  checkOrder(order: Order){
    order.orderItem = this.cartItems().
            map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id))
    this.orderService.checkOrder(order).subscribe((orderId: string)=>{
      console.log(`compra concluida: ${orderId}`);
      this.orderService.clear();
      this.router.navigate(['/order-summary'])
    })
    console.log("---------------->",order)
  }
}
