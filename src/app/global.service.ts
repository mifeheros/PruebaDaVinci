import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  x = new Array();
  ESP = '';
  constructor() { 
   this.x = [{Nombre: 'Pablo Rodriguez',Especialidad: 'Neurología',Dias: { Lunes: true,Martes: false,Miercoles: false,Jueves: true,Viernes: true,      },
      consultorio: '105'},{Nombre: 'Diego Hernandez',Especialidad: 'Ginecología y obstetricia', Dias: { Lunes: true, Martes: true, Miercoles: false, Jueves: false, Viernes: true,
        }, consultorio: '301'}, { Nombre: 'Laura Cifuentes', Especialidad: 'Ginecología y obstetricia', Dias: { Lunes: false,
            Martes: false, Miercoles: true, Jueves: true, Viernes: true}, consultorio: '207' },
          {
            Nombre: 'Irana Carrion',
            Especialidad: 'Pediatría',
            Dias: { Lunes: true,
              Martes: true,
              Miercoles: false,
              Jueves: true,
              Viernes: false,
            },
            consultorio: '311',
          },
            {
              Nombre: 'German Gutierrez',
              Especialidad: 'Pediatría',
              Dias: { Lunes: true,
                Martes: true,
                Miercoles: true,
                Jueves: false,
                Viernes: false,
              },
              consultorio: '109'
    }
  ]
  }

}
