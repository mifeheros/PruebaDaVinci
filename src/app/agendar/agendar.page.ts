import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from '../global.service';
import { LoadingService } from '../loading.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.page.html',
  styleUrls: ['./agendar.page.scss'],
})
export class AgendarPage implements OnInit {
  Var = 'SE';
  ESP = '';
  Especialidad = '-----------';
  Horario = {
    Lunes: true,
              Martes: true,
              Miercoles: true,
              Jueves: true,
              Viernes: true,
  };
  Valor;
  Dia = [ false , false , false , false , false  ];
  constructor(public navCtrl: NavController,
              public global: GlobalService,
              public loading: LoadingService,
              public alert: AlertService) { }

  ngOnInit() {
    this.ESP = this.global.ESP;
    this.Sleccion();
    console.log(this.global.x);
  }


Sleccion() {
  console.log(this.ESP);
  for (let index = 0; index < this.global.x.length; index++) {
    if (this.global.x[index].Nombre == this.ESP) {
      this.Especialidad = this.global.x[index].Especialidad;
      this.Horario = this.global.x[index].Dias;
      this.Valor = this.global.x[index].consultorio;
      console.log(this.Especialidad, this.Horario);
    }
  }
}

Click() {
  this.loading.LoadingNormal('Guardando...', 1);
  setTimeout(() => {
    this.alert.AlertOneButton('Agendar Cita', 'Cita Agendada Correctamente', 'Ok', () => {
      this.navCtrl.navigateRoot('/home');
    });
  }, 1000);
}
}
