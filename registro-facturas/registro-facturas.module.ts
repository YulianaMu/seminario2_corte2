import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroFacturasPageRoutingModule } from './registro-facturas-routing.module';

import { RegistroFacturasPage } from './registro-facturas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegistroFacturasPageRoutingModule
  ],
  declarations: [RegistroFacturasPage]
})
export class RegistroFacturasPageModule {}
