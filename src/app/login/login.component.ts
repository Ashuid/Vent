import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

import { PasswordValidator } from '../passwordValidator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  form: FormGroup;        

  constructor(fb: FormBuilder, private _loginService: LoginService){        

      this.form = fb.group({
          username:['',Validators.required ],
    password:['',Validators.compose([Validators.required, 
      PasswordValidator.cannotContainSpace])]            
      })
  }

  login(){        
var result = this._loginService.login(this.form.controls['username'].value,
 this.form.controls['password'].value); 
 if(result){
   console.log('test is passed');
 }

      if(!result){
          this.form.controls['password'].setErrors({
              invalidLogin: true 
          });
      }        
  }
}
