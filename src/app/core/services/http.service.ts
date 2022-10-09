import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "@environment/environment";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  post(serviceName: string, data: any = {}) {
    return this.httpClient.post(environment.apiURL + "/" + serviceName, data);
  }

  put(serviceName: string, data) {
    const options = {
      headers: new HttpHeaders({ "Content-Type": "image/jpeg" }),
    };
    return this.httpClient.put(serviceName, data, options);
  }

  get(serviceName: string, data: any) {
    return this.httpClient.get(environment.apiURL + "/" + serviceName);
  }

  delete(serviceName: string) {
    const accessToken = localStorage.getItem("accessToken");
    const options = {
      headers: new HttpHeaders({ Authorization: `Bearer ${accessToken}` }),
    };
    return this.httpClient.delete(environment.apiURL + serviceName, options);
  }
}
