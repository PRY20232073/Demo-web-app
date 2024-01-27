import { Component } from '@angular/core';
import { Especialidad } from '../../models/especialidad.model';
import { EspecialidadService } from '../../services/especialidad.service';
import {
  ESPECIALIDADES,
  createEventId,
} from '../../utils/especialidades-utils';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.css'],
})
export class EspecialidadesComponent {
  especialidades: any[];

  filtro: string = '';
  constructor(private especialidadService: EspecialidadService) {
    this.especialidades = [];
  }

  getEspecialidades(): void {
    // this.especialidadService.getEspecialidad().subscribe((response) => {
    //   this.especialidades = response;
    // });
    this.especialidades = ESPECIALIDADES;
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
