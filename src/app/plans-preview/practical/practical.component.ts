import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-practical',
  templateUrl: './practical.component.html',
  styleUrls: ['./practical.component.scss']
})
export class PracticalComponent {
  constructor(
    private dialogRef: MatDialogRef<PracticalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCloseModal(): void {
    this.dialogRef.close();
  }
}
