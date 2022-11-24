import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
  styleUrls: ["./breadcrumb.component.scss"],
})
export class BreadcrumbComponent {
  @Input() menus: any;
  constructor(private router: Router) {}

  goToPage(href) {
    this.router.navigate([href]);
  }
}
