import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-onboard',
  templateUrl: './login-onboard.component.html',
  styleUrls: ['./login-onboard.component.scss']
})
export class LoginOnboardComponent {
  
  constructor(private router: Router) { }


  goToSettings() {
    this.router.navigate(['/settings']);
  }
}
