import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, Validators.email),
    password: new FormControl(),
  });

  constructor() { }

  ngOnInit(): void {}

  submitForm() {
    console.log('this.loginForm', this.loginForm.value);
  }

}
