import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { BackOfficePageComponent } from './back-office-page/back-office-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { VetPageComponent } from './vet-page/vet-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import { SearchVetPageComponent } from './search-vet-page/search-vet-page.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { VetSignupPageComponent } from './vet-signup-page/vet-signup-page.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { DashbordComponent } from './dashbord/dashbord.component';
import { ProfileComponent } from './profile/profile.component';
import { SchadulerComponent } from './schaduler/schaduler.component';
import { ServicesComponent } from './services/services.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { HeaderComponent } from './header/header.component';
import {MatMenuModule} from "@angular/material/menu";
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatRadioModule} from "@angular/material/radio";
import {MatSliderModule} from "@angular/material/slider";
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatTableModule} from "@angular/material/table";
import { CartComponent } from './cart/cart.component';

import { FilterPipe } from './dashbord/filter.pipe';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,

    HomePageComponent,
    ProfilePageComponent,
    BackOfficePageComponent,
    LoginPageComponent,
    VetPageComponent,
    SearchVetPageComponent,
    VetSignupPageComponent,
    DashbordComponent,
    ProfileComponent,
    SchadulerComponent,
    ServicesComponent,
    NewsletterComponent,
    HeaderComponent,
    SidebarComponent,
    CartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    FormsModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatGridListModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule,
    MatSliderModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatTableModule,
  ],
  exports:[
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
