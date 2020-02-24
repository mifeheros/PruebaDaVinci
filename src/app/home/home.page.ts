import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoadingService } from '../loading.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public loading: LoadingService,
              public global: GlobalService) {}


  Agendar() {
    this.loading.LoadingNormal('', 1);
    this.global.ESP = '';
    this.navCtrl.navigateRoot('/agendar');
  }

  Cotizar() {
    this.loading.LoadingNormal('', 1);
    this.navCtrl.navigateRoot('/cotizar');
  }

  Especialistas() {
    this.loading.LoadingNormal('', 1);
    this.navCtrl.navigateRoot('/especialistas');
  }

  Medico() {
    this.loading.LoadingNormal('', 1);
    this.navCtrl.navigateRoot('/medicoencasa');
  }
}
