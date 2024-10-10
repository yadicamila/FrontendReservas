import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SesionComponent } from './components/sesion/sesion.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { ReservarComponent } from './components/reservar/reservar.component';


export const routes: Routes = [
  { path: '', redirectTo: 'sesion', pathMatch: 'full' }, // Ruta por defecto (sesion)
  { path: 'sesion', component: SesionComponent },
  { path: 'reservas', component: ReservasComponent},
  { path: 'reservar', component: ReservarComponent }
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
