import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";

import {
  Users,
  ReviewQuestions,
  Question,
  UserDetails,
  SuccessResponse,
  ErrorResponse,
} from "@app/core/interfaces";
import {
  ReviewQuestionService,
  UserReviewService,
  ToastrService,
  UserService,
} from "@app/core/services";
import { QuestionModel } from "@app/core/models";

@Component({
  selector: "app-your-feedback",
  templateUrl: "./your-feedback.page.html",
  styleUrls: ["./your-feedback.page.scss"],
})
export class YourFeedbackPage implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();
  users: UserDetails;
  questions: Question[];
  reviewForm: FormGroup;
  loading = false;
  menus: any = [{ name: "Your Feedback", class: "active" }];

  constructor(
    private questionService: ReviewQuestionService,
    public formBuilder: FormBuilder,
    public toastr: ToastrService,
    private reviewService: UserReviewService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.buildForm();
    this.getUserList();
    this.getReviewQuestions();
  }

  buildForm() {
    this.reviewForm = this.formBuilder.group({
      user_id: ["", [Validators.required]],
      review: this.formBuilder.array([]),
    });
  }

  reviewFields(): FormArray {
    return this.reviewForm.get("review") as FormArray;
  }

  getUserList() {
    this.subscriptions.add(
      this.userService.getUsers().subscribe((resolve: Users) => {
        this.users = resolve.data;
      })
    );
  }

  getReviewQuestions() {
    this.subscriptions.add(
      this.questionService
        .getQuestions()
        .subscribe((resolve: ReviewQuestions) => {
          this.questions = resolve.data;
          this.questions.filter((data, index) => {
            this.questions[index] = new QuestionModel(data);
          });
          this.addFieldsToForm();
        })
    );
  }

  addFieldsToForm() {
    this.questions.forEach((element) => {
      const newField = {};
      const validator = element.isRequired ? [Validators.required] : [];
      newField[element.name] = ["", validator];
      this.reviewFields().push(this.formBuilder.group(newField));
    });
  }

  submitReview() {
    if (this.reviewForm.invalid) {
      this.toastr.basic(
        "All the fields are required. Please check and populate all the items!!",
        "warning"
      );
      return;
    }
    this.loading = true;
    this.reviewService.saveUserReview(this.reviewForm.value).subscribe(
      (data: SuccessResponse) => {
        this.reviewForm.reset();
        this.toastr.basic("Your review submitted Successfully!!!");
        this.loading = false;
      },
      (error: ErrorResponse) => {
        this.toastr.basic(error.statusText, "warning");
        this.loading = false;
      }
    );
    return;
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
