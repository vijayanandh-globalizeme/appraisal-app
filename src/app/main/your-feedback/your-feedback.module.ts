import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { YourFeedbackPageRoutingModule } from "./your-feedback-routing.module";

import { YourFeedbackPage } from "./your-feedback.page";
import { SharedModule } from "@app/core/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    YourFeedbackPageRoutingModule,
    SharedModule,
  ],
  declarations: [YourFeedbackPage],
})
export class YourFeedbackPageModule {}
