import { Component } from '@angular/core';
import { PreviewService } from '../preview.service';

@Component({
    selector: 'control-panel',
    templateUrl: './controlpanel.component.html',
    styleUrls: ['./controlpanel.component.css']

})

export class ControlPanelComponent {
    constructor(private pr: PreviewService) { }
    shadowToggle = true;
    humidity = this.pr.humidity || 0;
    temperature = this.pr.temperature || 18;
    lights = this.pr.lights || 0;
    lightsText = this.pr.lightsText || "Off";

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
        this.pr.humidity = this.humidity;
        return;
    }

    temperatureChange(event: any) {
        this.temperature = event.value;
        this.pr.temperature = this.temperature;
        return;
    }

    lightsChange(event: any) {
        this.lights = event.value;
        this.pr.lights = this.lights;
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
        this.pr.lightsText = this.lightsText;
        return;
    }
}
