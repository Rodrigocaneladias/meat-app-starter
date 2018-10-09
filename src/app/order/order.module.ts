import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CommonModulePersonal } from './../common/common.module';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { OrderComponent } from './order.component';

const ROUTES: Routes = [
    {path: "", component: OrderComponent}
]

@NgModule({
    declarations:[
        DeliveryCostsComponent,
        OrderItemsComponent,
        OrderComponent
    ],
    imports:[
        CommonModulePersonal,
        RouterModule.forChild(ROUTES)
    ]
})

export class OrderModule{}