import { Component } from '@angular/core';
import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';

@Component({
  selector: 'app-consulta-citas',
  templateUrl: './consulta-citas.component.html',
  styleUrls: ['./consulta-citas.component.css'],
})
export class ConsultaCitasComponent {
  // Datos de ejemplo para eventos (citas)
  viewDate: Date = new Date(); // Define una fecha inicial

  events: CalendarEvent[] = [
    {
      title: 'Cita con Dr. Smith',
      start: new Date('2023-11-10T10:00:00'),
      end: new Date('2023-11-10T11:00:00'),
      color: {
        primary: '#1e90ff',
        secondary: '#D1E8FF',
      },
      meta: { doctor: 'Dr. John Smith', specialty: 'Cardiología' },
    },
    // Agrega más eventos según tus necesidades
  ];
  selectedDoctor: any = null;

  showDoctorInfo(event: any) {
    // Crea un objeto CalendarEvent válido con las propiedades requeridas
    const doctorEvent: CalendarEvent = {
      start: event.start, // Define la fecha de inicio
      title: event.title, // Define el título (puede ser el nombre del médico)
    };

    // Establece el objeto CalendarEvent en selectedDoctor
    this.selectedDoctor = doctorEvent;
  }
  // Datos de ejemplo del doctor
}
