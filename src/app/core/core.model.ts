import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { MaterialExampleModule } from 'src/material.module';


@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent] ,
  imports: [CommonModule, MaterialExampleModule],
  providers: [],
})

export class CoreModule {}
