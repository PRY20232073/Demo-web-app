import { Component } from '@angular/core';
import { DOCTORES, createEventId } from '../../utils/doctores-utils';

@Component({
  selector: 'app-doctores',
  templateUrl: './doctores.component.html',
  styleUrls: ['./doctores.component.css'],
})
export class DoctoresComponent {
  especialidades: any[];

  filtro: string = '';
  constructor() {
    this.especialidades = [];
  }

  getEspecialidades(): void {
    // this.especialidadService.getEspecialidad().subscribe((response) => {
    //   this.especialidades = response;
    // });
    this.especialidades = DOCTORES;
  }
  // Método para filtrar especialidades
  filtrarEspecialidades() {
    if (this.filtro) {
      // this.especialidadService.getEspecialidad().subscribe((response) => {
      //   this.especialidades = response;
      //   this.especialidades = this.especialidades.filter((especialidad) =>
      //     especialidad.nombre_especialidad
      //       .toLowerCase()
      //       .includes(this.filtro.toLowerCase())
      //   );
      // });
      this.getEspecialidades();
      this.especialidades = this.especialidades.filter((especialidad) =>
        especialidad.nombre_especialidad
          .toLowerCase()
          .includes(this.filtro.toLowerCase())
      );
    } else {
      this.getEspecialidades();
    }
  }
  ngOnInit(): void {
    this.getEspecialidades();
  }
}
