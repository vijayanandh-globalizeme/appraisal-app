import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { Subscription } from "rxjs";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IonContent } from "@ionic/angular";

import {
  Users,
  ReviewQuestions,
  Question,
  UserDetails,
  SuccessResponse,
  ErrorResponse,
  QCategories,
  QCategory,
} from "@app/core/interfaces";
import {
  ReviewQuestionService,
  UserReviewService,
  ToastrService,
  UserService,
} from "@app/core/services";
import { QuestionModel } from "@app/core/models";
import { StepsService } from "@app/core/services/steps.service";
import { StepModel } from "@app/core/models/step.model";

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
  currentStep: StepModel;
  questionCat: QCategory[];
  showQuestion: boolean = false;
  selectedCatIndex: number = 1;
  @ViewChild("pageTop") pageTop: IonContent;

  constructor(
    private questionService: ReviewQuestionService,
    public formBuilder: FormBuilder,
    public toastr: ToastrService,
    private reviewService: UserReviewService,
    private userService: UserService,
    private stepsService: StepsService
  ) {}

  ngOnInit() {
    this.buildForm();
    this.getUserList();
    this.getReviewQuestions();
  }

  triggerEvent() {
    if (!this.showQuestion) this.showQuestion = true;
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
      this.questionService.getQuestions().subscribe((resolve: any) => {
        this.questions = resolve.data;
        this.questionCat = resolve.category;
        this.stepsService.pushStepCount(this.questionCat.length);
        this.questions.filter((data, index) => {
          this.questions[index] = new QuestionModel(data);
        });
        this.currentStep = this.stepsService.steps$[0];
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

  triggerForm(type) {
    if (
      type == "next" &&
      this.currentStep.stepIndex != this.questionCat.length
    ) {
      this.stepsService.moveToNextStep(this.currentStep.stepIndex);
      this.currentStep = this.stepsService.currentStep$;
    }
    if (type == "previous") {
      this.stepsService.moveToPrevStep(this.currentStep.stepIndex);
      this.currentStep = this.stepsService.currentStep$;
    }
    this.pageTop.scrollToTop();
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
        this.currentStep = this.stepsService.steps$[0];
        this.toastr.basic("Your review submitted Successfully!!!");
        this.loading = false;
        this.pageTop.scrollToTop();
        this.stepsService.pushStepCount(this.questionCat.length);
        this.stepsService.resetStepperCount();
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
