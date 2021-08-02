import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarProductoPageRoutingModule } from './mostrar-producto-routing.module';

import { MostrarProductoPage } from './mostrar-producto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarProductoPageRoutingModule
  ],
  declarations: [MostrarProductoPage]
})
export class MostrarProductoPageModule {}
