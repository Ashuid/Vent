import { Component } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
    selector: 'control-panel',
    templateUrl: './controlpanel.component.html',
    styleUrls: ['./controlpanel.component.css']

})

export class ControlPanelComponent {
    shadowToggle = true;
    humidity = "Off";
    temperature = "Off";
    lights = "Off";

    formatHumidity(value: number) {
        this.humidity = value + "%";
        return this.humidity;
    }

    formatTemperature(value: number) {
        this.temperature = value + "\u00B0";
        return this.temperature;
    }

    formatLights(value: number) {
        switch (value) {
            case 0:
                this.lights = "Off"
                break;
            case 1:
                this.lights = "Dim"
                break;
            case 2:
                this.lights = "Norm"
                break;
            case 3:
                this.lights = "Full"
                break;
            default:
                break;
        }
        return this.lights;
    }

    humidityChange(event: any) {
        this.setHumidity(event.value);
        return;
    }

    temperatureChange(event: any) {
        this.setTemperature(event.value);
        return;
    }

    lightsChange(event: any) {
        this.setLights(event.value);
        return;
    }

    setHumidity(value: number) {
        this.humidity = value + "%";
        return;
    }

    setTemperature(value: number) {
        this.temperature = value + "\u00B0";
        return;
    }

    setLights(value: number) {
        switch (value) {
            case 0:
                this.lights = "Off"
                break;
            case 1:
                this.lights = "Dim"
                break;
            case 2:
                this.lights = "Norm"
                break;
            case 3:
                this.lights = "Full"
                break;
            default:
                break;
        }
        return;
    }
}




