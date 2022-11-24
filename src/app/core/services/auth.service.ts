import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpService } from "./http.service";
import { map, tap } from "rxjs/operators";

import { UserProfile } from "@app/core/interfaces";
import { ApiRoute } from "@app/core/constants";
import { StorageService } from "@app/core/services";

@Injectable({ providedIn: "root" })
export class AuthService {
  userProfile = new BehaviorSubject<UserProfile>(null);

  constructor(
    private httpService: HttpService,
    private storageService: StorageService
  ) {}
  getUserData(): Observable<UserProfile> {
    return <Observable<UserProfile>>(
      this.httpService.get(ApiRoute.usersProfile, []).pipe(
        tap((user: UserProfile) => {
          this.userProfile.next(user);
        })
      )
    );
  }

  validateToken() {
    return this.httpService.post(ApiRoute.validateToken, []).pipe(
      map(
        (res) => true,
        (error) => false
      )
    );
  }

  validateAccess() {
    return this.httpService.post(ApiRoute.validateAccess, []).pipe(
      map(
        (res) => true,
        (error) => false
      )
    );
  }

  destorySession() {
    this.storageService.removeItem("accessToken");
    this.storageService.removeItem("expiredAt");
    this.storageService.removeItem("clientData");
    localStorage.clear();
  }
}
