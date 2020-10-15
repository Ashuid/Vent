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
}
