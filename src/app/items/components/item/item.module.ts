import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { ItemComponent } from './item.component';
import { MaterialExampleModule } from 'src/material.module';
import { ItemRoutingModule } from './item-routing.module';

@NgModule({
  declarations: [ItemComponent],
  imports: [CommonModule, MaterialExampleModule, ItemRoutingModule],
  providers: [],
})
export class ItemModule {}
