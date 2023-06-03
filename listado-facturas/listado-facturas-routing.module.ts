import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoFacturasPage } from './listado-facturas.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoFacturasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoFacturasPageRoutingModule {}
