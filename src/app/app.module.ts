import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginService } from "./services/login.service";
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
import { MatSliderModule } from '@angular/material/slider';
import { ToggleComponent } from './toggle/toggle.component';
import { SettingsService } from './services/settings.service';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ControlPanelComponent,
    AboutComponent,
    PreviewComponent,
    ToggleComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatSliderModule,
    HttpClientModule,

  ],
  providers: [LoginService,
  QuestionsService, PreviewService,
  SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
