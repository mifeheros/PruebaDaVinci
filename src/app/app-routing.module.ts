import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'agendar',
    loadChildren: () => import('./agendar/agendar.module').then( m => m.AgendarPageModule)
  },
  {
    path: 'especialistas',
    loadChildren: () => import('./especialistas/especialistas.module').then( m => m.EspecialistasPageModule)
  },
  {
    path: 'medicoencasa',
    loadChildren: () => import('./medicoencasa/medicoencasa.module').then( m => m.MedicoencasaPageModule)
  },
  {
    path: 'cotizar',
    loadChildren: () => import('./cotizar/cotizar.module').then( m => m.CotizarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
