import { createSelector } from '@ngrx/store';
import { getAppState } from '../app.state';

export const getStoredItems = createSelector(getAppState, state => state.storedItems);
