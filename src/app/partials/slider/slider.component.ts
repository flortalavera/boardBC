import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  palettes: any[] = [];
  currentIndex: number = 0;
  visiblePalettes: any[] = [];

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

    this.updateVisiblePalettes();
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateVisiblePalettes();
    }
  }
  
  next() {
    if (this.currentIndex < this.palettes.length - 1) {
      this.currentIndex++;
      this.updateVisiblePalettes();
    }
  }
  
  updateVisiblePalettes() {
    const start = this.currentIndex;
    const end = start + 3;
    this.visiblePalettes = this.palettes.slice(start, end);
  }

}