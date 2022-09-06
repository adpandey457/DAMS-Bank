import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ForgotPasswordComponent } from './home-page/login/forgot-password/forgot-password.component';
import { ForgotUIDComponent } from './home-page/login/forgot-uid/forgot-uid.component';
import { LoginComponent } from './home-page/login/login.component';
import { OpenAnAccountComponent } from './home-page/open-an-account/open-an-account.component';
import { RegisterComponent } from './home-page/register/register.component';

const routes: Routes = [
  {
    path:'homePage', component:HomePageComponent,
    children: [
      {
        path: 'login', component: LoginComponent, 
        children:[
          {path:'forgotUID', component:ForgotUIDComponent},
          {path:'forgotPassword', component:ForgotPasswordComponent}
        ]
      },
      {
        path: 'register', component:RegisterComponent
      },
      {
        path:'openAnAccount', component:OpenAnAccountComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
