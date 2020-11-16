import { Component, OnInit } from '@angular/core';
import { PreviewService } from '../preview.service';
import { SettingsService } from '../services/settings.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'control-panel',
  templateUrl: './controlpanel.component.html',
  styleUrls: ['./controlpanel.component.css'],
  providers: [SettingsService],
})
export class ControlPanelComponent implements OnInit {
  constructor(
    private settingsService: SettingsService,
    private route: ActivatedRoute
  ) {}
  shadowToggle = true;
  humidity = 0;
  temperature = 18;
  lights = 0;
  lightsText = 'Off';
  submitted = false;

  settings: any = {
    temperature: this.temperature,
    humidity: this.humidity,
    lights: this.lights,
  };
  uid;
  ngOnInit() {
    this.route.params.forEach((param) => (this.uid = param['id']));
    // this.retrieveSettings();
    this.SettingByUId(this.uid);
  }

  formatHumidity(value: number) {
    this.humidity = value;
    return this.humidity + '%';
  }

  formatTemperature(value: number) {
    this.temperature = value;
    return this.temperature + '\u00B0';
  }

  formatLights(value: number) {
    switch (value) {
      case 0:
        this.lightsText = 'Off';
        break;
      case 1:
        this.lightsText = 'Dim';
        break;
      case 2:
        this.lightsText = 'Norm';
        break;
      case 3:
        this.lightsText = 'Full';
        break;
      default:
        break;
    }
    return this.lightsText;
  }

  humidityChange(event: any) {
    this.humidity = event.value;
    return;
  }

  temperatureChange(event: any) {
    this.temperature = event.value;
    return;
  }

  lightsChange(event: any) {
    this.lights = event.value;
    switch (event.value) {
      case 0:
        this.lightsText = 'Off';
        break;
      case 1:
        this.lightsText = 'Dim';
        break;
      case 2:
        this.lightsText = 'Norm';
        break;
      case 3:
        this.lightsText = 'Full';
        break;
      default:
        this.lightsText = 'Error';
        break;
    }
    return;
  }

  saveSettings() {
    const data = {
      temperature: this.temperature,
      humidity: this.humidity,
      light: this.lights,
      uid: this.uid,
    };
    this.settingsService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
        alert('You Setting has been Saved');
        this.SettingByUId(this.uid);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  retrieveSettings() {
    this.settingsService.getAll().subscribe(
      (data) => {
        this.settings = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  deleteSettings(id) {
    id = this.uid;
    this.settingsService.delete(id).subscribe(
      (response) => {
        console.log(response);
        this.SettingByUId(id);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  SettingByUId(id) {
    id = this.uid;
    this.settingsService.getbyId(id).subscribe(
      (data) => {
        this.settings = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  useSettings(data) {
    this.humidity = data.humidity;
    this.temperature = data.temperature;
    this.lights = data.light;
    this.formatLights(data.light);
    //this.lightsChange(light)
  }
}
