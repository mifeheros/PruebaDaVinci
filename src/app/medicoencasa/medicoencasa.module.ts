import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicoencasaPageRoutingModule } from './medicoencasa-routing.module';

import { MedicoencasaPage } from './medicoencasa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicoencasaPageRoutingModule
  ],
  declarations: [MedicoencasaPage]
})
export class MedicoencasaPageModule {}
