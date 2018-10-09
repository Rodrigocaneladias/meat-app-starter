import { Router } from '@angular/router';
import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { OrderService } from './order.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';


import { RadioOption } from '../common/radio/radio-option.model';
import { Order, OrderItem } from './order.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  numberPattern = /^[0-9]*$/;

  orderForm: FormGroup;

  delivery: number = 8;

  paymentOptions: RadioOption[] =[
    {value:"MONEY" , label:"Dinheiro" },
    {value:"DEB" , label:"Cartão de Débito" },
    {value:"REF" , label:"Vale Refeição" }
  ] 

  constructor(private orderService: OrderService, 
              private router: Router,
              private formBuilder: FormBuilder
  ) { }

  ngOnInit(){
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.minLength(5), Validators.required]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      adress: this.formBuilder.control('', [Validators.minLength(5), Validators.required]),
      number: this.formBuilder.control('', [Validators.pattern(this.numberPattern), Validators.required]),
      optionalAdress: this.formBuilder.control(''),
      paymentOption:this.formBuilder.control('',[Validators.required])
    },{validator: OrderComponent.equalsTwo})
  }

  static equalsTwo(group: AbstractControl): {[key: string]: boolean}{
    const email = group.get('email')
    const emailConfirmation = group.get('emailConfirmation')
    debugger;
    if (!email.value || !emailConfirmation.value ) {
      return undefined;
    }

    if (email.value !== emailConfirmation.value) {
      return {
         emailsNotMatch:true
      }
    }
    
    if (email.value === emailConfirmation.value) {
      return undefined;
    }

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