import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { RadioComponent } from './radio/radio.component';
import { InputTextComponent } from './input-text/input-text.component';
import { RatingComponent } from './rating/rating.component';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { OrderService } from '../order/order.service';
import { RestaurantService } from '../restaurants/restaurant/restaurant.service';

@NgModule({
    declarations:[
        InputTextComponent,
        RadioComponent,
        RatingComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    exports:[
        InputTextComponent,
        RadioComponent,
        RatingComponent,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ]
})

export class CommonModulePersonal{
    static forRoot(): ModuleWithProviders{
        return{
            ngModule: CommonModulePersonal,
            providers:[
                ShoppingCartService,
                OrderService,
                RestaurantService
            ]
        }
    }
}