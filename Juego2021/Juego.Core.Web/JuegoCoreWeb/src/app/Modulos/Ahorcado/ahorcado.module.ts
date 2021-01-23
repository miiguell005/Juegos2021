import { NgModule } from '@angular/core';
import { AhorcadoRoutingModule } from './ahorcado-routing-module';

import { JuegoComponent } from './juego/juego.component'

@NgModule({
  imports: [
    AhorcadoRoutingModule
  ],
  declarations: [
    JuegoComponent
  ]
})
export class AhorcadoModule { }
