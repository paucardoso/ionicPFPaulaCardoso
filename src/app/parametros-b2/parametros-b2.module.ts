import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParametrosB2PageRoutingModule } from './parametros-b2-routing.module';

import { ParametrosB2Page } from './parametros-b2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParametrosB2PageRoutingModule
  ],
  declarations: [ParametrosB2Page]
})
export class ParametrosB2PageModule {}
