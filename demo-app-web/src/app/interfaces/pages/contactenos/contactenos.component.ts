import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css'],
})
export class ContactenosComponent {
  startDate = new Date(2005, 1, 1);

  tipoDocumento: any[] = [
    { value: 'DNI', viewValue: 'DNI' },
    { value: 'Pasaporte', viewValue: 'Pasaporte' },
  ];
  contactenos = this.fb.group({
    tipoDocumento: [this.tipoDocumento[0].value, Validators.required],
    numeroDocumento: ['', Validators.required],
    numeroCelular: ['', Validators.required],
    fechaNacimiento: ['', Validators.required],
    correoElectronico: ['', Validators.required],
    comentario: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}
}
