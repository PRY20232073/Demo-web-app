import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-buzon-quejas',
  templateUrl: './buzon-quejas.component.html',
  styleUrls: ['./buzon-quejas.component.css'],
})
export class BuzonQuejasComponent {
  tipoDocumento: any[] = [
    { value: 'DNI', viewValue: 'DNI' },
    { value: 'Pasaporte', viewValue: 'Pasaporte' },
  ];
  tipoQueja: any[] = [
    { value: 'DNI', viewValue: 'Atencion al Cliente' },
    { value: 'Pasaporte', viewValue: 'Diseño de la web' },
  ];
  quejas = this.fb.group({
    tipoDocumento: [this.tipoDocumento[0].value, Validators.required],
    numeroDocumento: ['', Validators.required],
    numeroCelular: ['', Validators.required],
    fechaQueja: ['', Validators.required],
    correoElectronico: ['', Validators.required],
    comentario: ['', Validators.required],
    tipoQueja: [this.tipoQueja[0].value, Validators.required],
  });

  constructor(private fb: FormBuilder) {}
}
