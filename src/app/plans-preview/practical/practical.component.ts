import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-practical',
  templateUrl: './practical.component.html',
  styleUrls: ['./practical.component.scss']
})
export class PracticalComponent {
  selectedPalette: any;

  constructor(
    private dialogRef: MatDialogRef<PracticalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    if (this.selectedPalette == undefined) {
      this.selectedPalette = 'Billcentrix';
    }
  }

  onCloseModal(): void {
    this.dialogRef.close();
  }
}
