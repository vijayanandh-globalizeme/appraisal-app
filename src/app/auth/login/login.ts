import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { environment } from "@environment/environment";
import { Subscription } from "rxjs";
import { first } from "rxjs/operators";

import { AuthService, StorageService } from "@app/core/services";
@Component({
  selector: "page-login",
  templateUrl: "login.html",
  styleUrls: ["./login.scss"],
})
export class LoginPage implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();

  constructor(
    public router: Router,
    private activeroute: ActivatedRoute,
    private authService: AuthService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.activeroute.queryParams.subscribe((params) => {
        if (params && params.access_token && params.expires_at) {
          this.refreshUserData(params);
        }
      })
    );
  }

  gotoMSLogin() {
    this.destorySession();
    window.location.href = `${environment.apiURL}/oauth`;
  }

  refreshUserData(params) {
    this.storageService.setItem("accessToken", params.access_token);
    this.storageService.setItem("expiredAt", params.expires_at);

    this.authService
      .getUserData()
      .pipe(first())
      .subscribe(
        (response) => {
          if (response.email) {
            this.storageService.setItem("clientData", JSON.stringify(response));
            this.router.navigate(["/main"]);
          }
        },
        (error) => {
          console.log("error");
          console.log(error);
        }
      );
  }

  destorySession() {
    this.storageService.removeItem("accessToken");
    this.storageService.removeItem("expiredAt");
    this.storageService.removeItem("clientData");
    localStorage.clear();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
