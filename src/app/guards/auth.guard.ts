import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';

import { AuthStoreService } from '../services/store/auth-store.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private authStoreService: AuthStoreService) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if (this.authStoreService.acessToken) {
      return true;
    } else {
      return false;
    }
  }
}
