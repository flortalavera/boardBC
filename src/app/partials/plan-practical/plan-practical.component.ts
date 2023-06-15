import { Component } from '@angular/core';

@Component({
  selector: 'app-plan-practical',
  templateUrl: './plan-practical.component.html',
  styleUrls: ['./plan-practical.component.scss']
})
export class PlanPracticalComponent {
  plans: any = {};

  ngOnInit() {
    this.plans = {
      "price": ['$15', '$25', '$29'],
      "option": ['OPCIÓN 1', 'OPCIÓN 2', 'OPCIÓN 3']
    };
  }
}
