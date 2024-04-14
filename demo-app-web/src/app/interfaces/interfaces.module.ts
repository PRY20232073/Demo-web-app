import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterfacesRoutingModule } from './interfaces-routing.module';
import { CitaOnlineComponent } from './pages/cita-online/cita-online.component';
import { ConsultaCitasComponent } from './pages/consulta-citas/consulta-citas.component';
import { EspecialidadesComponent } from './pages/especialidades/especialidades.component';
import { HorariosComponent } from './pages/horarios/horarios.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { BuzonSugerenciasComponent } from './pages/buzon-sugerencias/buzon-sugerencias.component';
import { BuzonQuejasComponent } from './pages/buzon-quejas/buzon-quejas.component';
import { UbicacionComponent } from './pages/ubicacion/ubicacion.component';
import { MaterialModule } from '../material/material.module';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { HttpClientModule } from '@angular/common/http';
import { FullCalendarModule } from '@fullcalendar/angular';
import { DatePipe } from '@angular/common';
import { DoctoresComponent } from './pages/doctores/doctores.component';
import { SharedModule } from '../shared/shared.module';
import { MapScreenComponent } from './pages/ubicacion/components/map-screen/map-screen.component';
import { MapViewComponent } from './pages/ubicacion/components/map-view/map-view.component';
@NgModule({
  declarations: [
    CitaOnlineComponent,
    ConsultaCitasComponent,
    EspecialidadesComponent,
    HorariosComponent,
    ContactenosComponent,
    BuzonSugerenciasComponent,
    BuzonQuejasComponent,
    UbicacionComponent,
    DoctoresComponent,
    MapScreenComponent,
    MapViewComponent,
  ],
  providers: [DatePipe],
  imports: [
    FullCalendarModule,
    CommonModule,
    NgbModalModule,
    InterfacesRoutingModule,
    MaterialModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    HttpClientModule,
    SharedModule,
  ],
})
export class InterfacesModule {}
