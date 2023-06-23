import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginOnboardComponent } from './login-onboard/login-onboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PreferencesComponent } from './account-settings/preferences/preferences.component';
import { PlansComponent } from './account-settings/plans/plans.component';
import { MyPlansComponent } from './account-settings/plans/my-plans/my-plans.component';
import { PortalComponent } from './account-settings/portal/portal.component';
import { MyPortalsComponent } from './account-settings/portal/my-portals/my-portals.component';
import { PortalCustomizationComponent } from './account-settings/portal-customization/portal-customization.component';
import { FAQsComponent } from './faqs/faqs.component';
import { FAQsHoversComponent } from './faqs-hovers/faqs-hovers.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { path: "", component: WelcomeComponent },
  { path: "login", component: LoginOnboardComponent },
  { path: "settings", component: AccountSettingsComponent },
  { path: "preferences", component: PreferencesComponent},
  { path: "plans", component: PlansComponent },
  { path: "my-plans", component: MyPlansComponent},
  { path: "portal", component: PortalComponent },
  { path: "my-portals", component: MyPortalsComponent },
  { path: "personalize", component: PortalCustomizationComponent},
  { path: "faqs", component: FAQsComponent },  
  { path: "faqs-hover", component: FAQsHoversComponent },
  { path: "reports", component: ReportsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }