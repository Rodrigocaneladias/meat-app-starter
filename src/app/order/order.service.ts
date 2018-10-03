import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map'

import { MEAT_API } from './../api.app';
import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { Order, OrderItem} from './order.model';

@Injectable()
export class OrderService {
    constructor(private cartService: ShoppingCartService, private http: Http){}

    cartItems(){
        return this.cartService.itens;
    }

    increaseQty(item: CartItem){
        this.cartService.increaseQty(item)
    }

    decreaseQty(item: CartItem){
        this.cartService.decreaseQty(item)
    }

    remove(item: CartItem){
        this.cartService.removeItem(item)
    }

    itemsValue(): number{
        return this.cartService.total()
    }

    checkOrder(order: Order): Observable<string>{
        const headers = new Headers();
        headers.append('Content-type', 'application/json')
        return this.http.post(
            `${MEAT_API}/orders`, 
            JSON.stringify(order),
            new RequestOptions ({
                headers: headers
            })
        ).map(response => response.json())
        .map(order => order.id)
    }

    clear(){
        this.cartService.clear()
    }
}