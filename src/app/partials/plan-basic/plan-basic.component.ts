import { Component } from '@angular/core';

@Component({
  selector: 'app-plan-basic',
  templateUrl: './plan-basic.component.html',
  styleUrls: ['./plan-basic.component.scss']
})
export class PlanBasicComponent {
  plans: any = {};

  ngOnInit() {
    this.plans = {
      "title": ['Plan 1', 'Plan 2', 'Plan 3'],
      "option": ['Opción 1', 'Opción 2', 'Opción 3']
    };
  }

}
