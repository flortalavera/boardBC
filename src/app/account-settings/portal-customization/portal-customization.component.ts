import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BasicComponent } from 'src/app/plans-preview/basic/basic.component';
import { Overlay } from '@angular/cdk/overlay';
import { PracticalComponent } from 'src/app/plans-preview/practical/practical.component';
import { ContempoComponent } from 'src/app/plans-preview/contempo/contempo.component';

@Component({
  selector: 'app-portal-customization',
  templateUrl: './portal-customization.component.html',
  styleUrls: ['./portal-customization.component.scss']
})
export class PortalCustomizationComponent {
  dialogRef!: MatDialogRef<PracticalComponent>;
  selectedTheme: string = 'Básico';

  constructor(
    private dialog: MatDialog,
    private overlay: Overlay) { }

  ngOnInit() {

  }

  changeTheme(theme: string) {
    this.selectedTheme = theme;
  }

  openModal(): void {
    let component: any; // Variable para almacenar el componente a abrir

    if (this.selectedTheme === 'Básico') {
      component = BasicComponent;
    } else if (this.selectedTheme === 'Práctico') {
      component = PracticalComponent;
    } else if (this.selectedTheme === 'Contempo') {
      component = ContempoComponent;
    }

    if (component) {
      this.dialogRef = this.dialog.open(component, {
        width: '90%',
        height: '90%',
        scrollStrategy: this.overlay.scrollStrategies.reposition()
      });

      this.dialogRef.afterClosed().subscribe(result => {
        // Después de que el modal se haya cerrado ejecutar acciones de ser necesario
      });
    }
  }

  closeModal(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}