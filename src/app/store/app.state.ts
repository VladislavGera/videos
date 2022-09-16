import { itemsReducer } from '../items/state/items.reducer';
import { itemReducer } from '../item/state/item.reducer';
import { Item } from '../models/item.model';
import { Items } from '../models/items.model';

export interface AppState {
  items: Items;
  item: Item;
}

export const appReducer = {
  items: itemsReducer,
  item: itemReducer,
};
