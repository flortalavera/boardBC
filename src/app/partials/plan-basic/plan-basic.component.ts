import { Component } from '@angular/core';

@Component({
  selector: 'app-plan-basic',
  templateUrl: './plan-basic.component.html',
  styleUrls: ['./plan-basic.component.scss']
})
export class PlanBasicComponent {
  plans: any[] = [];
  currentIndex = 0;
  visiblePlans: any[] = [];

  ngOnInit() {

    this.plans = [
      { title: 'Plan 1', option: 'Opción 1' },
      { title: 'Plan 2', option: 'Opción 2' },
      { title: 'Plan 3', option: 'Opción 3' },
      { title: 'Plan 1', option: 'Opción 1' }
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
