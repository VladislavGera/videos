import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ItemRes } from 'src/app/items/components/models/item.model';

const getItemState = createFeatureSelector<ItemRes>('item');

export const getItem = createSelector(getItemState, (state) => {
  return state.item;
});
