import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UbicacionFuentesPage } from './ubicacion-fuentes.page';

const routes: Routes = [
  {
    path: '',
    component: UbicacionFuentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UbicacionFuentesPageRoutingModule {}
