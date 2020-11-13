import { Component } from '@angular/core';
import { PreviewService } from '../preview.service';
import { SettingsService } from '../services/settings.service';

@Component({
    selector: 'control-panel',
    templateUrl: './controlpanel.component.html',
    styleUrls: ['./controlpanel.component.css'],
    providers: [SettingsService]

})

export class ControlPanelComponent {
    constructor(private settingsService: SettingsService) { }
    shadowToggle = true;
    humidity = 0;
    temperature = 18;
    lights = 0;
    lightsText = "Off";
    submitted = false;

    settings = {
        temperature: this.temperature,
        humidity: this.humidity,
        lights: this.lightsText
    };

    formatHumidity(value: number) {
        this.humidity = value;
        return this.humidity + "%";
    }

    formatTemperature(value: number) {
        this.temperature = value;
        return this.temperature + "\u00B0";
    }

    formatLights(value: number) {
        switch (value) {
            case 0:
                this.lightsText = "Off"
                break;
            case 1:
                this.lightsText = "Dim"
                break;
            case 2:
                this.lightsText = "Norm"
                break;
            case 3:
                this.lightsText = "Full"
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
                this.lightsText = "Off"
                break;
            case 1:
                this.lightsText = "Dim"
                break;
            case 2:
                this.lightsText = "Norm"
                break;
            case 3:
                this.lightsText = "Full"
                break;
            default:
                this.lightsText = "Error"
                break;
        }
        return;
    }
    saveSettings(){
        const data = {
            temperature: this.temperature,
            humidity: this.humidity,
            lights: this.lights,
            uid: 1
        }
        this.settingsService.create(data)
        .subscribe(
            response => {
                console.log(response);
                this.submitted = true;
            },
            error => {
                console.log(error);
            }
        );
    }
}
