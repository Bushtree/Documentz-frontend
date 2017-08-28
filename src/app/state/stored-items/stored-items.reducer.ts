import { StoredItem } from '../../home/items-list/stored-item';
import { SetStoredItemsListAction, StoredItemsActions } from './stored-items.actions';

export function storedItemsReducer(state: StoredItem[] = null, action: SetStoredItemsListAction) {
  switch (action.type) {
    case StoredItemsActions.setList:
    {
      return [...action.payload];
    }
    default: return state;
  }
}
