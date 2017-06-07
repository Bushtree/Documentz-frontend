import { Injectable } from '@angular/core';
import { BaseHttpService } from "../../shared/services/base-http.service";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { StoredItem } from "./stored-item";
import { endpoints } from "../../shared/endpoints";
import "rxjs/add/operator/map";

@Injectable()
export class StoredItemsApiService extends BaseHttpService {

  constructor(http: Http) {
    super(http);
  }

  list(): Observable<StoredItem[]> {
    return this.get(endpoints.storedItem.list).map(r => r.json());
  }

  addStoredItem(item: StoredItem): Observable<StoredItem> {
    return this.post(endpoints.storedItem.addStoredItem, item).map(r => r.json());
  }
}
