import { EventInput } from '@fullcalendar/core';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const DOCTORES: any[] = [
  {
    id_doctor: 1,
    nombre_doctor: 'Dr. Juan Pérez',
    especialidad: 'Cardiologia',
    experiencia: 'Más de 15 años de experiencia en cardiología.',
    imagen:
      'https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg',
  },
  {
    id_doctor: 2,
    nombre_doctor: 'Dra. Maria González',
    especialidad: 'Dermatologia',
    experiencia:
      'Especializada en el cuidado de la piel y procedimientos estéticos.',
    imagen:
      'https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg',
  },
  {
    id_doctor: 3,
    nombre_doctor: 'Dr. Roberto Sánchez',
    especialidad: 'Ginecologia y Obstetricia',
    experiencia: 'Atención integral a mujeres en todas las etapas de la vida.',
    imagen:
      'https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg',
  },
  {
    id_doctor: 4,
    nombre_doctor: 'Dra. Laura Martínez',
    especialidad: 'Pediatría',
    experiencia: 'Enfoque especializado en la salud de los niños.',
    imagen:
      'https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg',
  },
  {
    id_doctor: 5,
    nombre_doctor: 'Dr. Andrés Rodríguez',
    especialidad: 'Neurología',
    experiencia: 'Diagnóstico y tratamiento de trastornos neurológicos.',
    imagen:
      'https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg',
  },
  {
    id_doctor: 6,
    nombre_doctor: 'Dra. Ana López',
    especialidad: 'Oftalmología',
    experiencia: 'Especializada en problemas de la vista y cirugía ocular.',
    imagen:
      'https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg',
  },
];

export function createEventId() {
  return String(eventGuid++);
}
