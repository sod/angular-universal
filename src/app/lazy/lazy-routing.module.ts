import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoremComponent} from 'src/app/lazy/lorem/lorem.component';

const routes: Routes = [{
  path: '',
  component: LoremComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
