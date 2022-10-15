import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "@environment/environment";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}

  // Intercepts all HTTP requests!
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // check if this request going to be send to the PI backend API
    const isBackendDevAPI =
      request?.url && request.url.indexOf(environment.apiURL) === 0;
    if (isBackendDevAPI) {
      const accessToken = localStorage.getItem("accessToken");
      const bodyParam = request.body;
      if (
        ((request.method == "POST" &&
          request.body &&
          !request.body.refresh_token) ||
          request.method == "GET") &&
        accessToken
      ) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${accessToken}`,
          },
          body: bodyParam,
        });
      } else {
        request = request.clone({
          setHeaders: {
            "Content-Type": "application/json",
          },
          body: bodyParam,
        });
      }
    }
    return next.handle(request);
  }
}
