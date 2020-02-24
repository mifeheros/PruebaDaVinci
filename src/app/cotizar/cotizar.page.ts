import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { LoadingService } from '../loading.service';
import { AlertService } from '../alert.service';
import domtoimage from 'dom-to-image';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as moment from 'moment';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-cotizar',
  templateUrl: './cotizar.page.html',
  styleUrls: ['./cotizar.page.scss'],
})

export class CotizarPage implements OnInit {
  Var = 'SE';
  img = new Image();
  constructor(public navCtrl: NavController,
              public loading: LoadingService,
              public alert: AlertService,
              private file: File,
              public plt: Platform) { }

  ngOnInit() {

  }

  PDF() { // Funcion que selecciona el html de la pagina para enviarlo al pdf
    const grafica = document.getElementById('grafica');
    domtoimage.toPng(grafica)
      .then((dataUrl) => {
          this.img.src = dataUrl;
          document.body.appendChild(this.img);
          console.log('555555', this.img);
          this.PDFfotos();
      })
      .catch((error) => {
          console.error('oops, something went wrong!', error);
      });
     }

     PDFfotos() { // Funcion para Generar el PDF con la cotización
      this.loading.LoadingNormal('Generando PDF');
      try {
      setTimeout(() => {
      const doc = new jsPDF();
      const Title = 'COTIZACION' + moment().format(' MM-DD-YY h:mm');
      doc.setTextColor(15, 121, 134);
      doc.text(Title, 105, 35, 'center');
      doc.addImage(this.img, 'PNG', 35, 45, 200, 112);
      setTimeout(() => {
        if (this.plt.is('android')) {
          const pdfOutput = doc.output();
          const buffer = new ArrayBuffer(pdfOutput.length);
          const array = new Uint8Array(buffer);
          for (let i = 0; i < pdfOutput.length; i++) {
              array[i] = pdfOutput.charCodeAt(i);
          }
          const directory = this.file.externalRootDirectory ;
          const fileName = 'COTIZACION' + moment().format('_MM_DD_YY-h_mm_ss') + '.pdf';
          this.file.writeFile(directory, fileName, buffer)
          .then((success) => {
            this.loading.HideLoading();
        })
          .catch((error) => {
          this.alert.AlertOneButton('Error', 'PDF No pudo ser Generado', 'Ok');
          this.loading.HideLoading();
        });
        } else {
        doc.save('COTIZACION' + moment().format('_MM_DD_YY-h_mm_ss') + '.pdf');
        setTimeout(() => {
          this.loading.HideLoading();
        }, 3500);
        }
      }, 500);
      }, 500);
    } catch (err) {
      this.alert.AlertOneButton('Información', 'Error al generar PDF', 'Ok');
      this.loading.HideLoading();
    }
     }

  CLICK() { // Funcion para cotizar la cirugia
    this.loading.LoadingNormal('Cotizando...', 2);
    setTimeout(() => {
      this.alert.AlertOneButton('Cotizar cirugía', 'Descargando Archivo', 'Ok', () => {
        this.PDF();
      });
    }, 2000);
  }
}
