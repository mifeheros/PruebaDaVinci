import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoadingService } from '../loading.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-medicoencasa',
  templateUrl: './medicoencasa.page.html',
  styleUrls: ['./medicoencasa.page.scss'],
})
export class MedicoencasaPage implements OnInit {
Var = 'SE';
  constructor(public navCtrl: NavController,
              public loading: LoadingService,
              public alert: AlertService) { }

  ngOnInit() {
  }


  Click() {
    this.loading.LoadingNormal('Guardando...', 1);
    setTimeout(() => {
      this.alert.AlertOneButton('Agendar Visita', 'Visita Agendada Correctamente', 'Ok', () => {
        this.navCtrl.navigateRoot('/home');
      });
    }, 1000);
  }
}
