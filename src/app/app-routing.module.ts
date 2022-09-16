import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  {
    path: '',
    component: ItemsComponent,
  },
  {
    path: 'item',
    component: ItemComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
