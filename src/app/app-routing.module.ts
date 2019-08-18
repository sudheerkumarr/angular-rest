import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PlansComponent } from './plans/plans.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RechargeComponent } from './recharge/recharge.component';
import { PaymentComponent } from './payment/payment.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '', redirectTo: '/plans', pathMatch: 'full'},
  { path: 'prepaid', component: PrepaidComponent },
  { path: 'plans', component: PlansComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'plans', component: PlansComponent},
  { path: 'recharge', component: RechargeComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'logout', component: LogoutComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
