import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-contempo',
  templateUrl: './plan-contempo.component.html',
  styleUrls: ['./plan-contempo.component.scss']
})
export class PlanContempoComponent implements OnInit {
  plans: any[] = [];
  currentIndex = 0;
  visiblePlans: any[] = [];

  selectedPalette: any;


  ngOnInit() {

    this.plans = [
      { image: '../../../assets/images/botella.png', title: 'PLAN 1', price: '$15' },
      { image: '../../../assets/images/botellasx3.png', title: 'PLAN 2', price: '$25' },
      { image: '../../../assets/images/botellasx2.png', title: 'PLAN 3', price: '$29' },
      { image: '../../../assets/images/botella.png', title: 'PLAN 1', price: '$15' },
      { image: '../../../assets/images/botellasx3.png', title: 'PLAN 2', price: '$25' },
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