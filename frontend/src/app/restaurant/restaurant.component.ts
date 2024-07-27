import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Rating, Restaurant, RestaurantService } from '../services/restaurant.service';
import { RatingDialogComponent } from './rating-dialog/rating-dialog.component';
import { RestaurantDialogComponent } from './restaurant-dialog/restaurant-dialog.component';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  restaurants: Restaurant[];
  visibleComments: Set<number> = new Set<number>(); // Track visible comments by restaurant ID

  constructor(
    private restaurantService: RestaurantService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadRestaurants();
  }

  loadRestaurants(): void {
    this.restaurantService.getRestaurants().subscribe(restaurants => {
      this.restaurants = restaurants;
    });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(RestaurantDialogComponent, {
      width: '400px',
      data: { restaurant: {} }
    });

    dialogRef.afterClosed().subscribe((result: Restaurant) => {
      if (result) {
        if (!result.id) {
          result.id = this.restaurants.length + 1;
        }
        this.restaurantService.addRestaurant(result).subscribe(_ => {
          this.loadRestaurants();
        });
      }
    });
  }

  openEditDialog(restaurant: Restaurant): void {
    const dialogRef = this.dialog.open(RestaurantDialogComponent, {
      width: '400px',
      data: { restaurant }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.restaurantService.updateRestaurant(result).subscribe(_ => {
          this.loadRestaurants();
        });
      }
    });
  }

  deleteRestaurant(id: number): void {
    var result = confirm("Are you sure you want to delete this restaurant?");
    if (result) {
      this.restaurantService.deleteRestaurant(id).subscribe(_ => {
        this.loadRestaurants();
      });
    }

  }

  openRatingDialog(restaurant: Restaurant): void {
    const dialogRef = this.dialog.open(RatingDialogComponent, {
      width: '400px',
      data: { restaurantId: restaurant.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const restaurant = this.restaurants.find(t => t.id == result.restaurantId);
        if (!restaurant.averageRatings) {
          restaurant.averageRatings = [];
        }
        const comment: Rating = {
          date: new Date(),
          rating: result.rating,
          text: result.text
        }
        restaurant.averageRatings.push(comment);
        this.restaurantService.updateRestaurant(restaurant).subscribe(_ => {
          this.loadRestaurants();
        });
      }
    });
  }

  calculateAverage(ratings: Rating[]): number {
    if (!ratings || ratings.length === 0) {
      return 0;
    }
    const sum = ratings.reduce((a, b) => a + b.rating, 0);
    return sum / ratings.length;
  }
}
