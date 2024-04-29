import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServiceComponent } from './pages/service/service.component';
import { TestiminialComponent } from './pages/testiminial/testiminial.component';
import { BookingComponent } from './pages/booking/booking.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FormComponent } from './pages/form/form.component';

const routes: Routes = [ { path: '', redirectTo: '/home', pathMatch: 'full' },
 {
   path: 'signin',
   component: SigninComponent,
 },
 {
   path: 'signup',
   component: SignupComponent,
 },
 {
  path: 'login',
  component: FormComponent,
},
{
  path: 'home',
  component: HomeComponent,
},
{ path: 'about', component: AboutComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'service', component: ServiceComponent  },
{ path: 'booking', component: BookingComponent  },
{ path: 'testimonial', component: TestiminialComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
