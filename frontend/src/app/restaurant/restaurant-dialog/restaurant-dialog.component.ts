import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-restaurant-dialog',
  templateUrl: './restaurant-dialog.component.html',
  styleUrls: ['./restaurant-dialog.component.scss']
})
export class RestaurantDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<RestaurantDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    const restaurant = this.data.restaurant;
    if (restaurant.name && restaurant.address && restaurant.description && restaurant.hours) {
      this.dialogRef.close(this.data.restaurant);
    }
  }
}
