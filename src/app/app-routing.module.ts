import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginOnboardComponent } from './login-onboard/login-onboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const routes: Routes = [
  { path: "", component: WelcomeComponent },
  { path: "login", component: LoginOnboardComponent },
  { path: "settings", component: AccountSettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }