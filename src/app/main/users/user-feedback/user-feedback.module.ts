import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { UserFeedbackPageRoutingModule } from "./user-feedback-routing.module";

import { UserFeedbackPage } from "./user-feedback.page";
import { SharedModule } from "@app/core/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserFeedbackPageRoutingModule,
    SharedModule,
  ],
  declarations: [UserFeedbackPage],
})
export class UserFeedbackPageModule {}
