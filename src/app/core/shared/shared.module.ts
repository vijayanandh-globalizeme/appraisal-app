import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import {
  StarRatingComponent,
  HeaderComponent,
  SiderbarComponent,
  BreadcrumbComponent,
} from "@app/core/components/";

@NgModule({
  declarations: [
    StarRatingComponent,
    HeaderComponent,
    SiderbarComponent,
    BreadcrumbComponent,
  ],
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule],
  exports: [
    StarRatingComponent,
    HeaderComponent,
    SiderbarComponent,
    BreadcrumbComponent,
  ],
})
export class SharedModule {}
