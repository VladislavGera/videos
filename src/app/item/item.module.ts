import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ItemComponent } from './item.component';
import { MaterialExampleModule } from 'src/material.module';

@NgModule({
  declarations: [ItemComponent],
  imports: [CommonModule, MaterialExampleModule],
  providers: [],
})
export class ItemModule {}
