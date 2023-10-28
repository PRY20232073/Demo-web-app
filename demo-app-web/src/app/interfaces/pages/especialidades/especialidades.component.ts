import { Component } from '@angular/core';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.css'],
})
export class EspecialidadesComponent {
  especialidades = [
    {
      titulo: 'Especialidad 1',
      descripcion: 'Descripción de la especialidad 1',
      imagen: 'url-de-la-imagen-1.jpg',
    },
    {
      titulo: 'Especialidad 2',
      descripcion: 'Descripción de la especialidad 2',
      imagen: 'url-de-la-imagen-2.jpg',
    },
    // Agrega más especialidades aquí
  ];

  filtro: string = '';

  // Método para filtrar especialidades
  filtrarEspecialidades() {
    if (this.filtro) {
      this.especialidades = this.especialidades.filter((especialidad) =>
        especialidad.titulo.toLowerCase().includes(this.filtro.toLowerCase())
      );
    } else {
      // Restaurar la lista completa de especialidades si el filtro está vacío
      this.especialidades = [
        {
          titulo: 'Especialidad 1',
          descripcion: 'Descripción de la especialidad 1',
          imagen: 'url-de-la-imagen-1.jpg',
        },
        {
          titulo: 'Especialidad 2',
          descripcion: 'Descripción de la especialidad 2',
          imagen: 'url-de-la-imagen-2.jpg',
        },
        // Agrega más especialidades aquí
      ];
    }
  }
}
