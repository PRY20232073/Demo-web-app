import { EventInput } from '@fullcalendar/core';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: any[] = [
  {
    id: createEventId(),
    title: 'Cita Oftalmologia',
    start: '2023-11-06' + 'T09:00:00',
    end: '2023-11-06' + 'T12:00:00',
    doctor: 'Dr. Esteban',
  },
  {
    id: createEventId(),
    title: 'Cita Cardiologia',
    start: TODAY_STR + 'T00:00:00',
    end: TODAY_STR + 'T03:00:00',
    doctor: 'Dr. Luis',
  },
  {
    id: createEventId(),
    title: 'Cita Oftalmologia',
    start: TODAY_STR + 'T12:00:00',
    end: TODAY_STR + 'T15:00:00',
    doctor: 'Dr. Alpina',
  },
  {
    id: createEventId(),
    title: 'Cita Dermatologia',
    start: '2023-11-01' + 'T12:00:00',
    end: '2023-11-01' + 'T15:00:00',
    doctor: 'Dr. Juarez',
  },
  {
    id: createEventId(),
    title: 'Cita Oftalmologia',
    start: '2023-11-06' + 'T16:00:00',
    end: '2023-11-06' + 'T15:00:00',
    doctor: 'Dr. Eduardo',
  },
  {
    id: createEventId(),
    title: 'Cita Oftalmologia',
    start: '2023-11-17' + 'T09:00:00',
    end: '2023-11-17' + 'T11:00:00',
    doctor: 'Dr. Junior',
  },
];

export function createEventId() {
  return String(eventGuid++);
}
