import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../services/register';
import { Router } from '@angular/router';
import { PasswordValidator } from '../passwordValidator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  constructor(
    fb: FormBuilder,
    private _registerService: RegisterService,
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
  ngOnInit(): void {}
  register() {
    const userData = {
      username: this.form.controls['username'].value,
      password: this.form.controls['password'].value,
    };
    this._registerService.userRegistration(userData).subscribe(
      (data) => {
        let response: any = data;
        console.log(response.password)
        if (response.username === userData.username) {
         alert('Registration Success. Please Login to user Services')
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
