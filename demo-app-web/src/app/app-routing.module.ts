import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitaOnlineComponent } from './interfaces/pages/cita-online/cita-online.component';
import { ConsultaCitasComponent } from './interfaces/pages/consulta-citas/consulta-citas.component';
import { EspecialidadesComponent } from './interfaces/pages/especialidades/especialidades.component';
import { HorariosComponent } from './interfaces/pages/horarios/horarios.component';
import { ContactenosComponent } from './interfaces/pages/contactenos/contactenos.component';
import { BuzonSugerenciasComponent } from './interfaces/pages/buzon-sugerencias/buzon-sugerencias.component';
import { BuzonQuejasComponent } from './interfaces/pages/buzon-quejas/buzon-quejas.component';
import { UbicacionComponent } from './interfaces/pages/ubicacion/ubicacion.component';

const routes: Routes = [
  { path: 'crear-cita', component: CitaOnlineComponent },
  { path: 'consultar-cita', component: ConsultaCitasComponent },
  { path: 'especialidades', component: EspecialidadesComponent },
  { path: 'horarios', component: HorariosComponent },
  { path: 'en-contacto', component: ContactenosComponent },
  { path: 'buzon-sugerencias', component: BuzonSugerenciasComponent },
  { path: 'buzon-quejas', component: BuzonQuejasComponent },
  { path: 'ubicaciones', component: UbicacionComponent },
  // Otras rutas si las tienes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
