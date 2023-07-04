import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent {
  checkboxBasicValue = false;
  checkboxPracticalValue = false;
  checkboxContempoValue = false;

  constructor(private router: Router) { }

  handleCheckboxChange(checkboxType: string) {
    if (checkboxType === 'basic') {
      this.checkboxPracticalValue = false;
      this.checkboxContempoValue = false;
    } else if (checkboxType === 'practical') {
      this.checkboxBasicValue = false;
      this.checkboxContempoValue = false;
    } else if (checkboxType === 'contempo') {
      this.checkboxBasicValue = false;
      this.checkboxPracticalValue = false;
    }
  }

  handleCreatePlanClick() {
    this.router.navigateByUrl('/plans');
  }  

}
