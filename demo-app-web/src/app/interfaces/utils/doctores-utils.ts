import { EventInput } from '@fullcalendar/core';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const DOCTORES: any[] = [
  {
    id_doctor: 1,
    nombre_doctor: 'Dr. Juan Pérez',
    especialidad: 'Cardiologia',
    experiencia: 'Más de 15 años de experiencia en cardiología.',
    disponibilidad: 1,
    imagen: '../../../../assets/doctores/Doctor1.jpeg',
  },
  {
    id_doctor: 2,
    nombre_doctor: 'Dra. Maria González',
    especialidad: 'Dermatologia',
    experiencia:
      'Especializada en el cuidado de la piel y procedimientos estéticos.',
    disponibilidad: 0,
    imagen: '../../../../assets/doctores/Doctor2.jpeg',
  },
  {
    id_doctor: 3,
    nombre_doctor: 'Dr. Roberto Sánchez',
    especialidad: 'Ginecologia y Obstetricia',
    experiencia: 'Atención integral a mujeres en todas las etapas de la vida.',
    disponibilidad: 0,
    imagen: '../../../../assets/doctores/Doctor3.jpeg',
  },
  {
    id_doctor: 4,
    nombre_doctor: 'Dra. Lucia Martinez',
    especialidad: 'Pediatría',
    experiencia: 'Enfoque especializado en la salud de los niños.',
    disponibilidad: 1,
    imagen: '../../../../assets/doctores/Doctor4.jpeg',
  },
  {
    id_doctor: 5,
    nombre_doctor: 'Dr. Andrés Rodríguez',
    especialidad: 'Neurología',
    experiencia: 'Diagnóstico y tratamiento de trastornos neurológicos.',
    disponibilidad: 0,
    imagen: '../../../../assets/doctores/Doctor5.jpeg',
  },
  {
    id_doctor: 6,
    nombre_doctor: 'Dra. Marcia Villanueva',
    especialidad: 'Oftalmología',
    experiencia: 'Especializado en problemas de la vista y cirugía ocular.',
    disponibilidad: 1,
    imagen: '../../../../assets/doctores/Doctor6.jpeg',
  },
];

export function createEventId() {
  return String(eventGuid++);
}
