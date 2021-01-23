import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AhorcadoRoutingModule } from './ahorcado-routing-modulo';
import {  JuegoComponent } from './juego/juego.component'


@NgModule({
  imports: [
    CommonModule,
    AhorcadoRoutingModule
  ],
  declarations: [
    JuegoComponent
  ],  
  exports: [
    JuegoComponent
  ],
  
})
export class AhorcadoModule { }
