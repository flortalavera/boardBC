import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-plan-practical',
  templateUrl: './plan-practical.component.html',
  styleUrls: ['./plan-practical.component.scss']
})
export class PlanPracticalComponent {
  plans: any[] = [];
  currentIndex = 0;
  visiblePlans: any[] = [];
  showTwoElements = false;
  showOneElement = false;

  @Input() selectedPalette: string = "Billcentrix";

  ngOnInit() {
    console.log('paleta desde el partial: ' + this.selectedPalette)
    
    this.plans = [
      { price: '$15', option: 'OPCIÓN 1' },
      { price: '$25', option: 'OPCIÓN 2' },
      { price: '$29', option: 'OPCIÓN 3' },
      { price: '$15', option: 'OPCIÓN 1' }
    ];

    this.updateVisiblePlans();

  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.showTwoElements = window.innerWidth <= 1202;
    this.showOneElement = window.innerWidth <= 871;
    this.updateVisiblePlans();
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex -= this.showOneElement ? 1 : (this.showTwoElements ? 2 : 3);
      if (this.currentIndex < 0) {
        this.currentIndex = 0;
      }
      this.updateVisiblePlans();
    }
  }

  next() {
    if (this.currentIndex < this.plans.length - (this.showOneElement ? 1 : (this.showTwoElements ? 2 : 3))) {
      this.currentIndex += this.showOneElement ? 1 : (this.showTwoElements ? 2 : 3);
      if (this.currentIndex >= this.plans.length - (this.showOneElement ? 1 : (this.showTwoElements ? 2 : 3))) {
        this.currentIndex = this.plans.length - (this.showOneElement ? 1 : (this.showTwoElements ? 2 : 3));
      }
    }
    this.updateVisiblePlans();
  }

  updateVisiblePlans() {
    const start = this.currentIndex;
    const end = start + (this.showOneElement ? 1 : (this.showTwoElements ? 2 : 3));
    this.visiblePlans = this.plans.slice(start, end);
  }
}