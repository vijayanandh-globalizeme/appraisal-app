import { Component, OnInit, Input } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-star-rating",
  templateUrl: "./star-rating.component.html",
  styleUrls: ["./star-rating.component.scss"],
})
export class StarRatingComponent {
  selectValue: number;
  @Input() inputForm = FormGroup;
  @Input() name: string;

  constructor() {}

  getValue(value) {
    this.selectValue = value;
  }
}
