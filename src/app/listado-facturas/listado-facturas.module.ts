import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoFacturasPageRoutingModule } from './listado-facturas-routing.module';

import { ListadoFacturasPage } from './listado-facturas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoFacturasPageRoutingModule
  ],
  declarations: [ListadoFacturasPage]
})
export class ListadoFacturasPageModule {}
