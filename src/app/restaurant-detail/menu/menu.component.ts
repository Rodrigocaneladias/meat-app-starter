import { Observable } from 'rxjs/observable';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from './../menu-item/menu-item.model';
import { RestaurantService } from '../../restaurants/restaurant/restaurant.service';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>

  constructor(private restaurantService: RestaurantService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restaurantService.menuOfRestaurant(this.route.parent.snapshot.params["id"])
  }

  addMenuItem(item: MenuItem){
    console.log(item)
  }

}
