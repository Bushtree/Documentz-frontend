import { Injectable } from '@angular/core';
import { BaseRequestOptions, Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { environment } from "../../../environments/environment";
function combineUrl(url: string): string {
  // check if url is an absolute url
  if (/(?:^[a-z][a-z0-9+.-]*:|\/\/)/.test(url)) {
    return url;
  }
  return `${environment.dataEndpoint}/${url}`;
}

@Injectable()
export class BaseHttpService {

  constructor(protected http: Http) {
  }

  delete(url: string, options?: BaseRequestOptions): Observable<Response> {
    return this.http.delete(combineUrl(url), options);
  }

  get(url: string, options?: BaseRequestOptions): Observable<Response> {
    return this.http.get(combineUrl(url), options);
  }

  head(url: string, options?: BaseRequestOptions): Observable<Response> {
    return this.http.head(combineUrl(url), options);
  }

  options(url: string, options?: BaseRequestOptions): Observable<Response> {
    return this.http.options(combineUrl(url), options);
  }

  patch(url: string, body: any, options?: BaseRequestOptions): Observable<Response> {
    return this.http.patch(combineUrl(url), body, options);
  }

  post(url: string, body: any, options?: BaseRequestOptions): Observable<Response> {
    return this.http.post(combineUrl(url), body, options);
  }

  put(url: string, body: any, options?: BaseRequestOptions): Observable<Response> {
    return this.http.put(combineUrl(url), body, options);
  }

}
