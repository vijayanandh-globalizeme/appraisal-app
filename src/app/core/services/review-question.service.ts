import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpService } from "./http.service";

import { ReviewQuestions } from "@app/core/interfaces";
import { ApiRoute } from "@app/core/constants";

@Injectable({ providedIn: "root" })
export class ReviewQuestionService {
  constructor(private httpService: HttpService) {}
  getQuestions(): Observable<ReviewQuestions> {
    return <Observable<ReviewQuestions>>(
      this.httpService.get(ApiRoute.getRevQuestion, [])
    );
  }
}
