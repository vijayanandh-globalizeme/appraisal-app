import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpService } from "./http.service";

import { Users } from "@app/core/interfaces";
import { ApiRoute } from "@app/core/constants";

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(private httpService: HttpService) {}

  getUsers(): Observable<Users> {
    return <Observable<Users>>this.httpService.get(ApiRoute.getUsers, []);
  }
}
