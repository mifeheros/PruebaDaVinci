import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicoencasaPage } from './medicoencasa.page';

const routes: Routes = [
  {
    path: '',
    component: MedicoencasaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicoencasaPageRoutingModule {}
