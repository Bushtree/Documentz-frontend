import { RouterState } from "@ngrx/router-store";
import { StoredItem } from "./stored-item";
export interface AppState {
  router: RouterState;
  storedItems: StoredItem[];
}
