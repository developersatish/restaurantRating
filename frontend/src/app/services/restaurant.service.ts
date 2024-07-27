import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Rating {
  rating: number;
  text: string;
  date: Date;
}

export interface Restaurant {
  id: number;
  name: string;
  address: string;
  description: string;
  hours: string;
  averageRatings: Rating[];
}
const baseUrl = 'https://5it5qauo4j.execute-api.ap-south-1.amazonaws.com/Prod';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private apiUrl = `${baseUrl}/api/restaurant`;

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.apiUrl);
  }

  addRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    return this.http.post<Restaurant>(this.apiUrl, restaurant);
  }

  updateRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    return this.http.put<Restaurant>(`${this.apiUrl}/${restaurant.id}`, restaurant);
  }

  deleteRestaurant(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // addRating(restaurantId: number, rating: number, text: string): Observable<Restaurant> {
  //   const url = `${this.apiUrl}/${restaurantId}/ratings`;
  //   const newRating = { rating, text, date: new Date().toISOString() };
  //   return this.http.post<Restaurant>(url, newRating);
  // }
}
