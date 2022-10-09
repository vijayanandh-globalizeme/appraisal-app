import { Injectable } from "@angular/core";
import {
  CanActivate,
  CanActivateChild,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { of, Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthService } from "@app/core/services";

@Injectable({
  providedIn: "root",
})
export class AppGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authUser;
  }

  private get authUser() {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    if (!accessToken || accessToken == null || accessToken == undefined) {
      this.router.navigate(["/login"]);
      return false;
    }
    return this.authService.validateToken().pipe(
      catchError((err) => {
        this.router.navigate(["/login"]);
        return of(false);
      })
    );
    return true;
  }
}
