import { EventInput } from '@fullcalendar/core';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const ESPECIALIDADES: any[] = [
  {
    id: createEventId(),
    nombre_especialidad: 'Cardiología',
    descripcion:
      'Nuestros cardiólogos se especializan en el diagnóstico y tratamiento de enfermedades del corazón, asegurando que tu motor principal esté en óptimas condiciones.',
    imagen: '../../../../assets/especialistas/Cardiologia.jpeg',
  },
  {
    id: createEventId(),
    nombre_especialidad: 'Dermatología',
    descripcion:
      'Nuestros dermatólogos cuidan de la salud y apariencia de tu piel, ofreciendo soluciones para afecciones cutáneas y procedimientos estéticos.',
    imagen: '../../../../assets/especialistas/Dermatologia.jpeg',
  },
  {
    id: createEventId(),
    nombre_especialidad: 'Ginecología y Obstetricia',
    descripcion:
      'Nuestros expertos en ginecología y obstetricia brindan atención integral a mujeres, desde la adolescencia hasta la maternidad y más allá.',
    imagen: '../../../../assets/especialistas/Ginecologia.jpeg',
  },
  {
    id: createEventId(),
    nombre_especialidad: 'Urología',
    descripcion:
      'Nuestros urólogos se especializan en el diagnóstico y tratamiento de enfermedades del tracto urinario, asegurando una salud óptima en esta área.',
    imagen: '../../../../assets/especialistas/Urologia.jpeg',
  },
  {
    id: createEventId(),
    nombre_especialidad: 'Reumatología',
    descripcion:
      'Nuestros reumatólogos se dedican al diagnóstico y tratamiento de enfermedades del sistema musculoesquelético y tejidos conectivos, para mejorar tu calidad de vida.',
    imagen: '../../../../assets/especialistas/Reumatologia.jpeg',
  },
  {
    id: createEventId(),
    nombre_especialidad: 'Neurocirugía',
    descripcion:
      'Nuestros neurocirujanos son expertos en el diagnóstico y tratamiento quirúrgico de enfermedades del sistema nervioso central y periférico, garantizando tu bienestar neurológico.',
    imagen: '../../../../assets/especialistas/Neurocirugia.jpeg',
  },
];

export function createEventId() {
  return String(eventGuid++);
}
