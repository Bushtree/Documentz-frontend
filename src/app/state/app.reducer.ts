import { InjectionToken } from '@angular/core';
import { storedItemsReducer } from './stored-items/stored-items.reducer';
import { authReducer } from './auth/auth.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';

export function appReducerFactory() {
  return appReducer;
}

export const AppReducerToken = new InjectionToken('app-reducer');

const appReducer: ActionReducerMap<AppState> = {
  auth: authReducer,
  storedItems: storedItemsReducer
};
