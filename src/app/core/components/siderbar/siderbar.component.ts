import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { StorageService, ToastrService, AuthService } from "@app/core/services";

@Component({
  selector: "app-siderbar",
  templateUrl: "./siderbar.component.html",
  styleUrls: ["./siderbar.component.scss"],
})
export class SiderbarComponent {
  constructor(
    public router: Router,
    private storageService: StorageService,
    public toastr: ToastrService,
    private authService: AuthService
  ) {}

  navtigateToPage(pageName) {
    this.router.navigate([pageName]);
  }

  logout() {
    this.authService.destorySession();
    this.router.navigate(["/login"]);
    this.toastr.basic("Logged out Successfully.");
  }
}
