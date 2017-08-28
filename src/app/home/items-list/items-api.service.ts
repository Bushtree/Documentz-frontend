import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoredItem } from './stored-item';
import { endpoints } from '../../shared/endpoints';

@Injectable()
export class ItemsApiService {

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<StoredItem[]>(endpoints.items.getList);
  }
}
