import { Injectable } from "@angular/core";
import {
  CanActivate,
  CanActivateChild,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AuthService } from "@app/core/services";

@Injectable({
  providedIn: "root",
})
export class GuestGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authUser;
  }

  private get authUser() {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      return this.authService.validateToken().pipe(
        map((res) => {
          this.router.navigate(["/main"]);
          return false;
        })
      );
    }
    return true;
  }
}
