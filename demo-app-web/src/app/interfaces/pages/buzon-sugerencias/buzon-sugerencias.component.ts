import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-buzon-sugerencias',
  templateUrl: './buzon-sugerencias.component.html',
  styleUrls: ['./buzon-sugerencias.component.css'],
})
export class BuzonSugerenciasComponent {
  startDate = new Date(2005, 1, 1);

  tipoDocumento: any[] = [
    { value: 'DNI', viewValue: 'DNI' },
    { value: 'Pasaporte', viewValue: 'Pasaporte' },
  ];
  sugerencia = this.fb.group({
    tipoDocumento: [this.tipoDocumento[0].value, Validators.required],
    numeroDocumento: ['', Validators.required],
    numeroCelular: ['', Validators.required],
    fechaNacimiento: ['', Validators.required],
    correoElectronico: ['', Validators.required],
    comentario: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}
}
