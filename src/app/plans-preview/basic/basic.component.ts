import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent {
  selectedPalette: string = 'Billcentrix';

  constructor(
    private dialogRef: MatDialogRef<BasicComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    if (this.selectedPalette == undefined) {
      this.selectedPalette = 'Billcentrix';
    }
  }

  onCloseModal(): void {
    this.dialogRef.close();
  }
}