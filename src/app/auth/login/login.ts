import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { environment } from "@environment/environment";
import { Subscription } from "rxjs";
import { first } from "rxjs/operators";

import { ErrorResponse } from "@app/core/interfaces";
import { AuthService, StorageService, ToastrService } from "@app/core/services";
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
    private storageService: StorageService,
    private toastr: ToastrService
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
    this.authService.destorySession();
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
        (error: ErrorResponse) => {
          this.toastr.basic(error.statusText, "warning");
        }
      );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
