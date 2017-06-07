import { StoredItem } from "./stored-item";
import { STORED_ITEM_ACTIONS, StoredItemActions } from "./stored-item.actions";
import { toPayload } from "@ngrx/effects";

export function storedItemsReducer(state: StoredItem[] = [], action: StoredItemActions): StoredItem[] {
  switch (action.type) {
    case STORED_ITEM_ACTIONS.setList:
      return [...toPayload(action)];
    default:
      return state;
  }
}
