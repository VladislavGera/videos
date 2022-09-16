import { createAction, props } from '@ngrx/store';
import { Item } from 'src/app/items/components/models/item.model';

export const setItem = createAction('setItem', props<{ item: Item }>());
export const removeItem = createAction('removeItem');
