import { createReducer, on, Action } from '@ngrx/store';
import { setItem, removeItem } from './item.action';
import { initialState } from './item.state';
import { Item } from 'src/app/items/components/models/item.model';

const _itemReducer = createReducer(
  initialState,
  on(setItem, (state, action) => {
    const url: any = action.item.videoUrl;    

    const getId: string = url.match('v=([a-zA-Z0-9]+)&?')[1];

    const videoUrl: string = `https://www.youtube.com/embed/${getId}`;

    const item: Item = { ...action.item, videoUrl };

    return {
      ...state,
      item,
    };
  }),
  on(removeItem, (state) => {
    const item: Item = {
      date: 16596409674,
      length: 0,
      meetingName: 'unknown',
      nrOfParticipants: 0,
      score: 0,
      videoUrl: 'https://www.youtube.com/embed/',
    };

    return {
      ...state,
      item,
    };
  })
);

export function itemReducer(state: any, action: Action) {
  return _itemReducer(state, action);
}
