import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

import { UserReviewService, ReviewQuestionService } from "@app/core/services/";
import { UserReviewsModel, UserReviewModel } from "@app/core/models";
import { environment } from "@environment/environment";
import { Question, ReviewQuestions } from "@app/core/interfaces";
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
  selectedYear: number = 2022;
  userReviews: UserReviewModel[] = [];
  isModalOpen = false;
  selectedRwItem: UserReviewModel;
  questions: any = [];

  constructor(
    private activeroute: ActivatedRoute,
    private router: Router,
    private userReviewService: UserReviewService,
    private questionService: ReviewQuestionService
  ) {}

  ngOnInit() {
    this.subscriptions.add(
      this.activeroute.queryParams.subscribe((params) => {
        let data = this.router.getCurrentNavigation().extras.state;
        if (data) {
          this.user = data;
          this.menus[1] = { name: data?.name, class: "active" };
          this.getAllreview();
          this.getReviewQuestions();
        } else {
          this.router.navigate(["/main/users"]);
        }
      })
    );
  }

  userAvatar(id) {
    return `${environment.apiURL}/user/${id}/avatar`;
  }

  setOpen(isOpen: boolean, review: UserReviewModel) {
    this.isModalOpen = isOpen;
    if (isOpen) {
      this.selectedRwItem = review;
    }
  }

  getReviewQuestions() {
    this.subscriptions.add(
      this.questionService
        .getQuestions()
        .subscribe((resolve: ReviewQuestions) => {
          let questionArry = [];
          if (resolve.data.length > 0) {
            resolve.data.forEach((data) => {
              questionArry[data.name] = data;
            });
          }
          this.questions = questionArry;
        })
    );
  }

  getLabel(data: any): string {
    return this.questions[Object.keys(data)[0]].label;
  }

  getValue(data: any): string {
    return data[Object.keys(data)[0]];
  }

  isStarValue(data: any): boolean {
    if (this.questions[Object.keys(data)[0]].type == "STAR") {
      return true;
    }
    return false;
  }

  filterSelectValue(value) {
    let selectedValue;
    this.selectedRwItem.data.forEach((currentValue) => {
      if (
        currentValue[value] &&
        currentValue[value] != undefined &&
        currentValue[value] != null
      ) {
        selectedValue = currentValue[value];
      }
    });
    return selectedValue;
  }

  getAllreview() {
    this.userReviews = [];
    this.subscriptions.add(
      this.userReviewService
        .getAllreviews(this.user.uuid, this.selectedYear)
        .subscribe((resolve: UserReviewsModel) => {
          const reviewData = new UserReviewsModel(resolve.data);
          reviewData.data.filter((reviews) => {
            this.userReviews.push(new UserReviewModel(reviews));
          });
        })
    );
  }

  changYear(year) {
    this.selectedYear = year;
    this.getAllreview();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
