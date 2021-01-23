import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AhorcadoModule } from './Modulos/Ahorcado/ahorcado.module';
import { PruebaComponent } from './prueba/prueba.component';


const routes: Routes = 
[
  {
    path: 'Prueba',
    component: PruebaComponent
  },
  {
    path: 'Ahorcado',
    loadChildren: () => AhorcadoModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
