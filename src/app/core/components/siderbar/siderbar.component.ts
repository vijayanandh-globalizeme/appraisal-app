import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { StorageService, ToastrService, AuthService } from "@app/core/services";

@Component({
  selector: "app-siderbar",
  templateUrl: "./siderbar.component.html",
  styleUrls: ["./siderbar.component.scss"],
})
export class SiderbarComponent implements OnInit {
  userRole: string;
  menus: any = [
    {
      title: "Give your feedback",
      icon: "hand-right-outline",
      route: "main/your-feedback",
      access: ["admin", "staff"],
    },
    {
      title: "Users",
      icon: "people-outline",
      route: "main/users",
      access: ["admin"],
    },
  ];
  constructor(
    public router: Router,
    private storageService: StorageService,
    public toastr: ToastrService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.storageService.getItem("clientData").then((response: any) => {
      const data = JSON.parse(response);
      this.userRole = data?.role;
    });
  }

  navtigateToPage(pageName) {
    this.router.navigate([pageName]);
  }

  logout() {
    this.authService.destorySession();
    this.router.navigate(["/login"]);
    this.toastr.basic("Logged out Successfully.");
  }
}
