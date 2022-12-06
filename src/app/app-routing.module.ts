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
export const routes: Routes = [
  {path: "", component: HomePageComponent,},
  {path: "login", component: LoginPageComponent},
  {path: "search", component: SearchVetPageComponent},
  {path: "admin", component: BackOfficePageComponent},
  {path: "vet", component: VetPageComponent},
  {path: "vet-signup", component: VetSignupPageComponent},
  {path: 'products', component: DashbordComponent},
  {path: "profile", component: ProfilePageComponent},
  {path: "schaduler", component: SchadulerComponent},
  {path: "services", component: ServicesComponent},
  {path:'cart', component: CartComponent},
  {path: "newsletter", component: NewsletterComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
