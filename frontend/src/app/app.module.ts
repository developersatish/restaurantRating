import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RestaurantDialogComponent } from './restaurant/restaurant-dialog/restaurant-dialog.component';
import { RatingDialogComponent } from './restaurant/rating-dialog/rating-dialog.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    RestaurantDialogComponent,
    RatingDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  entryComponents: [RestaurantDialogComponent, RatingDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
