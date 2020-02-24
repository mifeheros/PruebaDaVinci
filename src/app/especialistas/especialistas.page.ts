import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoadingService } from '../loading.service';
import { AlertService } from '../alert.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-especialistas',
  templateUrl: './especialistas.page.html',
  styleUrls: ['./especialistas.page.scss'],
})
export class EspecialistasPage implements OnInit {

  constructor(public navCtrl: NavController,
              public global: GlobalService,
              public loading: LoadingService,
              public alert: AlertService) { }

  ngOnInit() {
  }

CLICK(nombre) { // Funcion para agendar la cita
  this.global.ESP = nombre;
  this.navCtrl.navigateRoot('/agendar');
}

}
