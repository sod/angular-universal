import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LoremComponent } from './lorem/lorem.component';

@NgModule({
  declarations: [LoremComponent],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }
