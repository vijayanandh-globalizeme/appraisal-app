import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

import { UserReviewService } from "@app/core/services/";
@Component({
  selector: "app-user-feedback",
  templateUrl: "./user-feedback.page.html",
  styleUrls: ["./user-feedback.page.scss"],
})
export class UserFeedbackPage implements OnInit {
  private subscriptions: Subscription = new Subscription();
  menus: any = [{ name: "Users", href: "/main/users" }];
  user: any = [];
  selectBoxYear = [2022, 2023];
  currentYear: number = new Date().getFullYear();

  constructor(
    private activeroute: ActivatedRoute,
    private router: Router,
    private userReviewService: UserReviewService
  ) {}

  ngOnInit() {
    this.subscriptions.add(
      this.activeroute.queryParams.subscribe((params) => {
        let data = this.router.getCurrentNavigation().extras.state;
        if (data) {
          this.user = data;
          this.menus[1] = { name: data?.name, class: "active" };
          this.getAllreview();
        } else {
          this.router.navigate(["/main/users"]);
        }
      })
    );
  }

  getAllreview() {
    this.subscriptions.add(
      this.userReviewService
        .getAllreviews(this.user.uuid)
        .subscribe((resolve) => {
          console.log(resolve);
        })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
