import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth, authState } from "@angular/fire/auth";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authFire: Auth) {}

  canActivate(): Observable<boolean> {
    return authState(this.authFire).pipe(
      map(u => {
        return !!u;
      }),
      tap(isUserAuthenticated => {
        if (!isUserAuthenticated) {
          this.router.navigate(['login'])
        }
      })
    )
  }

}
