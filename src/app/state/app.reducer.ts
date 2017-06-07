import { routerReducer } from "@ngrx/router-store";
import { storedItemsReducer } from "./stored-item";

export const appReducer = {
  router: routerReducer,
  storedItems: storedItemsReducer
};
