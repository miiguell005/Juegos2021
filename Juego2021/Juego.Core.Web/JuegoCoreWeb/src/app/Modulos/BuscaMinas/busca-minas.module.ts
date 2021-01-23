import { NgModule } from '@angular/core';
import { BuscaMinasRoutingModule } from './busca-minas-routing-module';

import { JuegoComponent } from './juego/juego.component';

@NgModule({  
  imports: [
    BuscaMinasRoutingModule
  ],
  declarations: [
    JuegoComponent
  ],
})
export class BuscaMinasModule { }
