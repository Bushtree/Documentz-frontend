import { Injectable } from '@angular/core';
import { ItemsApiService } from './items-api.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { SetStoredItemsListAction } from '../../state/stored-items/stored-items.actions';

@Injectable()
export class ItemsListService {

  constructor(private apiService: ItemsApiService, private store: Store<AppState>) { }

  list() {
    this.apiService.list().subscribe(items => this.store.dispatch(new SetStoredItemsListAction(items)));
  }
}
