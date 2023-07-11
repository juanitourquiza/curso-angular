import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './routes/components/dashboard/dashboard.component';
import { IngresarComponent } from './routes/components/ingresar/ingresar.component';
import { InicioComponent } from './routes/components/inicio/inicio.component';
import { PeliculasComponent } from './routes/components/peliculas/peliculas.component';
import { SeriesComponent } from './routes/components/series/series.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'peliculas',
    component: PeliculasComponent
  },
  {
    path: 'series',
    component: SeriesComponent
  },
  {
    path: 'ingresar',
    component: IngresarComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
