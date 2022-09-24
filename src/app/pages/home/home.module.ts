import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { HomePageRoutingModule } from "./home-routing.module";

import { HomePage } from "./home.page";

import { ScheduleModule } from "../schedule/schedule.module";
import { SessionDetailModule } from "../session-detail/session-detail.module";
import { SpeakerDetailModule } from "../speaker-detail/speaker-detail.module";
import { SpeakerListModule } from "../speaker-list/speaker-list.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ScheduleModule,
    SessionDetailModule,
    SpeakerDetailModule,
    SpeakerListModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
