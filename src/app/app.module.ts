import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Angular Material */
import { MatMenuModule } from '@angular/material/menu';

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
import { PlanComponent } from './templates/plan/plan.component';
import { MyPlansComponent } from './account-settings/plans/my-plans/my-plans.component';
import { PortalComponent } from './account-settings/portal/portal.component';
import { MyPortalComponent } from './templates/my-portal/my-portal.component';

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
    MyPortalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
