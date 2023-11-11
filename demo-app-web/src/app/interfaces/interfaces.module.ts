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
  ],
  imports: [
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
  ],
})
export class InterfacesModule {}
