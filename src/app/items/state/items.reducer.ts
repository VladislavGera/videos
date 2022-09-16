import { createReducer, Action } from '@ngrx/store';
import { initialState } from './items.state';

const _itemsReducer = createReducer(
  initialState
);

export function itemsReducer(state: any, action: Action) {
  return _itemsReducer(state, action);
}
