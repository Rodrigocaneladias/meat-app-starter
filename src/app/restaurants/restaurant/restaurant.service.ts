import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs/observable";
import "rxjs/add/operator/map"
import "rxjs/add/operator/catch"

import { Restaurant } from "./restaurant.model";
import { MenuItem } from './../../restaurant-detail/menu-item/menu-item.model';
import { MEAT_API } from './../../api.app';
import { ErrorHandler } from './../../app.error-handler';

@Injectable()
export class RestaurantService {
    constructor(private http: Http){};
    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }

    restaurantById(id: string): Observable<Restaurant>{
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    reviewsOfRestaurant(id: string): Observable<any>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    menuOfRestaurant(id: string): Observable<MenuItem[]>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }
}