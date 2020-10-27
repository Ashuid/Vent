import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginService } from "./login.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './login/login.component';
import { ControlPanelComponent } from './control-panel/controlpanel.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { QuestionsService } from './about/questions.service';
import { PreviewComponent } from './preview/preview.component';
import {PreviewService} from './preview.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ControlPanelComponent,
    AboutComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [LoginService,
  QuestionsService, PreviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
