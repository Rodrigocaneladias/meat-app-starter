import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../common/radio/radio-option.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] =[
    {value:"MONEY" , label:"Dinheiro" },
    {value:"DEB" , label:"Cartão de Débito" },
    {value:"REF" , label:"Vale Refeição" }
  ] 

  constructor() { }

  ngOnInit() {
  }

}
