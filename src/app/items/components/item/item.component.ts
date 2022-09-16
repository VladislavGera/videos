import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { getItem } from './state/item.selectors';
import { removeItem } from './state/item.action';
import { AppState } from 'src/app/store/app.state';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  item!: Item;
  urlSafe!: SafeResourceUrl;

  constructor(
    private store: Store<AppState>,
    public sanitizer: DomSanitizer,
    private router: Router
  ) {}

  goToBack() {
    this.router.navigate(['']);
    this.store.dispatch(removeItem());
  }

  ngOnInit(): void {
    this.store.select(getItem).subscribe((res: Item) => {
      this.item = res;
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.item.videoUrl
      );
    });
  }
}
