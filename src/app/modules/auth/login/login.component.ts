import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthHttpService } from 'src/app/services/auth-http.service';
import { AuthStoreService } from 'src/app/services/store/auth-store.service';
import { Router } from '@angular/router';

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

  constructor(
    private authHttpService: AuthHttpService,
    private router: Router,
    private authStore: AuthStoreService
  ) { }

  ngOnInit(): void {}

  submitForm() {

    const user = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }

    this.authHttpService.login(user).subscribe((result) => {
      if (result.user.token) {
        this.authStore.acessToken = result.user.token;
        localStorage.setItem('username', result.user.name);
        this.router.navigate(['/content']);
      } else {
        this.authStore.acessToken = null;
      }
    })
  }

}
