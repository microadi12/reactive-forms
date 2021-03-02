import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    
      const authReq = req.clone({
        headers: req.headers.set(
          "Authorization",
          "563492ad6f917000010000016bf7db52a5134b8faef454369814e279"
        )
      });

      return next.handle(authReq);
    
  }
}
