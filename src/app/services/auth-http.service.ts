import { LoginBody, LoginResponse } from '../interfaces/auth';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService {

  constructor(private http: HttpClient) { }

  login(user: LoginBody): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('http://localhost:3000/api/login', {
      email: user.email,
      password: user.password
    });
  }

  signup() {}

  forgotPassword() {}
}