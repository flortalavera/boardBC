import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-plans',
  templateUrl: './my-plans.component.html',
  styleUrls: ['./my-plans.component.scss']
})
export class MyPlansComponent {

  constructor(private router: Router) { }

  handleCreatePlanClick() {
    this.router.navigateByUrl('/plans');
  }
  
}
