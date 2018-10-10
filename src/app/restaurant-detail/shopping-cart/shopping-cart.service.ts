import { Injectable } from '@angular/core';

import { MenuItem } from './../menu-item/menu-item.model';
import { CartItem } from './cart-item.model';
import { NotificationService } from './../../common/messages/notification.service';

@Injectable()
export class ShoppingCartService {
    itens: CartItem[] = [];
    
    constructor(private notificationService: NotificationService){}

    clear() {
        this.itens = []
    }

    addItem(item: MenuItem){
        let foundItem = this.itens.find((mItem)=> mItem.menuItem.id === item.id);
        if(foundItem){
            this.increaseQty(foundItem);
        }else{
            this.itens.push(new CartItem(item))
        }
        this.notificationService.notify(`Adicionado ao carrinho um ${item.name}`)
    }

    removeItem(item: CartItem){
        this.itens.splice(this.itens.indexOf(item),1);
        this.notificationService.notify(`Removido do carrinho um ${item.menuItem.name}`)
    }

    total(): number {
        return this.itens.
            map(item=> item.value()).
            reduce((prev,value)=> prev+value,0)
    }

    increaseQty(item: CartItem): void{
        item.quantity ++;
    }

    decreaseQty(item: CartItem): void{
        item.quantity --;
        if(item.quantity === 0) this.removeItem(item);
    }
}