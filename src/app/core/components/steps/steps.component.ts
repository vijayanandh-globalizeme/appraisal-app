import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";
import { StepModel } from "@app/core/models";
import { StepsService } from "@app/core/services/steps.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-steps",
  templateUrl: "./steps.component.html",
  styleUrls: ["./steps.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class StepsComponent implements OnInit {
  steps: Observable<StepModel[]>;
  @Input() currentStep;
  @Input() category;

  constructor(private stepsService: StepsService) {}

  ngOnInit(): void {
    this.steps = this.stepsService.steps$;
    this.stepsService.resetStepper.subscribe((message) => {
      this.steps = this.stepsService.steps$;
    });
  }

  onStepClick(step: StepModel) {
    // this.stepsService.setCurrentStep(step);
  }
}
