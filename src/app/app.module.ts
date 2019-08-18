import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ApiService } from './api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { PlansComponent } from './plans/plans.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { RechargeComponent } from './recharge/recharge.component';
import { PaymentComponent } from './payment/payment.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    PlansComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    PrepaidComponent,
    RechargeComponent,
    PaymentComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
