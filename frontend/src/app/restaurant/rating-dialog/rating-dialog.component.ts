import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-rating-dialog',
  templateUrl: './rating-dialog.component.html',
  styleUrls: ['./rating-dialog.component.scss']
})
export class RatingDialogComponent {
  rating: number;
  commentText: string = '';

  constructor(
    public dialogRef: MatDialogRef<RatingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { restaurantId: number }
  ) { }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.rating && this.commentText) {
      console.log(this.rating);
      if (this.rating < 1 || this.rating > 5) {
        alert('Rating must be between 1 and 5!');
        return;
      }
      this.dialogRef.close({ rating: this.rating, text: this.commentText, restaurantId: this.data.restaurantId });
    }
  }
}
