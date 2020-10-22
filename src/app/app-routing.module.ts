import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';


export const routing = RouterModule.forRoot([
  {path: '', component: LoginComponent},
  {path: 'test', component: AppComponent}
  
]);
