import { EventInput } from '@fullcalendar/core';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const DOCTORES: any[] = [
  {
    id_doctor: 1,
    nombre_doctor: 'Dr. Juan Pérez',
    especialidad: 'Cardiologia',
    experiencia:
      'Es un doctor con una amplia trayectoria profesional y dedicación en el cuidado de la salud de sus pacientes.',
    disponibilidad: 1,
    imagen: '../../../../assets/doctores/Doctor1.jpeg',
  },
  {
    id_doctor: 2,
    nombre_doctor: 'Dra. Maria González',
    especialidad: 'Dermatologia',
    experiencia:
      'Es una doctora comprometida con el bienestar de sus pacientes y con habilidades especializadas para abordar diversas necesidades de salud.',

    disponibilidad: 0,
    imagen: '../../../../assets/doctores/Doctor2.jpeg',
  },
  {
    id_doctor: 3,
    nombre_doctor: 'Dr. Roberto Sánchez',
    especialidad: 'Ginecologia y Obstetricia',
    experiencia:
      'Es un profesional de la medicina con un enfoque integral en el cuidado de la salud, brindando atención personalizada y de calidad a cada paciente.',
    disponibilidad: 0,
    imagen: '../../../../assets/doctores/Doctor3.jpeg',
  },
  {
    id_doctor: 4,
    nombre_doctor: 'Dra. Lucia Martinez',
    especialidad: 'Pediatría',
    experiencia:
      'Es una doctora comprometida con el bienestar de los niños y sus familias, ofreciendo un cuidado compasivo y efectivo para mejorar su calidad de vida.',
    disponibilidad: 1,
    imagen: '../../../../assets/doctores/Doctor4.jpeg',
  },
  {
    id_doctor: 5,
    nombre_doctor: 'Dr. Andrés Rodríguez',
    especialidad: 'Neurología',
    experiencia:
      'Es un médico especializado en el diagnóstico y tratamiento de diversas condiciones médicas, brindando soluciones efectivas y orientadas al paciente.',
    disponibilidad: 0,
    imagen: '../../../../assets/doctores/Doctor5.jpeg',
  },
  {
    id_doctor: 6,
    nombre_doctor: 'Dra. Marcia Villanueva',
    especialidad: 'Oftalmología',
    experiencia:
      'Es una profesional dedicada a mejorar la salud y el bienestar de sus pacientes, ofreciendo tratamientos innovadores y personalizados.',
    disponibilidad: 1,
    imagen: '../../../../assets/doctores/Doctor6.jpeg',
  },
];

export function createEventId() {
  return String(eventGuid++);
}
