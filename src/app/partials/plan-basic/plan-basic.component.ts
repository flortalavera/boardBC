import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-plan-basic',
  templateUrl: './plan-basic.component.html',
  styleUrls: ['./plan-basic.component.scss']
})
export class PlanBasicComponent {
  plans: any[] = [];
  currentIndex = 0;
  visiblePlans: any[] = [];
  showTwoElements = false;
  showOneElement = false;

  ngOnInit() {

    this.plans = [
      { title: 'Plan 1', option: 'Opción 1' },
      { title: 'Plan 2', option: 'Opción 2' },
      { title: 'Plan 3', option: 'Opción 3' },
      { title: 'Plan 1', option: 'Opción 1' }
    ];

    this.updateVisiblePlans();
  }

  
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.showTwoElements = window.innerWidth <= 1255;
    this.showOneElement = window.innerWidth <= 925;
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
