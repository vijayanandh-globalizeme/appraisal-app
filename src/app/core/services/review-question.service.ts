import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpService } from "./http.service";

import { Users, ReviewQuestions } from "@app/core/interfaces";
import { ApiRoute } from "@app/core/constants";

@Injectable({ providedIn: "root" })
export class ReviewQuestionService {
  constructor(private httpService: HttpService) {}
  getQuestions(): Observable<ReviewQuestions> {
    return <Observable<ReviewQuestions>>(
      this.httpService.get(ApiRoute.getRevQuestion, [])
    );
  }
  getUsers(): Observable<Users> {
    return <Observable<Users>>this.httpService.get(ApiRoute.getUsers, []);
  }
}
