import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UbicacionFuentesPageRoutingModule } from './ubicacion-fuentes-routing.module';

import { UbicacionFuentesPage } from './ubicacion-fuentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UbicacionFuentesPageRoutingModule
  ],
  declarations: [UbicacionFuentesPage]
})
export class UbicacionFuentesPageModule {}
