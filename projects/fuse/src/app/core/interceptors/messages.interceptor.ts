import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse }   from '@angular/common/http';
import { Injectable } from "@angular/core";
import { catchError, tap } from 'rxjs/operators';
import { Observable, of, throwError } from "rxjs";
import { AlertsService } from '../../services/alerts.service';


@Injectable()
export class MessagesInterceptor implements HttpInterceptor {
  constructor(public alertsService: AlertsService) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
        tap(evt => {
            if (evt instanceof HttpResponse) {
                if(evt.body && evt.body.messages && evt.body.messages.length > 0) {
                  evt.body.messages.forEach(message => {
                    this.alertsService.showSuccess(message.text, message.level);
                  });
                }
            }
        }),
        catchError((err) => {
            if(err instanceof HttpErrorResponse) {
                try {
                  if(err.error && err.error.messages && err.error.messages.length > 0) {
                    err.error.messages.forEach(message => {
                      this.alertsService.showError(message.text, message.level);
                    });
                  }
                } catch(e) {
                     this.alertsService.showError('An error occurred', '');
                }
            }
            return throwError(err);
        }));

  }
}
