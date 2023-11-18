import { EventInput } from '@fullcalendar/core';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const ESPECIALIDADES: any[] = [
  {
    id: createEventId(),
    nombre_especialidad: 'Cardiologia',
    descripcion:
      'Nuestros cardiólogos se especializan en el diagnóstico y tratamiento de enfermedades del corazón, asegurando que tu motor principal esté en óptimas condiciones.',
    imagen:
      'https://especialidadesmedicas.pe/wp-content/uploads/2022/02/PORTADA-para-moviles-de-ESPECIALIDADES_CARDIOLOGIA-1.png',
  },
  {
    id: createEventId(),
    nombre_especialidad: 'Dermatologia',
    descripcion:
      'Nuestros dermatólogos cuidan de la salud y apariencia de tu piel, ofreciendo soluciones para afecciones cutáneas y procedimientos estéticos.',
    imagen:
      'https://especialidadesmedicas.pe/wp-content/uploads/2022/02/PORTADA-para-moviles-de-ESPECIALIDADES_Dermatologia-1.png',
  },
  {
    id: createEventId(),
    nombre_especialidad: 'Ginecologia y Obstetricia',
    descripcion:
      'Nuestros expertos ginecólogos y obstetras brindan atención integral a mujeres, desde la adolescencia hasta la maternidad y más allá.',
    imagen:
      'https://especialidadesmedicas.pe/wp-content/uploads/2022/02/PORTADA-para-moviles-de-ESPECIALIDADES_GINECOLOGIA-Y-OBSTETRICIA-1.png',
  },
  {
    id: createEventId(),
    nombre_especialidad: 'Urologia',
    descripcion:
      'Nuestros expertos ginecólogos y obstetras brindan atención integral a mujeres, desde la adolescencia hasta la maternidad y más allá.',
    imagen:
      'https://especialidadesmedicas.pe/wp-content/uploads/2022/02/PORTADA-para-moviles-de-ESPECIALIDADES_UROLOGIA.png',
  },
  {
    id: createEventId(),
    nombre_especialidad: 'Reumatologia',
    descripcion:
      'Nuestros expertos ginecólogos y obstetras brindan atención integral a mujeres, desde la adolescencia hasta la maternidad y más allá.',
    imagen:
      'https://especialidadesmedicas.pe/wp-content/uploads/2022/02/PORTADA-para-moviles-de-ESPECIALIDADES_REUMATOLOGIA.png',
  },
  {
    id: createEventId(),
    nombre_especialidad: 'Neurocirugia',
    descripcion:
      'Nuestros expertos ginecólogos y obstetras brindan atención integral a mujeres, desde la adolescencia hasta la maternidad y más allá.',
    imagen:
      'https://especialidadesmedicas.pe/wp-content/uploads/2022/02/PORTADA-para-moviles-de-ESPECIALIDADES_NEUROCIRUGIA-1.png',
  },
];

export function createEventId() {
  return String(eventGuid++);
}
