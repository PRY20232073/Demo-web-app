import { EventInput } from '@fullcalendar/core';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const DOCTORES: any[] = [
  {
    id_doctor: 1,
    nombre_doctor: 'Dr. Juan Pérez',
    especialidad: 'Cardiologia',
    experiencia: 'Más de 15 años de experiencia en cardiología.',
    imagen: 'https://www.hndac.gob.pe/wp-content/uploads/DR.-ACOSTA-VELA.jpg',
  },
  {
    id_doctor: 2,
    nombre_doctor: 'Dra. Maria González',
    especialidad: 'Dermatologia',
    experiencia:
      'Especializada en el cuidado de la piel y procedimientos estéticos.',
    imagen: 'https://www.hndac.gob.pe/wp-content/uploads/ACOSTA-CACERES.jpg',
  },
  {
    id_doctor: 3,
    nombre_doctor: 'Dr. Roberto Sánchez',
    especialidad: 'Ginecologia y Obstetricia',
    experiencia: 'Atención integral a mujeres en todas las etapas de la vida.',
    imagen: 'https://www.hndac.gob.pe/wp-content/uploads/DR.-AGUILAR.jpg',
  },
  {
    id_doctor: 4,
    nombre_doctor: 'Dra. Cesar Martinez',
    especialidad: 'Pediatría',
    experiencia: 'Enfoque especializado en la salud de los niños.',
    imagen: 'https://www.hndac.gob.pe/wp-content/uploads/DR.-EGUSQUIZA.jpg',
  },
  {
    id_doctor: 5,
    nombre_doctor: 'Dr. Andrés Rodríguez',
    especialidad: 'Neurología',
    experiencia: 'Diagnóstico y tratamiento de trastornos neurológicos.',
    imagen:
      'https://www.hndac.gob.pe/wp-content/uploads/DR.-BUENDIA-APARICIO.jpg',
  },
  {
    id_doctor: 6,
    nombre_doctor: 'Dra. Marcos Octavio',
    especialidad: 'Oftalmología',
    experiencia: 'Especializado en problemas de la vista y cirugía ocular.',
    imagen: 'https://www.hndac.gob.pe/wp-content/uploads/DR.-CUADROS.jpg',
  },
];

export function createEventId() {
  return String(eventGuid++);
}
