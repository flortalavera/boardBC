import { Component } from '@angular/core';

@Component({
  selector: 'app-plan-practical',
  templateUrl: './plan-practical.component.html',
  styleUrls: ['./plan-practical.component.scss']
})
export class PlanPracticalComponent {
  plans: any[] = [];
  currentIndex = 0;
  visiblePlans: any[] = [];

  ngOnInit() {
    this.plans = [
      { price: '$15', option: 'OPCIÓN 1' },
      { price: '$25', option: 'OPCIÓN 2' },
      { price: '$29', option: 'OPCIÓN 3' },
      { price: '$15', option: 'OPCIÓN 1' }
    ];

    this.updateVisiblePlans();

  }

  previous() {
    if (this.currentIndex > 0) {
      if (this.currentIndex >= 3) {
        this.currentIndex -= 3;
      } else {
        this.currentIndex = 0;
      }
      this.updateVisiblePlans();
    }
  }

  next() {
    if (this.currentIndex < this.plans.length - 3) {
      this.currentIndex += 3;
      if (this.currentIndex >= this.plans.length - 3) {
        this.currentIndex = this.plans.length - 3;
      }
    }
    this.updateVisiblePlans();
  }

  updateVisiblePlans() {
    const start = this.currentIndex;
    const end = start + 3;
    this.visiblePlans = this.plans.slice(start, end);
  }
}
