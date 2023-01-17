import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import {
  StarRatingComponent,
  HeaderComponent,
  SiderbarComponent,
  BreadcrumbComponent,
  StepsComponent,
} from "@app/core/components/";

@NgModule({
  declarations: [
    StarRatingComponent,
    HeaderComponent,
    SiderbarComponent,
    BreadcrumbComponent,
    StepsComponent,
  ],
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule],
  exports: [
    StarRatingComponent,
    HeaderComponent,
    SiderbarComponent,
    BreadcrumbComponent,
    StepsComponent,
  ],
})
export class SharedModule {}
