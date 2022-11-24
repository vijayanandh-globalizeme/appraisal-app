import { Injectable } from "@angular/core";
import {
  Router,
  CanActivateChild,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { of, Observable } from "rxjs";
import { catchError } from "rxjs/operators";

import { AuthService } from "@app/core/services";

@Injectable({
  providedIn: "root",
})
export class RolesGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private authService: AuthService) {}

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.userAccess;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.userAccess;
  }

  private get userAccess() {
    return this.authService.validateAccess().pipe(
      catchError((err) => {
        this.router.navigate(["/"]);
        return of(false);
      })
    );
  }
}
