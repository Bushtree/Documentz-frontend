import { getAppState } from '../app.state';
import { createSelector } from '@ngrx/store';

export const getAuth = createSelector(getAppState, state => state.auth);
