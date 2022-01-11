import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularSvgIconModule } from 'angular-svg-icon';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    AngularSvgIconModule
  ]
})
export class AuthModule { }
