import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
 
import { ItemsComponent } from './items.component';
import { MaterialExampleModule } from 'src/material.module';

@NgModule({
  declarations: [ItemsComponent],
  imports: [CommonModule, MaterialExampleModule],
  providers: [],
})
export class ItemsModule {}
