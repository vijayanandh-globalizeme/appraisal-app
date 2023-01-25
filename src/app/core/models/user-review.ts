import { DatePipe } from "@angular/common";

export class UserReviewsModel {
  data: UserReviewModel[];

  constructor(data) {
    this.data = data || [];
  }
}

export class UserReviewModel {
  comments: string;
  created_at: string;
  data: any;
  total: number;
  pipe = new DatePipe("en-US");

  constructor(data) {
    this.comments = data.comments || "";
    this.created_at = this.pipe.transform(data.created_at, "fullDate") || "";
    this.data = JSON.parse(data.data) || "";
    this.total = data.total || "";
  }
}
