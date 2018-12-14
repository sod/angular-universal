import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SubComponentComponent} from 'src/app/sub-component/sub-component.component';

const routes: Routes = [{
  path: 'sub',
  component: SubComponentComponent,
}, {
  path: 'lazy',
  loadChildren: 'src/app/lazy/lazy.module#LazyModule',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
