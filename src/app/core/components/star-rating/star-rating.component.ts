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
export class StarRatingComponent implements OnInit {
  selectValue: number;
  @Input() selectedValue: number = 0;
  @Input() inputForm = FormGroup;
  @Input() name: string;
  @Input() isDisabled: boolean = false;

  constructor() {}

  ngOnInit() {}

  getValue(value) {
    if (!this.isDisabled) {
      this.selectValue = value;
    }
  }

  checkMathValue(value, number) {
    return Math.round(value) >= number ? "star-sharp" : "star-outline";
  }
}
