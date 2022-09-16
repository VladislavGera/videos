import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Items } from 'src/app/models/items.model';

const getItemsState = createFeatureSelector<Items>('items');

export const getItems = createSelector(getItemsState, (state) => {
  return state;
});
