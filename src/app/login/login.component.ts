import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { PasswordValidator } from '../passwordValidator';
import * as bcrypt from 'bcryptjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: FormGroup;
  constructor(
    fb: FormBuilder,
    private _loginService: LoginService,
    private router: Router
  ) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: [
        '',
        Validators.compose([
          Validators.required,
          PasswordValidator.cannotContainSpace,
        ]),
      ],
    });
  }

  login() {
    const userData = {
      username: this.form.controls['username'].value,
      password: this.form.controls['password'].value,
    };

    this._loginService.userlogin(userData.username).subscribe((data) => {
      let response: any = data;
      console.log(response);
      bcrypt.compare(userData.password, response[0].password, (err, Data) => {
        console.log('fdfdfr', Data);
        if (Data) {
          this.router.navigate(['controlpanel/' + response[0].id]);
        } else {
          alert('You have entered wrong credentials');
        }
      });
    });
  }
  register() {
    this.router.navigate(['register']);
  }
}
