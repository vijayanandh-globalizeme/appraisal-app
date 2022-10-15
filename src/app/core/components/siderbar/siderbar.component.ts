import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { StorageService, ToastrService } from "@app/core/services";

@Component({
  selector: "app-siderbar",
  templateUrl: "./siderbar.component.html",
  styleUrls: ["./siderbar.component.scss"],
})
export class SiderbarComponent {
  constructor(
    public router: Router,
    private storageService: StorageService,
    public toastr: ToastrService
  ) {}

  logout() {
    this.storageService.removeItem("accessToken");
    this.storageService.removeItem("expiredAt");
    this.storageService.removeItem("clientData");
    localStorage.clear();
    this.router.navigate(["/login"]);
    this.toastr.basic("Logged out Successfully.");
  }
}
