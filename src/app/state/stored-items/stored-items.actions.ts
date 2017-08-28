import { Action } from '@ngrx/store';
import { StoredItem } from '../../home/items-list/stored-item';

export const StoredItemsActions = {
  getList: '[StoredItems] Get',
  setList: '[StoredItems] Set',
};

export class GetStoredItems implements Action {
  readonly type = StoredItemsActions.getList;
}

export class SetStoredItemsListAction implements Action {
  readonly type = StoredItemsActions.setList;

  constructor(public payload: StoredItem[]) {
  }
}
