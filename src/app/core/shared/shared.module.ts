import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import {
  StarRatingComponent,
  HeaderComponent,
  SiderbarComponent,
} from "@app/core/components/";

@NgModule({
  declarations: [StarRatingComponent, HeaderComponent, SiderbarComponent],
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule],
  exports: [StarRatingComponent, HeaderComponent, SiderbarComponent],
})
export class SharedModule {}
