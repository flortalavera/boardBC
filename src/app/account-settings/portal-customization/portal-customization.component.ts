import { Component } from '@angular/core';

@Component({
  selector: 'app-portal-customization',
  templateUrl: './portal-customization.component.html',
  styleUrls: ['./portal-customization.component.scss']
})
export class PortalCustomizationComponent {
  palettes: any[] = [];
  currentIndex: number = 0;

  ngOnInit() {
    // Aquí debes llenar el arreglo 'paletas' con las paletas de colores que tienes disponibles
    // Puedes cargar las imágenes y los títulos de las paletas desde algún servicio o archivo de datos
    this.palettes = [
      { image: '../../../assets/images/color-palette/billcentrix.png', title: 'Billcentrix' },
      { image: '../../../assets/images/color-palette/moderna.png', title: 'Moderna' },
      { image: '../../../assets/images/color-palette/violeta.png', title: 'Violeta' },
      { image: '../../../assets/images/color-palette/paleta4.png', title: 'Billcentrix' },
      { image: '../../../assets/images/color-palette/paleta5.png', title: 'Moderna' },
      { image: '../../../assets/images/color-palette/paleta6.png', title: 'Violeta' },
      { image: '../../../assets/images/color-palette/paleta7.png', title: 'Billcentrix' },
      { image: '../../../assets/images/color-palette/paleta8.png', title: 'Moderna' },
      { image: '../../../assets/images/color-palette/paleta9.png', title: 'Violeta' }
    ];
  }

  previous() {
    const firstIndex = this.currentIndex - 3;
    if (firstIndex >= 0) {
      this.currentIndex = firstIndex;
    } else {
      this.currentIndex = 0;
    }
  }
  
  next() {
    const lastIndex = this.currentIndex + 3;
    if (lastIndex < this.palettes.length) {
      this.currentIndex = lastIndex;
    } else {
      this.currentIndex = this.palettes.length - 1;
    }
  }

}