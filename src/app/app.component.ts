import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  

})

export class AppComponent {
  title = 'Vent';
  shadowToggle = true;
constructor(private router: Router){}
  previewValue(){
this.router.navigate(['preview'])
  }
}

