import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { comparePasswords } from 'src/app/helpers/comparePassword';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }

  signupForm: FormGroup = new FormGroup({
    email: new FormControl(null, Validators.email),
    password: new FormControl(),
    confirmPassword: new FormControl(),
  });

  ngOnInit(): void {
  }

  submitForm() {
    const isPasswordEqual = comparePasswords(this.signupForm.value.password, this.signupForm.value.confirmPassword);

    if (!isPasswordEqual) {
      console.error('Passwords are not equal');
    }
  }

}
