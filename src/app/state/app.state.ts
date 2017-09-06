import { StoredItem } from '../home/items-list/stored-item';

export const getAppState = (state: AppState) => state;

export interface AppState {
  auth: string;
  storedItems: StoredItem[];
}
