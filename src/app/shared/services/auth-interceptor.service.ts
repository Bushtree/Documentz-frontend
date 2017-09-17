import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../state/app.state';
import { Store } from '@ngrx/store';
import { getAuth } from '../../state/auth';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private store: Store<AppState>) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select(getAuth).mergeMap(auth => {
      if (!auth) {
        return next.handle(req);
      }
      const newReq = req.clone({headers: new HttpHeaders({...req.headers, authorization: `Bearer ${auth}`})});
      return next.handle(newReq);
    });
  }
}
