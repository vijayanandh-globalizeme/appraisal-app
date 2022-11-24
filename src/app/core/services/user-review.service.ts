import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpService } from "./http.service";

import { Users, ReviewQuestions } from "@app/core/interfaces";
import { ApiRoute } from "@app/core/constants";

@Injectable({ providedIn: "root" })
export class UserReviewService {
  constructor(private httpService: HttpService) {}
  saveUserReview(data) {
    return this.httpService.post(ApiRoute.saveReview, data);
  }
  getAllreviews(id: string) {
    return this.httpService.get(ApiRoute.getReview + "/" + id, []);
  }
}
