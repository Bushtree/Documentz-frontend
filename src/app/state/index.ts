import { environment } from "../../environments/environment";
import { Action, combineReducers } from "@ngrx/store";
import { AppState } from "./app-state";
import { appReducer } from "./app.reducer";
import { compose } from "@ngrx/core";
export { AppState } from './app-state';
import { storeFreeze } from 'ngrx-store-freeze';
import { StoredItemEffects } from "./stored-item/stored-item.effects";
import { EffectsModule } from "@ngrx/effects";

const developmentReducer = compose(storeFreeze, combineReducers)(appReducer);
const productionReducer = combineReducers(appReducer);

export function reducer (state: AppState, action: Action) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

export const effects = [
  EffectsModule.run(StoredItemEffects)
];
