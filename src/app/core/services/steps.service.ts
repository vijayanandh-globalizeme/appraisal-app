import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { StepModel } from "../models/step.model";
import { tap } from "rxjs/operators";

const STEPS = [];

@Injectable({
  providedIn: "root",
})
export class StepsService {
  steps$: any = [];
  currentStep$: any = [];

  private _resetStepper = <Subject<any>>new Subject();
  resetStepper = this._resetStepper.asObservable();

  constructor() {}

  pushStepCount(count) {
    this.steps$ = [];
    for (let index = 0; index < count; index++) {
      this.steps$.push({
        stepIndex: index + 1,
        isComplete: false,
      });
    }
  }

  setCurrentStep(step: StepModel): void {
    this.currentStep$.next(step);
  }

  moveToNextStep(index): void {
    this.steps$[index - 1].isComplete = true;
    if (index < this.steps$.length) {
      this.currentStep$ = this.steps$[index];
    }
  }

  moveToPrevStep(index): void {
    --index;
    this.currentStep$ = this.steps$[index - 1];
    this.steps$[index - 1].isComplete = false;
  }

  isLastStep(): boolean {
    console.log("this.currentStep$.value.stepIndex");
    console.log(this.currentStep$.stepIndex);
    console.log(this.steps$.length);
    return this.currentStep$.value.stepIndex === this.steps$.length;
  }

  resetStepperCount() {
    this._resetStepper.next();
  }
}
