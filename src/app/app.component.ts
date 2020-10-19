import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'Vent';
  shadowToggle = true;

  formatHumidityLabel(value: number) {
    return value + "%";
  }

  formatTemperatureLabel(value: number) {
    return value + "\u00B0";
  }

  formatLightsLabel(value: number) {
    var text = "";
    switch (value) {
      case 0:
        text = "Off"
        break;
      case 1: 
        text = "Dim"
        break;
      case 2:
        text = "Norm"
        break;
      case 3:
        text = "Full"
        break;
    }
    return text;
  }
}

