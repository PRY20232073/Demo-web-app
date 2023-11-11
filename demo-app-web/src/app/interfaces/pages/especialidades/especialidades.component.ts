import { Component } from '@angular/core';
import { Especialidad } from '../../models/especialidad.model';
import { EspecialidadService } from '../../services/especialidad.service';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.css'],
})
export class EspecialidadesComponent {
  especialidades: Especialidad[];

  filtro: string = '';
  constructor(private especialidadService: EspecialidadService) {
    this.especialidades = [];
  }

  getEspecialidades(): void {
    this.especialidadService.getEspecialidad().subscribe((response) => {
      this.especialidades = response;
    });
  }
  // Método para filtrar especialidades
  filtrarEspecialidades() {
    if (this.filtro) {
      this.especialidadService.getEspecialidad().subscribe((response) => {
        this.especialidades = response;
        this.especialidades = this.especialidades.filter((especialidad) =>
          especialidad.nombre_especialidad
            .toLowerCase()
            .includes(this.filtro.toLowerCase())
        );
      });
    } else {
      this.getEspecialidades();
    }
  }
  ngOnInit(): void {
    this.getEspecialidades();
  }
}
