import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuentesPage } from './fuentes.page';

const routes: Routes = [
  {
    path: '',
    component: FuentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuentesPageRoutingModule {}
