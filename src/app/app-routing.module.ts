import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginOnboardComponent } from './login-onboard/login-onboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PreferencesComponent } from './account-settings/preferences/preferences.component';
import { PlansComponent } from './account-settings/plans/plans.component';
import { MyPlansComponent } from './account-settings/plans/my-plans/my-plans.component';
import { PortalComponent } from './account-settings/portal/portal.component';

const routes: Routes = [
  { path: "", component: WelcomeComponent },
  { path: "login", component: LoginOnboardComponent },
  { path: "settings", component: AccountSettingsComponent },
  { path: "preferences", component: PreferencesComponent},
  { path: "plans", component: PlansComponent },
  { path: "my-plans", component: MyPlansComponent},
  { path: "portal", component: PortalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }