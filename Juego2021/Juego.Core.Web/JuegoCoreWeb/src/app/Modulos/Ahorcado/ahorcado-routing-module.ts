import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JuegoComponent } from './juego/juego.component';


const routes: Routes = [
    { path: 'Juego', component: JuegoComponent },
    { path: '', redirectTo: '/Juego', pathMatch: 'full' }
  ];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AhorcadoRoutingModule { }
