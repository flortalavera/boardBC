import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-contempo',
  templateUrl: './plan-contempo.component.html',
  styleUrls: ['./plan-contempo.component.scss']
})
export class PlanContempoComponent implements OnInit {
  plans: any[] = [];
  currentIndex = 0;
  visiblePlans: any[] = [];
  showTwoElements = false;
  showOneElement = false;

  @Input() selectedPalette: string = "Billcentrix";

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

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.showTwoElements = window.innerWidth <= 1203;
    this.showOneElement = window.innerWidth <= 789;
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