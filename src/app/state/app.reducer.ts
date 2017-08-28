import { InjectionToken } from '@angular/core';
import { storedItemsReducer } from './stored-items/stored-items.reducer';

export function appReducerFactory() {
  return appReducer;
}

export const AppReducerToken = new InjectionToken('app-reducer');

const appReducer = {
  storedItems: storedItemsReducer
};
