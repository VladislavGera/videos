import { itemsReducer } from '../items/components/items/state/items.reducer';
import { itemReducer } from '../items/components/item/state/item.reducer';
import { Item } from '../items/components/models/item.model';
import { Items } from '../items/components/models/items.model';

export interface AppState {
  items: Items;
  item: Item;
}

export const appReducer = {
  items: itemsReducer,
  item: itemReducer,
};
