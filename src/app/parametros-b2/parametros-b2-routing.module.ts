import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParametrosB2Page } from './parametros-b2.page';

const routes: Routes = [
  {
    path: '',
    component: ParametrosB2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParametrosB2PageRoutingModule {}
