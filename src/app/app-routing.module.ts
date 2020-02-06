import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './compontents/home/home.component';
import {PreciosComponent} from './compontents/precios/precios.component';
import {ProtegidaComponent} from './compontents/protegida/protegida.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'precios', component: PreciosComponent},
  {path: 'protegida', component: ProtegidaComponent},

  {path: '**', pathMach: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
