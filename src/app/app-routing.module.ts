
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ControlPanelComponent } from './control-panel/controlpanel.component';
import {AboutComponent} from "./about/about.component";
import {PreviewComponent} from './preview/preview.component';
const appRoutes: Routes = [
  { path: 'controlpanel', component: ControlPanelComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login',        component: LoginComponent},
  { path: 'preview',       component: PreviewComponent},
  { path: '',   redirectTo: '/login', pathMatch: 'full' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
