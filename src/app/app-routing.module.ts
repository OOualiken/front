import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {SearchVetPageComponent} from "./search-vet-page/search-vet-page.component";
import {BackOfficePageComponent} from "./back-office-page/back-office-page.component";
import {VetPageComponent} from "./vet-page/vet-page.component";
import {VetSignupPageComponent} from "./vet-signup-page/vet-signup-page.component";
import {DashbordComponent} from "./dashbord/dashbord.component";
import {ProfilePageComponent} from "./profile-page/profile-page.component";
import {SchadulerComponent} from "./schaduler/schaduler.component";
import {ServicesComponent} from "./services/services.component";
import {NewsletterComponent} from "./newsletter/newsletter.component";
import {CartComponent} from "./cart/cart.component";
import {AuthGuardGuard} from "./guard/auth-guard/auth-guard.guard";
export const routes: Routes = [
  {path: "", component: HomePageComponent,},
  {path: "login", component: LoginPageComponent},
  {path: "search", component: SearchVetPageComponent},
  {path: "admin", component: BackOfficePageComponent, canActivate: [AuthGuardGuard]},
  {path: "vet", component: VetPageComponent, canActivate: [AuthGuardGuard]},
  {path: "vet-signup", component: VetSignupPageComponent},
  {path: 'products', component: DashbordComponent},
  {path: "profile", component: ProfilePageComponent, canActivate: [AuthGuardGuard]},
  {path: "schaduler", component: SchadulerComponent, canActivate: [AuthGuardGuard]},
  {path: "services", component: ServicesComponent, canActivate: [AuthGuardGuard]},
  {path:'cart', component: CartComponent},
  {path: "newsletter", component: NewsletterComponent, canActivate: [AuthGuardGuard]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
