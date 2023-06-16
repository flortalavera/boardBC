import { Component } from '@angular/core';

@Component({
  selector: 'app-plan-contempo',
  templateUrl: './plan-contempo.component.html',
  styleUrls: ['./plan-contempo.component.scss']
})
export class PlanContempoComponent {
  plans: any = {};

  ngOnInit() {
    this.plans = {
      "title": ['PLAN 1', 'PLAN 2', 'PLAN 3'],
      "price": ['$15', '$25', '$29'],
      "image": [
        'assets/images/botella.png',
        'assets/images/botellasx3.png',
        'assets/images/botellasx2.png'
      ]
    };
  }
}
