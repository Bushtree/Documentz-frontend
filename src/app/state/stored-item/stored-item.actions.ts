import { type } from "../utils";
import { Action } from "@ngrx/store";
import { StoredItem } from "./stored-item";

export const STORED_ITEM_ACTIONS = {
  create: type('[StoredItem] Create'),
  list: type('[StoredItem] List'),
  setList: type('[StoredItem] Set List')
};

export class CreateStoredItemAction implements Action {
  type = STORED_ITEM_ACTIONS.create;

  constructor(public payload: StoredItem) {}
}

export class ListStoredItemsAction implements Action {
  type = STORED_ITEM_ACTIONS.list;
}

export class SetStoredItemsAction implements Action {
  type = STORED_ITEM_ACTIONS.setList;

  constructor(public payload: StoredItem[]) {
  }
}

export type StoredItemActions =
  ListStoredItemsAction
  | SetStoredItemsAction;
