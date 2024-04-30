import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { AboutBannerComponent } from './components/about-banner/about-banner.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AngularFireModule } from '@angular/fire/compat';

import { ServiceComponent } from './pages/service/service.component';
import { TeamComponent } from './pages/team/team.component';
import { TestiminialComponent } from './pages/testiminial/testiminial.component';
import { BookingComponent } from './pages/booking/booking.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingformComponent } from './components/bookingform/bookingform.component';
import { MapComponent } from './components/map/map.component';
import { FormComponent } from './pages/form/form.component';

import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient, withFetch } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    AboutBannerComponent,
    AboutPageComponent,
    ContactComponent,
    ServiceComponent,
    TeamComponent,
    TestiminialComponent,
    BookingComponent,
    SigninComponent,
    SignupComponent,
    BookingformComponent,
    MapComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,HttpClientModule, AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAYiLAsw2MEZg5V8uetYgcGGwKYusEptYk',
      authDomain: 'openaitool-cdgi.firebaseapp.com',
      databaseURL:
        'https://openaitool-cdgi-default-rtdb.asia-southeast1.firebasedatabase.app',
      projectId: 'openaitool-cdgi',
      storageBucket: 'openaitool-cdgi.appspot.com',
      messagingSenderId: '564904448359',
      appId: '1:564904448359:web:e3f3eb7a9bd7d628d69fc2',
      measurementId: 'G-DJKHZCC12X',
    }),
    AppRoutingModule,ReactiveFormsModule
  ],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent]
})
export class AppModule { }
