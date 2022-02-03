import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthStoreService {
  constructor() { }

  get acessToken(): string | null {
    return localStorage.getItem('token');
  }

  set acessToken(token) {
    token ? localStorage.setItem('token', token) : localStorage.clear();
  }

}

