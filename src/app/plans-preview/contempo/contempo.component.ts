import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contempo',
  templateUrl: './contempo.component.html',
  styleUrls: ['./contempo.component.scss']
})
export class ContempoComponent {
  selectedPalette: string = 'Billcentrix';

  constructor(
    private dialogRef: MatDialogRef<ContempoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    // Imprimir la paleta seleccionada
    console.log('Paleta seleccionada:', this.selectedPalette);
  }

  onCloseModal(): void {
    this.dialogRef.close();
  }
}
