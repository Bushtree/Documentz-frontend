import { AppState } from "../";
export { StoredItem } from './stored-item';
export { storedItemsReducer } from './stored-items.reducer';
export * from './stored-item.actions';

export const getStoredItems = (state: AppState) => state.storedItems;
