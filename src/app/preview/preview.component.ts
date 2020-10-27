import { Component, OnInit } from '@angular/core';
import { PreviewService } from '../preview.service';
@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  constructor(private pr: PreviewService) { }
  humidity = this.pr.humidity;
  temperature = this.pr.temperature;
  lights = this.pr.lights;
  ngOnInit(): void {
  }
}