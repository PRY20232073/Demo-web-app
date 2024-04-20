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
  especialidades_vacias: number = 0;
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
    this.especialidades_vacias = 0;

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
      if (this.especialidades.length == 0) {
        this.especialidades_vacias = 1;
      }
      if (this.filtro.toLowerCase() == '') {
        console.log('vacio el buscador');
        this.especialidades_vacias = 0;
      }
    } else {
      this.getEspecialidades();
    }
  }
  ngOnInit(): void {
    this.getEspecialidades();
  }
}
