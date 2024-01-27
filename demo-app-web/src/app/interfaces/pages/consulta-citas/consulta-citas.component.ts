import {
  Component,
  ViewChild,
  TemplateRef,
  signal,
  Signal,
  ChangeDetectorRef,
} from '@angular/core';
import {
  CalendarOptions,
  DateSelectArg,
  EventClickArg,
  EventApi,
  EventInput,
  DateInput,
} from '@fullcalendar/core'; // useful for typechecking
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import esLocale from '@fullcalendar/core/locales/es';
import { INITIAL_EVENTS, createEventId } from '../../utils/cita-utils';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-consulta-citas',
  templateUrl: './consulta-citas.component.html',
  styleUrls: ['./consulta-citas.component.css'],
})
export class ConsultaCitasComponent {
  calendarVisible = signal(true);

  calendarOptions = signal<CalendarOptions>({
    initialView: 'dayGridMonth',
    themeSystem: 'bootstrap5',
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    locale: esLocale,
    //dateClick: this.handleDateClick.bind(this), // MUST ensure `this` context is maintained
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
    // events: [
    //   { title: 'event 1', date: '2023-11-01' },
    //   { title: 'event 2', date: '2023-11-01' },
    // ],
    initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    eventColor: '#D50000',
    weekends: true,
    editable: false,
    selectable: true,
    selectMirror: false,
    dayMaxEvents: false,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
  });
  selectedDate: Date | null = null; // Almacena la fecha seleccionada
  selectedAppointments: EventInput[] = []; // Almacena las citas seleccionadas
  //currentEvents: Signal<EventApi[]> = signal([]);
  // handleDateClick(arg: any) {
  //   console.log('date click! ' + arg.dateStr);
  // }
  constructor(
    private changeDetector: ChangeDetectorRef,
    private datePipe: DatePipe
  ) {}
  ngOnInit() {
    this.loadDailyAppointments();
  }
  loadDailyAppointments() {
    // // Obtén eventos de hoy y actuliza currentEvents
    const dailyAppointments = this.getDailyAppointments(new Date());
    // this.currentEvents.update(() => dailyAppointments);
    //this.calendarOptions.set({ events: dailyAppointments });
    const hoy = new Date();
    console.log(hoy);
    this.selectedDate = hoy;
    this.selectedAppointments = this.getDailyAppointments(hoy);
  }
  handleCalendarToggle() {
    this.calendarVisible.update((bool) => !bool);
  }

  handleWeekendsToggle() {
    this.calendarOptions.mutate((options) => {
      options.weekends = !options.weekends;
    });
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    //const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;
    this.selectedDate = selectInfo.start;
    console.log(this.selectedDate);

    this.selectedAppointments = this.getDailyAppointments(this.selectedDate);
    console.log(this.selectedAppointments);
    calendarApi.unselect(); // clear date selection

    // if (title) {
    //   calendarApi.addEvent({
    //     id: createEventId(),
    //     title,
    //     start: selectInfo.startStr,
    //     end: selectInfo.endStr,
    //     allDay: selectInfo.allDay,
    //   });
    // }
  }

  handleEventClick(clickInfo: EventClickArg) {
    // if (
    //   confirm(
    //     `Are you sure you want to delete the event '${clickInfo.event.title}'`
    //   )
    // ) {
    //   clickInfo.event.remove();
    // }
  }

  handleEvents(events: EventApi[]) {
    //this.currentEvents.set(events);
    this.changeDetector.detectChanges(); // workaround for pressionChangedAfterItHasBeenCheckedError
  }

  getDailyAppointments(date: Date): EventInput[] {
    const dateStr = date.toISOString().split('T')[0];
    return INITIAL_EVENTS.filter((event) => {
      let eventStart: Date | undefined;

      if (typeof event.start === 'string') {
        eventStart = new Date(event.start);
      } else if (typeof event.start === 'number') {
        eventStart = new Date(event.start);
      } else if (event.start instanceof Date) {
        eventStart = event.start;
      }

      return (
        eventStart &&
        this.datePipe.transform(eventStart, 'yyyy-MM-dd') === dateStr
      );
    });
  }
  formatDate(date: DateInput | undefined): string {
    if (!date) {
      return ''; // Otra cadena predeterminada o manejo de caso nulo
    }

    // Convierte 'date' a una cadena si no lo es
    const dateString = typeof date === 'string' ? date : date.toString();

    const parsedDate = new Date(dateString);

    if (isNaN(parsedDate.getTime())) {
      return ''; // Manejo del caso en que 'date' no es una fecha válida
    }

    return this.datePipe.transform(parsedDate, 'hh:mm a') || '';
  }
}
