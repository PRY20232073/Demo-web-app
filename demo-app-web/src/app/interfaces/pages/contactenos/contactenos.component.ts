import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css'],
})
export class ContactenosComponent {
  startDate = new Date(2005, 1, 1);
  FormComplete = 0;

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
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  submitForm() {
    this.markFormGroupTouched(this.contactenos);
    if (this.contactenos.valid) {
      console.log('paso todas las validaciones');
      Swal.fire({
        title: 'En contacto',
        text: 'Lo estaremos contactando pronto',
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'Aceptar',
      }).then((result) => {
        if (result.isConfirmed) {
          this.FormComplete = 1;
        }
      });
    } else {
      console.log('no paso todas las validaciones');
    }
  }
}
