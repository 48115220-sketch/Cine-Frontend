import { Routes } from '@angular/router';
import { CarteleraComponent } from './pages/cartelera/cartelera.component';
import { CandyComponent } from './pages/candy/candy.component';
import { MapaAsientosComponent } from './pages/mapa-asientos/mapa-asientos.component';

export const routes: Routes = [
  { path: '', redirectTo: 'cartelera', pathMatch: 'full' },
  { path: 'cartelera', component: CarteleraComponent },
  { path: 'candy', component: CandyComponent },
  { path: 'mapa-asientos/:salaId', component: MapaAsientosComponent },
  { path: '**', redirectTo: 'cartelera' }
];