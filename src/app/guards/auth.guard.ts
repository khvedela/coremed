import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { Auth, authState } from "@angular/fire/auth";
import { map, tap } from "rxjs/operators";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private afAuth: AngularFireAuth, private authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.authService.isLoggedIn) {
      this.router.navigate(['login'])
    }
    return true;
  }

}
