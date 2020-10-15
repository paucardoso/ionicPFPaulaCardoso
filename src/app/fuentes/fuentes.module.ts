import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuentesPageRoutingModule } from './fuentes-routing.module';

import { FuentesPage } from './fuentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuentesPageRoutingModule
  ],
  declarations: [FuentesPage]
})
export class FuentesPageModule {}
