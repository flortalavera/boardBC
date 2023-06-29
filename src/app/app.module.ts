import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

/* Angular Material */
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './common/footer/footer.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { LoginOnboardComponent } from './login-onboard/login-onboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { MenuComponent } from './common/menu/menu.component';
import { PreferencesComponent } from './account-settings/preferences/preferences.component';
import { PlansComponent } from './account-settings/plans/plans.component';
import { PlanComponent } from './partials/plan/plan.component';
import { MyPlansComponent } from './account-settings/plans/my-plans/my-plans.component';
import { PortalComponent } from './account-settings/portal/portal.component';
import { MyPortalComponent } from './partials/my-portal/my-portal.component';
import { MyPortalsComponent } from './account-settings/portal/my-portals/my-portals.component';
import { PortalCustomizationComponent } from './account-settings/portal-customization/portal-customization.component';
import { BasicComponent } from './plans-preview/basic/basic.component';
import { PlanBasicComponent } from './partials/plan-basic/plan-basic.component';
import { PracticalComponent } from './plans-preview/practical/practical.component';
import { PlanPracticalComponent } from './partials/plan-practical/plan-practical.component';
import { ContempoComponent } from './plans-preview/contempo/contempo.component';
import { PlanContempoComponent } from './partials/plan-contempo/plan-contempo.component';
import { FAQsComponent } from './faqs/faqs.component';
import { FAQsHoversComponent } from './faqs-hovers/faqs-hovers.component';
import { ReportsComponent } from './reports/reports.component';
import { SliderComponent } from './partials/slider/slider.component';
import { MenuPreviewComponent } from './common/menu-preview/menu-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    LoginOnboardComponent,
    AccountSettingsComponent,
    MenuComponent,
    PreferencesComponent,
    PlansComponent,
    PlanComponent,
    MyPlansComponent,
    PortalComponent,
    MyPortalComponent,
    MyPortalsComponent,
    PortalCustomizationComponent,
    BasicComponent,
    PlanBasicComponent,
    PracticalComponent,
    PlanPracticalComponent,
    ContempoComponent,
    PlanContempoComponent,
    FAQsComponent,
    FAQsHoversComponent,
    ReportsComponent,
    SliderComponent,
    MenuPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatDialogModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
