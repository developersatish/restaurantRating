import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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
  averageRatings: Rating[]; // Changed to Comment[]
}

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private restaurants: Restaurant[] = [
    {
      id: 1,
      name: 'Restaurant A',
      address: '123 Main St',
      description: 'Cozy place with delicious food',
      hours: '9:00 AM - 10:00 PM',
      averageRatings: [
        { rating: 4, text: 'Great food!', date: new Date() },
        { rating: 5, text: 'Excellent service!', date: new Date() }
      ]
    },
    // Add more sample restaurants as needed
  ];

  getRestaurants(): Observable<Restaurant[]> {
    return of(this.restaurants);
  }

  addRestaurant(restaurant: Restaurant): void {
    restaurant.id = this.restaurants.length + 1;
    this.restaurants.push(restaurant);
  }

  updateRestaurant(updatedRestaurant: Restaurant): void {
    const index = this.restaurants.findIndex(r => r.id === updatedRestaurant.id);
    if (index !== -1) {
      this.restaurants[index] = updatedRestaurant;
    }
  }

  deleteRestaurant(id: number): void {
    this.restaurants = this.restaurants.filter(r => r.id !== id);
  }

  addComment(id: number, rating: number, text: string): void {
    const restaurant = this.restaurants.find(r => r.id === id);
    if (restaurant) {
      if (!restaurant.averageRatings) {
        restaurant.averageRatings = [];
      }
      restaurant.averageRatings.push({ rating, text, date: new Date() });
    }
  }
}
