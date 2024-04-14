import { EventInput } from '@fullcalendar/core';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: any[] = [
  {
    id: createEventId(),
    title: 'Cita Oftalmología',
    start: '2024-04-06' + 'T09:00:00',
    end: '2024-04-06' + 'T12:00:00',
    doctor: 'Dr. Esteban García Pérez',
    especialidad: 'Oftalmología',
    sintomas: 'Visión borrosa, ojos rojos',
  },
  {
    id: createEventId(),
    title: 'Cita Cardiología',
    start: TODAY_STR + 'T09:00:00',
    end: TODAY_STR + 'T13:00:00',
    doctor: 'Dr. Luis Fernández López',
    especialidad: 'Cardiología',
    sintomas: 'Dolor en el pecho, dificultad para respirar',
  },
  {
    id: createEventId(),
    title: 'Cita Oftalmología',
    start: TODAY_STR + 'T14:00:00',
    end: TODAY_STR + 'T15:00:00',
    doctor: 'Dr. Alpina Sánchez Rodríguez',
    especialidad: 'Oftalmología',
    sintomas: 'Visión borrosa, irritación ocular',
  },
  {
    id: createEventId(),
    title: 'Cita Dermatología',
    start: '2024-04-01' + 'T12:00:00',
    end: '22024-04-01' + 'T15:00:00',
    doctor: 'Dr. Juarez González',
    especialidad: 'Dermatología',
    sintomas: 'Picazón en la piel, erupciones cutáneas',
  },
  {
    id: createEventId(),
    title: 'Cita Oftalmología',
    start: '2024-04-06' + 'T16:00:00',
    end: '2024-04-06' + 'T15:00:00',
    doctor: 'Dr. Eduardo Martínez Rodríguez',
    especialidad: 'Oftalmología',
    sintomas: 'Dolor de ojos, sensibilidad a la luz',
  },
  {
    id: createEventId(),
    title: 'Cita Oftalmología',
    start: '2024-04-17' + 'T09:00:00',
    end: '2024-04-17' + 'T11:00:00',
    doctor: 'Dr. Junior López Pérez',
    especialidad: 'Oftalmología',
    sintomas: 'Ojos secos, molestias en la visión',
  },
];

export function createEventId() {
  return String(eventGuid++);
}
