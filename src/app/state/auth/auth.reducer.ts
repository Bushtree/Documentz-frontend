import { Action } from '@ngrx/store';

export function authReducer(state = 'development-token', action: Action) {
  return state;
}
