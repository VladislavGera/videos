import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ItemsComponent } from './items.component';
import { MaterialExampleModule } from 'src/material.module';
import { ItemsRoutingModule } from './items-routing.module';

@NgModule({
  declarations: [ItemsComponent],
  imports: [CommonModule, MaterialExampleModule, ItemsRoutingModule],
  providers: [],
})
export class ItemsModule {}
