import { LoginComponent } from './login/login.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "login"},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'employee-info', component: EmployeeInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
