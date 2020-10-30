import { Injectable } from '@angular/core';
@Injectable()
export class PreviewService {
  humidity: number;
  temperature: number;
  lights: number;
  lightsText: string;
  constructor() {
  }
}