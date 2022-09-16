import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { getItems } from './state/items.selectors';
import { AppState } from 'src/app/store/app.state';
import { setItem } from '../item/state/item.action';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  items!: Item[];
  displayedColumns: string[] = [
    'meetingName',
    'length',
    'nrOfParticipants',
    'score',
    'date',
  ];

  constructor(private store: Store<AppState>, private router: Router) {}

  getItem(item: Item): void {
    this.store.dispatch(setItem({ item }));
    this.router.navigate(['item']);
  }

  ngOnInit(): void {
    this.store.select(getItems).subscribe((res: any) => {
      this.items = res.items;
    });
  }
}