import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarProductoPage } from './mostrar-producto.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarProductoPageRoutingModule {}
