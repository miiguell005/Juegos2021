import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PruebaComponent } from './prueba/prueba.component';


const routes: Routes =
  [
    { path: 'Prueba', component: PruebaComponent },
    { path: 'Ahorcado', loadChildren: "./Modulos/Ahorcado/ahorcado.module#AhorcadoModule" },
    { path: 'Busca/Minas', loadChildren: "./Modulos/BuscaMinas/busca-minas.module#BuscaMinasModule" },
    { path: '', redirectTo: '/Prueba', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
